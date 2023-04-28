import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import '../styles/login.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const Navigate = useNavigate()
    const [passShow, setPassshow] = useState(false);


    const [inpval, setInpval] = useState({
        email: '',
        password: '',
    })

    const setVal = (e) => {
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const loginuser = async (e) => {
        e.preventDefault();
        const { email, password } = inpval;
        if (email === "") {
            toast("Please Enter the email", {
                autoClose: 3000,
            })
        } else if (!email.includes('@')) {
            toast("Please Enter the valid email", {
                autoClose: 3000,
            })
        } else if (password === " ") {
            toast("Please Enter  Your password", {
                autoClose: 3000,
            })
        } else if (password.length < 6) {
            toast("Password must be 6 characters", {
                autoClose: 3000,
            })
        } else {
            const data = await fetch(`http://localhost:5000/user/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });
            const res = await data.json();
            if (res.status === (201)) {
                toast("Logged In successfully", {
                    autoClose: 3000,
                })
                localStorage.setItem('token', res.token);
                localStorage.setItem('id', res.user?._id);
                Navigate('/enterdata')
                setInpval({ ...inpval, email: " ", password: "" })
            } else if (res.status !== (201)) {
                toast("Please Enter correct Details", {
                    autoClose: 3000,
                })
            }
        }
    }

    return (
        <>
            <section className='container login'>
                <div className='form_data' >
                    <div className='form_heading'>
                        <h1>Welcome to Login</h1>
                    </div>

                    <form>
                        <div className='form_input'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name="email" value={inpval.email} id='email' placeholder='Enter Your Email Address' onChange={setVal} />
                        </div>

                        <div className='form_input'>
                            <label htmlFor='password'>Password</label>
                            <div className='two'>
                                <input type={!passShow ? "password" : "text"} value={inpval.password} name="password" id='password' placeholder='Enter Your password' onChange={setVal} />
                                <div className='showpass' onClick={() => setPassshow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={loginuser} >Login</button>
                        <p>Don't have an Account? <Link to="/signup"> Sign Up</Link></p>
                    </form>
                </div>
            </section>

            <ToastContainer />
        </>
    )
}

export default Login
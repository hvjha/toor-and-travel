import React, {useState } from 'react';
import '../styles/register.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {;

    const [passShow, setPassshow] = useState(false);
    const [cpassShow, setCPassshow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const setVal = (e) => {
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addUserdata = async (e) => {
        e.preventDefault();

        const { fname, email, password, cpassword } = inpval;

        if (fname === '') {
            toast("Enter Your Name", {
                autoClose: 1500,
            })
        } else if (email === "") {
            toast("Enter Your Email Id", {
                autoClose: 1500,
            })
        } else if (!email.includes('@')) {
            toast("Please Enter valid email", {
                autoClose: 1500,
            })
        } else if (password === " ") {
            toast("Enter Your Password", {
                autoClose: 1500,
            })
        } else if (password.length < 6) {
            toast("Password must be 6 characters", {
                autoClose: 1500,
            })
        } else if (cpassword === " ") {
            alert('')
            toast("Please Enter Your Confirm password", {
                autoClose: 1500,
            })
        } else if (cpassword.length < 6) {
            toast("Password must be 6 characters", {
                autoClose: 1500,
            })
        } else if (password !== cpassword) {
            toast("Password no match", {
                autoClose: 1500,
            })
        } else {
            const data = await fetch(`http://localhost:5000/user/signup`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password
                })
            });

            const res = await data.json();
            if (res.status === (201)) {
                toast("Registration done successfully", {
                    autoClose: 1500,
                })
                setInpval({ ...inpval, fname: " ", email: " ", password: "", cpassword: "" })
            } else {
                toast("Please Enter Correct Details!", {
                    autoClose: 1500,
                })
            }
        }
    }

    return (
        <>

            <section className='container ragister'>
   

                <div className='form_data' >
                    <div className='form_heading'>
                        <h1>Sign Up</h1>
                    </div>

                    <form>
                        <div className='form_input'>
                            <label htmlFor='fname'>Name</label>
                            <input type='text' onChange={setVal} value={inpval.fname} name="fname" id='fname' placeholder='Enter Your Name' />
                        </div>

                        <div className='form_input'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' onChange={setVal} value={inpval.email} name="email" id='email' placeholder='Enter Your Email Address' />
                        </div>

                        <div className='form_input'>
                            <label htmlFor='password'>Password</label>
                            <div className='two' >
                                <input onChange={setVal} type={!passShow ? "password" : "text"} value={inpval.password} name="password" id='password' placeholder='Enter Your passsword' />
                                <div className='showpass' onClick={() => setPassshow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <div className='form_input'>
                            <label htmlFor='password'>Confirm Password</label>
                            <div className='two' >
                                <input onChange={setVal} type={!cpassShow ? "password" : "text"} name="cpassword" value={inpval.cpassword} id='cpassword' placeholder='Confirm Password' />
                                <div className='showpass' onClick={() => setCPassshow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={addUserdata} >Sign Up</button>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default Register
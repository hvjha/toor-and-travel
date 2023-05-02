import React, { useState } from 'react'
import '../styles/entry.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import {useNavigate } from 'react-router-dom';

const EnterData = () => {
    // const navigate = useNavigate()
    const [inpval, setInpval] = useState({
        state: '',
        city: '',
        place: "",
        video: "",
        photo: "",
        msg: ""
    })

    console.log(inpval)

    const SavedData = async (e) => {
        e.preventDefault();
        const data = await fetch(`http://localhost:5000/data/datauser`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({
                inpval
            })
        });
        const res = await data.json();
        if (res) {
            toast("Your Data Saved Successfully", {
                autoClose: 2000,
            })
         
        }
    }


    return (
        <>
            <section className="contact" id="contact">
                <div class="row">
                    <form>
                        <div class="inputBox">
                            <input type="text" placeholder="State" name='state' onChange={(e) => { setInpval((prev) => ({ ...prev, state: e.target.value })) }} />
                            <input type="text" placeholder="City" name='city' onChange={(e) => { setInpval((prev) => ({ ...prev, city: e.target.value })) }} />
                            <input type="text" placeholder="Placename" name='placename' onChange={(e) => { setInpval((prev) => ({ ...prev, place: e.target.value })) }} />
                        </div>
                        <div class="inputBox">
                            <input type="file" onchance="readURL(this)" accept="Image" placeholder="photo" name='photo' onChange={(e) => { setInpval((prev) => ({ ...prev, photo: e.target.value })) }} />
                            <input type="file" onchance="readURL(this)" accept="Video" placeholder="video" name='video' onChange={(e) => { setInpval((prev) => ({ ...prev, video: e.target.value })) }} />
                        </div>
                        <textarea name="" placeholder="Message" id="" cols="30" rows="10" onChange={(e) => { setInpval((prev) => ({ ...prev, msg: e.target.value })) }} />
                        <input type="submit" value="SavedData" onClick={SavedData} className="btn1" />
                    </form>
                </div>
            </section>

            <ToastContainer />
        </>
    )
}

export default EnterData

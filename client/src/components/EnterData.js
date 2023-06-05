import React, { useState } from 'react'
import '../styles/entry.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const EnterData = () => {
    const [inpval, setInpval] = useState({
        state: '',
        city: '',
        place: "",
        video: "",
        photo: "",
        msg: ""
    })

    // console.log(localStorage.getItem("token"))

    const SavedData = async (e) => {
        e.preventDefault();
        var letters = /^[A-Za-z]+$/;
        const { state, city, place, msg } = inpval;
        if (state === '') {
            toast("Enter State Name", {
                autoClose: 2000,
            })
        } else if (!state?.match(letters)) {
            console.log(typeof state)
            toast("Plz Enter Text Only", {
                autoClose: 2000,
            })
        } else if (city === "") {
            toast("Enter city Name", {
                autoClose: 2000,
            })
        } else if (!state?.match(letters)) {
            toast("Plz Enter Text Only", {
                autoClose: 2000,
            })
        }
        else if (place === "") {
            toast("Enter Place Name", {
                autoClose: 2000,
            })
        } else if (!state?.match(letters)) {
            toast("Plz Enter Text Only", {
                autoClose: 2000,
            })
        } else if (msg === "") {
            toast("Plz Write Some details", {
                autoClose: 2000,
            })
        } else {
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
            console.log(res, "response")
            if (res) {
                toast("Your Data Saved Successfully", {
                    autoClose: 2000,
                })

            }
        }
    }

    return (
        <>
            <section className='container formstart '>
                <div class="row">
                    <form className='inputform' >
                        <h3 className='my-4' >Add Your Details</h3>
                        <div class="inputBox">
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="State" name='state' onChange={(e) => { setInpval((prev) => ({ ...prev, state: e.target.value })) }} />
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="City" name='city' onChange={(e) => { setInpval((prev) => ({ ...prev, city: e.target.value })) }} />
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Placename" name='placename' onChange={(e) => { setInpval((prev) => ({ ...prev, place: e.target.value })) }} />
                        </div>

                        <div class="inputBox my-4">
                            <label className='headings' for="exampleInputEmail1">Image</label>
                            <input type="file" onchance="readURL(this)" accept="Image" placeholder="photo" name='photo' onChange={(e) => { setInpval((prev) => ({ ...prev, photo: e.target.value })) }} />
                            <label className='headings' for="exampleInputEmail1">Video</label>
                            <input type="file" onchance="readURL(this)" accept="Video" placeholder="video" name='video' onChange={(e) => { setInpval((prev) => ({ ...prev, video: e.target.value })) }} />
                        </div>
                        <textarea name="" placeholder="Message" cols="100" rows="8" onChange={(e) => { setInpval((prev) => ({ ...prev, msg: e.target.value })) }} />
                        <div className='text-center my-4 ' >
                            <input type="submit" value="Save" onClick={SavedData} className="btn1" />
                        </div>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default EnterData

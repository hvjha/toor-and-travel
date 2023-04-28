import React, { useState } from 'react'
import '../styles/entry.css'

const EnterData = () => {
    const [inpval, setInpval] = useState({
        state: '',
        city: '',
        place: "",
        video: "",
        photo: "",
        msg: ""
    })

    const SavedData = async (e) => {
        e.preventDefault();
        const data = await fetch(`http://localhost:5000/data/datauser`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inpval
            })
        });
        const res = await data.json();
        console.log(res, "res")
    }


    return (
        <>
            <div class="container">
                <form>
                    <div class="inputBox">
                        <input type="text" placeholder="state" name='state' onChange={(e) => { setInpval((prev) => ({ ...prev, state: e.target.value })) }} />
                        <input type="text" placeholder="city" name='city' onChange={(e) => { setInpval((prev) => ({ ...prev, city: e.target.value })) }} />
                        <input type="text" placeholder="placename" name='placename' onChange={(e) => { setInpval((prev) => ({ ...prev, place: e.target.value })) }} />
                    </div>
                    <div class="inputBox">
                        <input type="file" onchance="readURL(this)" accept="Image" placeholder="photo" name='photo' onChange={(e) => { setInpval((prev) => ({ ...prev, photo: e.target.value })) }} />
                        <input type="file" onchance="readURL(this)" accept="Video" placeholder="video" name='video' onChange={(e) => { setInpval((prev) => ({ ...prev, video: e.target.value })) }} />
                    </div>
                    <textarea name="" placeholder="message" id="" cols="30" rows="10" onChange={(e) => { setInpval((prev) => ({ ...prev, msg: e.target.value })) }} />
                </form>
            </div>
        </>
    )
}

export default EnterData

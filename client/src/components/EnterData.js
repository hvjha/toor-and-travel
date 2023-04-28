import React from 'react'
import '../styles/entry.css'

const EnterData = () => {
    return (
        <>
         <section class="contact" id="contact">

<div class="row">

<form action="">
            <div className="inputBox">
                <input type="text" placeholder="state"/>
                <input type="text" placeholder="city"/>
                <input type="text" placeholder="placename"/>
            </div>
            <div className="inputBox">
                <input type="file" onchance="readURL(this)" accept="Image"placeholder="photo"/>
                <input type="file" onchance="readURL(this)" accept="Video"placeholder="video"/>
            </div>
            <textarea name="" placeholder="message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="SavedData" className="btn1"/>
        </form>

</div>

</section>
       
        </>
    )
}

export default EnterData

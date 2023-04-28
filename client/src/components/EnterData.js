import React from 'react'
import '../styles/entry.css'

const EnterData = () => {
    return (
        <>
           <div class="row">
        
        <form action="">
            <div class="inputBox">
                <input type="text" placeholder="state"/>
                <input type="text" placeholder="city"/>
                <input type="text" placeholder="placename"/>
            </div>
            <div class="inputBox">
                <input type="file" onchance="readURL(this)" accept="Image"placeholder="photo"/>
                <input type="file" onchance="readURL(this)" accept="Video"placeholder="video"/>
            </div>
            <textarea name="" placeholder="message" id="" cols="30" rows="10"></textarea>
        </form>
    
        {/* <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1626697480414!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe> */}
    
    </div>
        </>
    )
}

export default EnterData

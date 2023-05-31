import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {
    const location = useLocation()
    return (
        <>
            <div className="container" >
                <div className="cardtext my-4 " >
                    <div className="startVideo" >
                        <div className='text-center' >
                            <img src={location.state?.photo} ></img>
                        </div>
                        <div className='text ' >
                            <span >State: {location.state?.state}</span><br></br>
                            <span>City: {location.state?.city}</span> <br></br>
                            <span>Place: {location.state?.placeName}</span>
                        </div>

                    </div>
                </div>
                <div  >
                    <span>{location.state?.text}</span>
                </div>
            </div>

        </>
    )
}

export default Details

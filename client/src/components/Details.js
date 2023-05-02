import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {

    const location = useLocation()
    console.log(location.state)

    return (
        <>
            <div className="container" >
                <div className="cardstext" >
                    <div className="startVideo" >

                        <div className='imhVideo' >
                            <div>
                                <img src={location.state?.photo} ></img>
                            </div>
                            {/* <div>
                                 {location.state?.video}
                            </div> */}
                        </div>

                        <div  >
                            <small>{location.state?.text}</small>
                        </div>

                        <div className='d-flex ' >
                            <div>
                                <span>{location.state?.city}</span>
                            </div>
                        </div>
                        <div>
                            <span>{location.state?.state}</span>
                        </div>

                        <div>
                            <span>{location.state?.placeName}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Details

import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const TourCard = () => {

  const [data, setData] = useState();
  const navigate = useNavigate()

  const getData = async () => {
    const response = await fetch(`http://localhost:5000/data/AllUserData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const json = await response.json();
    setData(json);
    console.log(json, "sklamdl")
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className="container" >
        <div className="cardstext" >
          {data?.map((items, index) => {
            return (
              <>
                <div className="startcard" >
                  <div>
                    <img src={items.photo} ></img>
                  </div>

                  <div className='my-2' >
                    <span>{items.city}</span>
                  </div>

                  <div  className='my-1' >
                    <span>{items.placeName}</span>
                  </div>

                  <div  className='my-1' >
                    <span>{items.state}</span>
                  </div>
                  <div className='my-4' >
                    <NavLink to={"/tours/details"} className="btn-more" state={items} >View More </NavLink>
                  </div>
                </div>

              </>
            )
          })
          }

        </div>
      </div>
    </>
  )
}

export default TourCard

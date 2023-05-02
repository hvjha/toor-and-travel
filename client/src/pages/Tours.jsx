import React, { useEffect, useState } from "react";
import "../styles/tour.css";

const Tours = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch(`http://localhost:5000/data/UserEnteredData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")
      },
    });
    const json = await response.json();
    setData(json);
    // console.log(json,"sklamdl")
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <>

      <div className="container" >
        <div className="cardstext" >
          {
            data?.map((items, index) => {
              return (
                <>
                  <div className="startcard" >
                    <div>
                      <img src={items.photo} ></img>
                    </div>
                    <div>
                      <span>{items.city}</span>
                    </div>
                    <div>
                      <span>{items.placeName}</span>
                    </div>

                    <div>
                      <span>{items.state}</span>
                    </div>
                  </div>

                </>
              )
            })
          }

        </div>
      </div>

    </>
  );
};

export default Tours;

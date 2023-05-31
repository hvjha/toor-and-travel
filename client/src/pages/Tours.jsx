import React, { useEffect, useState } from "react";
import "../styles/tour.css";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
  }

  const handleDelete = async (items) => {
    const response = await fetch(`http://localhost:5000/data/deleteData/${items._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const json = await response.json();
    toast("Deleted successfully", {
      autoClose: 3000,
    })
    getData()
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>

      <div className="container my-4 " >
        <div className="cardstext" >
          {
            data?.map((items, index) => {
              return (
                <>
                  <div key={index} className="startcard" >
                    <div>
                      <img src={items.photo} ></img>
                    </div>
                    <div className="my-1">
                      <span>{items.city}</span>
                    </div>
                    <div className="my-1" >
                      <span>{items.placeName}</span>
                    </div>

                    <div className="my-1" >
                      <span>{items.state}</span>
                    </div>

                    <div className="btns" >
                      <button className="btn-del" onClick={() => { handleDelete(items) }} >Delete</button>
                      <Link to={"/tours/details"} state={items} className="btn-view" >Veiw</Link>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>

      <ToastContainer />

    </>
  );
};

export default Tours;

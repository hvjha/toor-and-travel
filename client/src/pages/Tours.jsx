import React from "react";
import "../styles/tour.css";
import img from "../assets/images/gallery-01.jpg";

const Tours = () => {
  return (
    <section class="expert" id="experts">
      <h1 class="heading">
        place <span>visited</span>?
      </h1>
      <div class="container">
        <div class="d-flex flex-wrap justify-content-center">
          <div class="box p-4 m-2">
            <img src={img} />
            <div class="icons">
              <div className="first">Placename</div>
              <div classNaame="second">
                <table>
                  <tr>
                    <th>coity</th>
                    <th>state</th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="box p-4 m-2">
            <img src={img} />
            <h3>Priti</h3>
            <span>virus expert</span>
          </div>
          <div class="box p-4 m-2">
            <img src={img} />
            <h3>Priti</h3>
            <span>virus expert</span>
          </div>
          <div class="box p-4 m-2">
            <img src={img} />
            <h3>Harsh</h3>
            <span>virus expert</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;

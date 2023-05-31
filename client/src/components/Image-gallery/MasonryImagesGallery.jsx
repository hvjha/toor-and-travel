import React, { useEffect, useState } from 'react'


const MasonryImagesGallery = () => {

  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch(`http://localhost:5000/data/AllUserData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className='allimages' >

        {data?.map((item, index) => {
          return (
            <>
                <img className='masonry__img' src={item.photo} key={index} alt='' style={{ 'widht': '100%', 'display': 'block', 'borderRadius': '10px' }} />
        
            </>
          )
        })
        }
      </div>
    </>

  )
}

export default MasonryImagesGallery
import React, { useState } from "react";
import './App.css'
import CarouselSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

  let [show1, setShow1] = useState(false);
  const showHide1 = () => {
    setShow1(!show1);
  }

  let[show2,setShow2]= useState(false);
  const showHide2=()=>{
    setShow2(!show2);
  }

  let[show3,setShow3]=useState(false);
  const showHide3=()=>{
    setShow3(!show3);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "0.62rem",
          padding: "0rem"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "1.8rem",
          color: "purple",
          border: "0.06rem blue solid"
        }}
      >
        {i + 1}
      </div>
    )
  };

  return (

    <CarouselSlider {...settings}>
      {data.map((d, index) => (
        <div key={index}>
          <div className="heading">{d.month}</div>
          <div className="Box1">
            <ul>
              <li className="box2">

                <div className="imageBox">
                  <img src='/assets/pic.png' alt="1 jan" />
                </div>
                <div className="sideBox">
                  <div className="b">{d.content1}</div>
                  <p>{d.content2}</p>
                </div>
                <div className="button"><button onClick={showHide1}>i</button>

                </div>

              </li>
              {
                show1 && <div className="hid"><li  >{d.content3}</li></div>
              }


              <li className="box2">

                <div className="imageBox">
                  <img src='/assets/pic.png' alt="1 jan" />
                  {console.log(d.image)}
                </div>
                <div className="sideBox">
                  <div className="b">{d.content1}</div>
                  <p>{d.content2}</p>
                </div>
                <div className="button"><button onClick={showHide2}>i</button>
                </div>
              </li>
              {
                show2 &&<div className="hid"> <li >{d.content3}</li></div>
              }

              <li className="box2">

                <div className="imageBox">
                  <img src='/assets/pic.png' alt="1 jan" />
                </div>
                <div className="sideBox">
                  <div className="b">{d.content1}</div>
                  <p>{d.content2}</p>
                </div>
                <div className="button"><button onClick={showHide3}>i</button></div>
              </li>
              {
                show3 &&<div className="hid"> <li >{d.content3}</li></div>
              }

            </ul>
          </div>
          <div className="seeMore">
            <button className="see">See More</button>
          </div>
          <br />

        </div>
      ))
      }


    </CarouselSlider>
  );
}

const data = [
  {
    index: 0,
    month: `January`,
    content1: `New Year`,
    content2: `Something something something`,
    content3: `something`,
  },
  {
    index: 1,
    month: `February`,
    content1: `Leap Year`,
    content2: `Something something something`,
    content3: `something`,
  },

  {
    index:2,
    month: `March`,
    content1: `Holi`,
    content2: `Something something something`,
    content3: `something`,

  },
  {
    index: 3,
    month: `April`,
    content1: `Something`,
    content2: `Something something something`,
    content3: `something`,
  },
  {
    index: 4,
    month: `May`,
    content1: `Something`,
    content2: `Something something something`,
    content3: `something`,
  },

  {
    index:5,
    month: `June`,
    content1: `Something`,
    content2: `Something something something`,
    content3: `something`,

  },
  {
    index:6,
    month: `July`,
    content1: `Something`,
    content2: `Something something something`,
    content3: `something`,
  },
  {
    index:7,
    month: `August`,
    content1: `Something`,
    content2: `Something something something`,
    content3: `something`,
  },

  {
    index:8,
    month: `September`,
    content1: `Something`,
    content2: `Something something something`,
    content3: `something`,

  },
  {
    index:9,
    month: `October`,
    content1: `Something`,
    content2: `Something something something`,
    content3: `something`,
  },
  {
    index:10,
    month: `November`,
    content1: `Something`,
    content2: `Something something something`,
    content3: `something`,
  },

  {
    index:11,
    month: `December`,
    content1: `Something`,
    content2: `Something something something`,
    content3: `something`,

  },
]

export default App;

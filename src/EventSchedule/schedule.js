import React, { useState } from "react";
import './schedule.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Schedule() {
  
  let [show,setShow]=useState(false);
    const showHide=()=>{
      console.log("show jide main hoon");
    setShow(!show);
    console.log(show);
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
    
     <Slider {...settings}>
   {data.map((d,index)=>(
  <div key={index}>
    <div  className="heading">{d.month}</div>
    <div className="Box1">
      <ul>
       <li className="box2">
        
        <div className="imageBox">
          <img src='/assets/pic.png' alt="1 jan"/>
        </div>
        <div className="sideBox">
          <div className="b">{d.content1}</div>
          <p>{d.content2}</p>
        </div>
        <div className="button"><button onClick={showHide}>i</button>
        
        </div>

       </li>
             {
              show && <div className="hid"><li  >{d.content3}</li><li>something2</li></div>
             }
            
      
       <li className="box2">
        
        <div className="imageBox">
          <img src='/assets/pic.png' alt="1 jan"/>
          {console.log(d.image)}
        </div>
        <div className="sideBox">
          <div className="b">{d.content1}</div>
          <p>{d.content2}</p>
        </div>
        <div className="button"><button onClick={()=>showHide()}>i</button></div>
       </li>
       {
        show?<li className="hidden">something</li>:null
       }

       <li className="box2">
        
        <div className="imageBox">
          <img src='/assets/pic.png' alt="1 jan"/>
        </div>
        <div className="sideBox">
          <div className="b">{d.content1}</div>
          <p>{d.content2}</p>
        </div>
        <div className="button"><button onClick={showHide}>i</button></div>
       </li>
       {
        show?<li className="hidden">something</li>:null
       }

      </ul>
    </div>
    <div className="seeMore">
    <button className="see">See More</button>
   </div>
   <br/>
  
  </div>
   ))
   }
  
   
   </Slider>
  );
}

const data = [
  {
    index:0,
    month: `January`,
    image: `./pic.png`,
    content1:`New Year`,
    content2:`Something something something`,
    content3 : `something`,
  },
  {
    index:1,
    month: `February`,
    image: `./pic.png`,
    content1:`Leap Year`,
    content2:`Something something something`,
    content3 : `something`,
  },
  
   {
    month: `March`,
    image: `.\pic.png`,
    content1:`Holi`,
    content2:`Something something something`,
    content3 : `something`,
  
   },
  // {
  //   month: `April`,
  //   image: `.\pic.png`,
  //   content1:`New Year`,
  //   content2:`Something something something`,
  //   content3 : `something`,
  // },
  // {
  //   month: `May`,
  //   image: `.\pic.png`,
  //   content1:`Leap Year`,
  //   content2:`Something something something`,
  //   content3 : `something`,
  // },
  
  // {
  //   month: `June`,
  //   image: `.\pic.png`,
  //   content1:`Holi`,
  //   content2:`Something something something`,
  //   content3 : `something`,
  
  // },
  // {
  //   month: `July`,
  //   image: `.\pic.png`,
  //   content1:`New Year`,
  //   content2:`Something something something`,
  //   content3 : `something`,
  // },
  // {
  //   month: `August`,
  //   image: `.\pic.png`,
  //   content1:`Leap Year`,
  //   content2:`Something something something`,
  //   content3 : `something`,
  // },
  
  // {
  //   month: `September`,
  //   image: `.\pic.png`,
  //   content1:`Holi`,
  //   content2:`Something something something`,
  //   content3 : `something`,
  
  // },
  // {
  //   month: `October`,
  //   image: `.\pic.png`,
  //   content1:`New Year`,
  //   content2:`Something something something`,
  //   content3 : `something`,
  // },
  // {
  //   month: `November`,
  //   image: `.\pic.png`,
  //   content1:`Leap Year`,
  //   content2:`Something something something`,
  //   content3 : `something`,
  // },
  
  // {
  //   month: `December`,
  //   image: `.\pic.png`,
  //   content1:`Holi`,
  //   content2:`Something something something`,
  //   content3 : `something`,
  
  // },
]

export default Schedule;

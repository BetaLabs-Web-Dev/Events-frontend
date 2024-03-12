import React from 'react';
import './Feedback.css';

const Feedback = () => {
  return (
      <div className="flex flex-col mt-16 gap-14">
        <h2 className="text-4xl font-bold text-center font-josefin">Feedback</h2>
        <div className="flex flex-wrap justify-evenly ">
        <img src='assets/feedback-image.png' className="" alt="table"/>
        <form className="flex flex-col gap-4">
            <div>
                <label className="text-lg font-semibold font-josefin">NAME</label><br/>
                <input type="text" className="box-border px-2 py-2 border-2 border-white rounded-lg w-[27rem]"/>
            </div>
            <div>
                <label className="text-lg font-semibold font-josefin">EMAIL</label><br/>
                <input type="email" className="box-border px-2 py-2 border-2 border-white rounded-lg w-[27rem]"/>
            </div>
            <div>
                <label className="text-lg font-semibold font-josefin">MESSAGE</label><br/>
                <input type="text" className="box-border px-2 py-2 border-2 border-white rounded-lg  w-[27rem]"/>
            </div>
            <br></br>
            <button className="self-center py-2 text-xl font-semibold text-black cursor-pointer w-28 rounded-xl font-josefin bg-slate-50">SEND</button>
        </form>
            </div>
        </div>
  )
}

export default Feedback;
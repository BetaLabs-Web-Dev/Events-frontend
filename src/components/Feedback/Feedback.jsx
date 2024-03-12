import React from 'react';
import './Feedback.css';

const Feedback = () => {
    return (
        <div className="flex flex-col mt-5 gap-[20px] items-center w-full">
            <h2 className="text-[36px] font-bold">Feedback</h2>
            <div className="flex flex-wrap items-center gap-12 justify-center">
                <img src='assets/images/feedback-img.png' className="w-[75vw] md:w-[40vw]" alt="table" />
                <form className="feedback-form flex flex-col gap-4 items-center text-[18px]">
                    <div>
                        <label className="font-semibold">Full Name</label><br />
                        <input type="text" className="py-2 w-[300px] md:w-[400px]" />
                    </div>
                    <div>
                        <label className="font-semibold">Email</label><br />
                        <input type="email" className="py-2 w-[300px] md:w-[400px]" />
                    </div>
                    <div>
                        <label className="font-semibold">Message</label><br />
                        <textarea className="py-2 w-[300px] md:w-[400px]" rows={2}/>
                    </div>
                    <br></br>
                    <button className="px-5 py-2 text-black font-semibold rounded-md bg-white w-fit text-[18px]">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Feedback;
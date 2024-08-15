import { useState, useEffect } from "react";
import School from "./School";
import '../../styles/resumes.scss';

const pdfUrlFR = process.env.PUBLIC_URL + '/cv_prw.pdf';
const pdfUrlEN = process.env.PUBLIC_URL + '/resume_prw.pdf';

const videoUrl = "http://localhost:8000/media/videos/background_video.mp4";

const Resumes = () => {



    return (
        <div className="resumes-background">
            <video className="video" src={videoUrl} autoPlay={true} loop={true} muted={true}/>
            <div className="resumes-container">
                    <h3 className="section-title font-extrabold">Resumes 📄</h3>
                    <div className="resume" onClick={() => window.open(pdfUrlFR)}>CV | French</div>
                    <div className="resume" onClick={() => window.open(pdfUrlEN)}>RESUME | English</div>
            </div>
        </div>
    );
};

export default Resumes;

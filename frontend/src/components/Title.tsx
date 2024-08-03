import { useState, useEffect } from "react";
import "../styles//title.scss"
import WaveSeparator from "./WaveSeparator";

const Title = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Full Stack Developper", "Video Game Developper"];
  const period = 2000;
  const [videoUrl, setVideoUrl] = useState("http://localhost:8000/media/videos/background_video.mp4");

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
      <div className="title-wrapper">
        <div className="video-container ">
          <video className="video" src={videoUrl} autoPlay={true} loop={true} muted={true}/>
        </div>
        <div className="title">
            <div className="greeting">Nice to meet you ! 😊</div>
            <div className="name">I'm Pierre-Raphaël Wozny</div>
            <div className="job">{text}</div>
            {/* <img className="arrow" src="https://i.imgur.com/85AJGxP.png"/> */}
        </div>
        <WaveSeparator />
      </div>
  );  
};

export default Title;

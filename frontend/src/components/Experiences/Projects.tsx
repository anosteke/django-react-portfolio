import { useState, useEffect } from "react";
import Project from "./ProjectCard";
import '../../styles/projects.scss';

const projectImage = 'http://localhost:8000/media/images/django-react-portfolio.png'

const Projects = () => {


  return (
    <div className="jobs">
      <h3 className="job-title font-extrabold">Personal Projects 🎮</h3>
      <div className="projects-grid">
        <Project description="Escape the chaos in an exciting first person parkour game." imgSrc="https://i.giphy.com/HMHj3NpKi2GRtfoRZW.webp" skills={['Unity', 'C#']} title="Abstrack" url="https://antxnn.itch.io/abstrack"></Project>
        <Project description="In a visual VR setting worthy of the best nightclubs, enjoy your music synchronised with visual effects." imgSrc="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXltNWRhMWxkMHhkdHM2NW1iam81YTJwYWd3OHhiZHpnc2lzYm1pcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/s5lDgbaXUfzmBD6agS/giphy.gif" skills={['Unity', 'C#', 'OpenXR']} title="DJVR" url="https://pierreraphaelwozny.itch.io/djvr"></Project>
        <Project description="Butterfly is an escape-game and puzzle-based virtual reality game !" imgSrc="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWI1ejRkd3VzbjUwc3BwYmxnMXppeWd3czU4dDQ3eTVxaWl2YzU4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qK6A8nOg6J4t6RSPRV/giphy.gif" skills={['Unity', 'C#', 'OpenXR']} title="Butterfly" url="https://pierreraphaelwozny.itch.io/Butterfly"></Project>
        <Project description="ChromaScore is a rhythm game... but the DJ kinda sucks, and you've got to deal with it." imgSrc="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHBlbGh5dXJ2NGNlemloYW5jYmduc3BxcGx3a3h3aHc5bzhyaHE3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wuuqKeLFq2TeOUC9wV/giphy.gif" skills={['Unity', 'C#']} title="ChromaScore" url="https://eddiebreeg.itch.io/chromascore"></Project>
        <Project description="The current website your on !" imgSrc={projectImage} skills={['Python', 'Django', 'React', 'TypeScript', 'Tailwind']} title="Django React Portfolio" url=""></Project>

      </div>
    </div>
  );
};


export default Projects;

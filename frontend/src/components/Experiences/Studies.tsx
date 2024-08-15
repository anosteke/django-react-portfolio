import { useState, useEffect } from "react";
import School from "./School";
import '../../styles/studies.scss';

const descriptionUQAC = `
- Software development
- Video games development
- VR
`.split('\n').filter(line => line.trim() !== '');


const descriptionPolyech = `
- Software developpement
- Data Science
`.split('\n').filter(line => line.trim() !== '');
const Studies = () => {


  return (
    <div className="studies-container">
      <h3 className="section-title font-extrabold">Academic Cursus 🎓</h3>
      <section className="grid p-8 place-items-center">
      <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2">
      <School degree={'MSc Computer Science'} description={descriptionUQAC} duration={"2022-2023"} schoolName="Université du Quebec à Chicoutimi, Canada" schoolImageURL="https://www.uqac.ca/dim/wp-content/uploads/2011/09/LOGO-UQAC575vC-7po.jpg" imagePadding={'50'}></School>
      <School degree={'MEng Computer Science'} description={descriptionPolyech} duration={"2018-2023"} schoolName="Polytech Grenoble, France" schoolImageURL="https://i.hellowork.com/zfXAtPqBfhMXT7N0qiz4rgHZfRd3_oqJWlBSvAdyHZI/w:225/h:168/rt:fit/g:sm/bG9jYWw6Ly8vZWR0ZWNoL2V0YWJsaXNzZW1lbnQvbG9nby8yMDgwL2FmYmY2MDdkLTkzYmYtNGFjZi05ZTQ3LTI3ZjRmMTJmM2NiMS5zdmc.svg" imagePadding={'35'}></School>
      </div>
      </section>
    </div>
  );
};

export default Studies;

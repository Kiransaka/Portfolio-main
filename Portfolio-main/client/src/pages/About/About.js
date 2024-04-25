import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Software Engineer dedicated to improving skills through hands-on learning and development work. 
              Wellorganized and collaborative team player with strong communication and analytical abilities. 
              Complex problemsolver with analytical and driven mindset. Dedicated to achieving demanding development 
              objectives according to tight schedules while producing impeccable code. To seek and maintain full-time 
              position that offers professional challenges utilizing interpersonal skills, excellent time management and 
              problem-solving skills
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;

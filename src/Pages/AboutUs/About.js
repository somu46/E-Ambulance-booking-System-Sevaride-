import React from 'react'
import "./AboutUs.css";
import "./AboutUs.css";
const About = () => {
    const problems= [
            "Severe lack of awareness and facility of first aid communication.",
            "Inability of a person to have a top of mind recall of emergency numbers",
            "High response time",
            "Large number of calls being missed",
            "The Emergency & Ambulatory services sector is unorganised",
            "Lack of awareness coupled with the lack of technology",
            "No standard practice in ERS, affecting serviceability & customer experience",
            "No prominent national entity in emergency response."
    ];
    const solutions =[
            "End to end emergency response service",
            "GPS enabled high quality ambulances",
            "Emergency Management Technology",
            "Trained Drivers and certified Paramedics",
            "Dedicated Helpline Number",
    ];
  return (

       <>
       <div className='flex flex-wrap  justify-center items-center text-4xl text-red-600 font-bold  min-h-screen '>About Us ! This page is under Devlopment</div>

    <div className="about">
      <div className="sevaride">
        <h1>What is Sevaride</h1>
        <p>India's first, GPS based technology platform for fast and reliable first point medical attention.
          With an increasing emphasis on promoting independent living today, having access to the nearest
          ambulance to you can provide much needed peace of mind in a worst case scenario.</p>
      </div>
      <div className="history">
        <div className="history_paragraph">
          <h1>Why We</h1>
          <p>Emergency response is the most critical to the lifeline of any country. Medulance wants to inspire breakthroughs
            in the way India looks at ambulances and first-point medical attention and to touch lives. Medulance was started in
            the year 2017 to make finding an ambulance as easy as finding food or taxis these days to assist lives. Medulance is
            an integrated emergency response support provider, ambulance booking and tracking system designed to provide first-point
            medical attention.</p>
        </div>
        <div className="history_image">
          <img src="https://mehtahospital.com/wp-content/uploads/2020/04/Ambulance.jpg" alt="error" />
        </div>
      </div>
      <div className="service_promise">
        <div className="image">
          <img src="https://ihpl.llu.edu/sites/ihpl.llu.edu/files/field/image/caring-hands.jpg" alt="error" />
        </div>
        <div className="content">
          <h1>Our Service Promise</h1>
          <p>AmbiPalm will be right there at your fingertips offering Online Ambulance service giving an edge to medical assistance.
            In the age of instant cabs and pizzas, we started off with the idea of online ambulance service to make ambulance booking
            quick and hassle-free. Medical emergencies! An issue long put second on priority. AmbiPalm is here to change the idea with
            online ambulance booking services and providing a platform to Request or Donate Blood.</p>
        </div>
      </div>
      <div className="box">
        <div className="problem">
          <h1>Problem</h1>
          <p>In 2018, 1,51,000 fatalities were caused due to road accidents. 50% lives of road accident victims could have been saved
            if timely assistance was made available to them. Moreover, 40%-60% deaths in India are preventable. The major issues faced
            are -
          </p>
          <ul className="list">
            {problems.map((item,index)=>(
              <li key={0}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="solution">
          <h1>Solution</h1>
          <p>Medulance Healthcare is India's first & leading comprehensive emergency response service provider, extensively dealing in the Ambulatory Services. We provide -</p>
          <ul className="list">
            {solutions.map((item,index)=>(
              <li key={0}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
      <div className="founders">
        <div className='founders_image'>



        </div>
        <div className="details">
          
        </div>
      </div>
    </div>
    </>
  )
}

export default About;
import React from 'react'
import headShotImage from "../../assets/images/ZachFulmerHeadShot.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Zachary Austin Fulmer</h1>
      <img src={headShotImage} className="my-2" style={{width: "50%" }}alt="cover" />
      <div className="my-2">
        <p>
          First off, I want to thank you for visiting my page. My name is Zach Fulmer and I'm a 2018 Summa Cum Laude graduate from the University of Texas at San Antonio with a B.S. in Computer Engineering. For the last 4 years I have operated as an Embedded Hardware/Firmware engineer within the defense contractor industry. I'm currently seeking a role to break into web development to expand on my software skills and introduce creativity into products.
        </p>
        <ul>
          <h3>Fun Facts:</h3>
          <li>I have 3 cats</li>
          <li>I've completed 2 marathons</li>
          <li>I am my own worst critic</li>
        </ul>
      </div>
    </section>
  )
}

export default About
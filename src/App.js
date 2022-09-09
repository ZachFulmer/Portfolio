import React, { useState } from 'react';
import Nav from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {aboutSelected && <About></About>}
        {portfolioSelected && <Portfolio></Portfolio>}
        {contactSelected && <ContactForm></ContactForm>}
        {resumeSelected && <Resume></Resume>}
      </main>
      <footer>
        <ul>
          <li><a href="https://github.com/zachfulmer">GitHub Profile</a></li>
          <li><a href="https://www.linkedin.com/in/zacharyfulmer/">LinkedIn Profile</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

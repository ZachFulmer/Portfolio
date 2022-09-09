import React from "react";

function Nav(props) {
  const {
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/portfolio/">
           Zach Fulmer
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => {setContactSelected(false);
                                  setPortfolioSelected(true);
                                  setResumeSelected(false);}}>Portfolio</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => {setContactSelected(true);
                                  setPortfolioSelected(false);
                                  setResumeSelected(false);}}>Contact</span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={() => {setContactSelected(false);
                                  setPortfolioSelected(false);
                                  setResumeSelected(true);}}>Resume</span>
          </li>
          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
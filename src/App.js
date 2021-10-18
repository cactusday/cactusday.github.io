import React, { useState } from "react";
import "./App.scss";
import "./reset.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [openModal, setOpenModal] = useState(-1);

  const onClickMenu = id => {
    setOpenModal(id);
  };
  return (
    <div className="App">
      <nav className="navbar">
        <h4>suna.namgung@gmail.com</h4>
      </nav>
      <main className="main-container">
        <div className="info-container">
          <div class="intro">
            <h2>
              Hello, my name's <br />
              Suna Namgung.
            </h2>
            <h2>I'm a Web Developer.</h2>
          </div>
          <div className="menu-wrapper">
            <ul className="side-menu">
              <li>
                <button onClick={() => onClickMenu(0)}>About</button>
              </li>
              <li>
                <button onClick={() => onClickMenu(1)}>Projects</button>
              </li>
              <li>
                <button onClick={() => onClickMenu(2)}>Contact</button>
              </li>
            </ul>
          </div>
          {openModal !== -1 && (
            <div className="modal">
              <div className="modal-nav">
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => onClickMenu(-1)}
                >
                  <img src="./icon/CloseIcon.svg" alt="close button"></img>
                </button>
              </div>
              {openModal === 0 && <About />}
              {openModal === 1 && <Projects />}
              {openModal === 2 && <Contact />}
            </div>
          )}
          <div className="namecard-wrapper">
            <div className="namecard">
              <img src="./image/profile.jpg" alt="proile"></img>
            </div>
            <ul className="card-content">
              <li>
                <span className="title">name</span>
                <span className="content">suna</span>
              </li>
              <li>
                <span className="title">based in</span>
                <span className="content">seoul, korea</span>
              </li>
            </ul>
          </div>
        </div>
        {/*<div className="content-wrapper"></div>*/}
      </main>
    </div>
  );
}

export default App;

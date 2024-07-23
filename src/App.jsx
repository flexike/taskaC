import "./App.css";
import "./index.css";
import carGrass from "./assets/carANDgrass-middle.svg";
import grassFront from "./assets/grass-front.svg";
import logo from "./assets/logo.svg";
import {useRef} from "react";

function App() {
  let grassCarRef = useRef(null);
  let grassFrontRef  = useRef(null);
  let xValue = 0, yValue = 0;

  window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2; // target center of screen X axis
    yValue = e.clientY - window.innerHeight / 2; // target center of screen Y axis
    // console.log(xValue, yValue);

    let speedxCar = grassCarRef.current.dataset.speedx;
    let speedyCar = grassCarRef.current.dataset.speedy;
    let speedxGrass = grassFrontRef.current.dataset.speedx;

    grassCarRef.current.style.transform = `translateX(calc(${
      xValue * speedxCar
    }px)) translateY(calc(${yValue * speedyCar}px))`;
    grassFrontRef.current.style.transform = `translateX(calc(${
      -xValue * speedxGrass
    }px))`;
  });

  return (
    <section>
      {/* center div*/}
      <div className="container">
        {/* border*/}
        <main className="main-border">
          {/* header */}
          <header className="main-block-header">
            <img src={logo} alt="logo" className="logo"/>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Models</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
            </ul>
          </header>
          {/* main */}
          <div className="main-block-center">
            <h2>
              <span>Hit the</span>
              <span>road in</span>
              style!
            </h2>
            <h4>
              <span>Get exclusive access to our</span>
              <span>premium car inventory!</span>
            </h4>
          </div>
          <div className="btn-wrapper">
            <a href="">Signup</a>
          </div>
          {/* imgs */}
          <img
              src={carGrass}
              ref={grassCarRef}
              className="carGrass"
              data-speedx="0.009"
              data-speedy="0.008"
              alt="3"
          />
          <img
              src={grassFront}
              ref={grassFrontRef}
              className="grassFront"
              data-speedx="0.01"
              alt="4"
          />

        </main>
      </div>
    </section>
  );
}

export default App;

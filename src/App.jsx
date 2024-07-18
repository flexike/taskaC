import "./App.css";
import "./index.css";
import carGrass from "./assets/carANDgrass-middle.svg";
import grassFront from "./assets/grass-front.svg";
import logo from "./assets/logo.svg";

function App() {
  let grass_car = document.getElementsByClassName("carGrass");
  let grass_front = document.getElementsByClassName("grassFront");
  let sectionWindow = document.getElementsByTagName("section");

  let xValue = 0,
    yValue = 0;

  window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2; // target center of screen X axis
    yValue = e.clientY - window.innerHeight / 2; // target center of screen Y axis
    // console.log(xValue, yValue);

    let speedxCar = grass_car[0].dataset.speedx;
    let speedyCar = grass_car[0].dataset.speedy;
    let speedxGrass = grass_front[0].dataset.speedx;

    grass_car[0].style.transform = `translateX(calc(${
      xValue * speedxCar
    }px)) translateY(calc(${yValue * speedyCar}px))`;
    grass_front[0].style.transform = `translateX(calc(${
      -xValue * speedxGrass
    }px))`;
  });

  return (
    <section>
      {/* imgs */}
      {/* center div*/}
      <div className="container">
        {/* border*/}
        <main className="main-border">
          {/* header */}
          <header className="main-block-header">
            <img src={logo} alt="logo" className="logo" />
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
          <img
            src={carGrass}
            className="carGrass"
            data-speedx="0.09"
            data-speedy="0.03"
            alt="3"
          />
          <img
            src={grassFront}
            className="grassFront"
            data-speedx="0.03"
            alt="4"
          />
        </main>
      </div>
    </section>
  );
}

export default App;

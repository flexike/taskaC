import "./App.css";
import "./index.css";
import carGrass from "./assets/carANDgrass-middle.svg";
import grassFront from "./assets/grass-front.svg";
import logo from "./assets/logo.svg";

function App() {
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
          <img src={carGrass} className="carGrass" alt="1" />
          <img src={grassFront} className="grassFront" alt="2" />
        </main>
      </div>
    </section>
  );
}

export default App;

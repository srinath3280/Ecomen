import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './views/navbar/navbar';
import Footer from './views/footer/footer';

function App() {
  return (
    <div className="App">

      {/* Header Section */}
      <div className="App-headerSection">
        <div className="App-headerSection-logo">
          <img src="/images/Ecomen-Logo.png" alt="" />
        </div>
        <div className="App-headerSection-phonelink">
          <a href="tel:+91-0522-4079201 / 2746282" rel="norefference" target="#blank">
            <i class="bi bi-telephone"></i>
            <div>
              <span>+91-0522-4079201 / 2746282</span>
              <text>Contact Us</text>
            </div>
          </a>
        </div>
        <div className="App-headerSection-divideline"></div>
        <div className="App-headerSection-maillink">
          <a href="mailto:contactus@ecomen.in" rel="norefference" target="#blank">
            <i class="bi bi-envelope-open"></i>
            <div>
              <span>contactus@ecomen.in</span>
              <text>Write to us</text>
            </div>
          </a>
        </div>
        <div className="App-headerSection-divideline"></div>
        <div className="App-headerSection-locationlink">
          <a href="https://maps.app.goo.gl/WoGEbkWYp9Ux6nKs9" rel="norefference" target="#blank">
            <i class="bi bi-geo-alt"></i>
            <div>
              <span>1st Floor, #91/A, MCHS Jakkur Layout, Bangalore</span>
              <text>Head Office</text>
            </div>
          </a>
        </div>
      </div>

      {/* Navbar Section */}
      <Navbar></Navbar>

      <Outlet></Outlet>

      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
}

export default App;

import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
      <div className=" bg-neutral text-white ">
        <div className="max-w-7xl mx-auto lg:flex justify-center items-center pt-10">
          <div className="bg-[#1F2937] lg:w-6/12 text-center p-10">
            <h1>CONTACT US</h1>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
          <div className="bg-[#111827] lg:w-6/12 text-white text-center p-[58px]">
            <h1>Follow US</h1>
            <p>Join us on social media</p>
            <div className="flex justify-center items-center text-2xl gap-4 mt-3">
              <p>
                <FaFacebook />
              </p>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <footer className="footer footer-center p-4 bg-neutral">
          <div>
            <p>Copyright © CulinaryCloud. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
};

export default Footer;
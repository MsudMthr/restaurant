import React from "react";

import logo from "../../asset/icons/Burger King.svg";
import instagram from "../../asset/icons/Instagram.svg";
import twitter from "../../asset/icons/Twitter.svg";
import facebook from "../../asset/icons/Facebook.svg";
import navigation from "../../asset/icons/Navigation.svg";

const Footer = () => {
  return (
    <div className="text-Roboto lg:mx-20 gap-5 mt-56 flex flex-col-reverse items-center justify-between lg:flex-row ">
      <div className="flex w-72 flex-col gap-6 items-center lg:items-start">
        <img src={logo} alt="Burger King" className="w-24" />
        <p className="text-2xl opacity-50">
          We cook and deliver the tastiest food right away to your designated
          location
        </p>
        <div className="flex justify-evenly  ">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <div className="flex lg:w-[800px] flex-wrap items-start w-full justify-between">
        <ul>
          <li>
            {" "}
            <h4 className="footer-header">About</h4>{" "}
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              About Us
            </a>
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              Features
            </a>
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              News
            </a>
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              Menu
            </a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <h4 className="footer-header">Company</h4>{" "}
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              Why Burger King?
            </a>
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              Partner With Us
            </a>
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              FAQ
            </a>
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              Blog
            </a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <h4 className="footer-header">Support</h4>{" "}
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              Account
            </a>
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              Support Center
            </a>
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              Feedback
            </a>
          </li>
          <li className="mb-4">
            <a className="footer-items " href="w">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="w-60">
          <h4 className="footer-header">get in touch</h4>
          <p className="footer-items">
            question or feedback? we’d love to hear from you
          </p>
          <div className="relative">
            <input
              placeholder="Email Address"
              className="mt-9 rounded-[40px] border border-black py-4 pl-6 pr-16 outline-none"
            />
            <img
              src={navigation}
              alt="email"
              className="absolute top-[52px] right-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

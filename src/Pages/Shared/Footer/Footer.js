import React from "react";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    /* <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer> */
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-5 my-5"
        style={{ background: `url${footer}` }}
      >
        <div>
          <h1 className="mb-3 text-xl font-bold">Services</h1>
          <p>Emergency checkup</p>
          <p>Monthly checkup</p>
          <p>Weekly checkup</p>
          <p>Deep checkup</p>
        </div>
        <div>
          <h1 className="mb-3 text-xl font-bold">ORAL HEALTH</h1>
          <p>Fluoride treatment</p>
          <p>Cavity filling</p>
          <p>Teeth whitening</p>
        </div>
        <div>
          <h1 className="mb-3 text-xl font-bold">OUR ADDRESS</h1>
          <p>New York 101010 Hudson</p>
        </div>
      </div>

      <div>
        <p className="text-center my-3">
          Copyright © 2022 - All right reserved by Doctors portal
        </p>
      </div>
    </div>
  );
};

export default Footer;

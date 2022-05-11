import React from "react";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    /* <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer> */
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-5 my-5' style={{background:`url${footer}`}}>
            <div>
                
                <h1 className='mb-3 text-xl font-bold'>Services</h1>
                <p>Emergency checkup</p>
                <p>Monthly checkup</p>
                <p>Weekly checkup</p>
                <p>Deep checkup</p>
            </div>
            <div>
                <h1 className='mb-3 text-xl font-bold'>ORAL HEALTH</h1>
                <p>Fluoride treatment</p>
                <p>Cavity filling</p>
                <p>Teeth whitening</p>
            </div>
            <div>
                <h1 className='mb-3 text-xl font-bold'>OUR ADDRESS</h1>
                <p>New York 101010 Hudson</p>
            </div>
        </div>
  );
};

export default Footer;

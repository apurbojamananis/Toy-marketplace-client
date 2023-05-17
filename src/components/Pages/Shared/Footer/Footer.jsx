import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <footer className="footer p-10 ">
          <div>
            <img src="./logo.png" alt="Logo" className="w-20" />
            <p>
              <span className="text-2xl">iLearnToys</span>
              <br />
              Providing reliable teaching since 1992
            </p>
          </div>
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
        </footer>
        <footer className="p-20 bg-neutral text-neutral-content">
          <div className=" flex justify-center items-center gap-4 ">
            <img src="./logo.png" alt="Logo" className="w-20" />
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className="flex justify-center items-center gap-4 ">
            <a>
              <FaFacebookF></FaFacebookF>
            </a>
            <a>
              <FaTwitter></FaTwitter>
            </a>
            <a>
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

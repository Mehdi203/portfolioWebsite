import React from "react";
import {
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramIcon,
  TelegramShareButton,
} from "react-share";
// import { FaGithub } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div offset={-110} className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <a href="tel:555-555-555">+1(403)402-2294</a>
            </div>
            <div className="d-flex">
              <p>m.mehdinoroozi@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link to="home" offset={-110} className="footer-nav">
                  Home
                </Link>
                <br />
                <Link to="about" offset={-110} className="footer-nav">
                  About me
                </Link>
                <br />
                <Link to="skills" offset={-110} className="footer-nav">
                  Skills
                </Link>
              </div>
              <div className="col">
                <Link to="exprience" offset={-110} className="footer-nav">
                  Experience
                </Link>
                <br />
                <Link to="portfolio" offset={-110} className="footer-nav">
                  Portfolio
                </Link>
                <br />
                <Link to="contacts" offset={-110} className="footer-nav">
                  Contacts
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/noroozimehdi/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={"https://www.whatsapp.com/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
              <TelegramShareButton
                url={"https://telegram.org/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TelegramIcon className="mx-3" size={36} />
              </TelegramShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

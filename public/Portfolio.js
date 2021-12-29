import React from "react";
import "./Portfolio.css";
import websiteNode from "../../images/website-Nodejs.jpg";
import websiteASP from "../../images/WebsiteOverview_ASP.jpg";
import desktopApp from "../../images/DesktopApp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //Website NodeJs
  const openPopuboxNodeJs = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popubox"
          src={websiteNode}
          alt="Website built by Node Js"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          consequuntur
        </p>
        <div>
          <b>Website Link</b>{" "}
          <a
            href="/#" //to remove warning
            className="hyper-link"
            onClick={() =>
              window.open("https://team2travelexpert.azurewebsites.net/")
            }
          >
            https://team2travelexpert.azurewebsites.net/
          </a>
        </div>
        <div>
          <b>Github</b>

          <a
            href="/#" //to remove warning
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Mehdi203/TravelExpert", "_blank")
            }
          >
            https://github.com/Mehdi203/TravelExpert
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNodeJs = {
    titleBar: {
      enable: true,
      text: "Website Built with NodeJs",
    },
  };

  //website asp.net
  const openPopuboxAspNet = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popubox"
          src={websiteASP}
          alt="Website built by ASP.NET"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          consequuntur
        </p>
        <div>
          <b>Website Link</b>{" "}
          <a
            href="/#" //to remove warning
            className="hyper-link"
            onClick={() =>
              window.open(
                "https://travelexpertsasp.azurewebsites.net/",
                "_blank"
              )
            }
          >
            https://travelexpertsasp.azurewebsites.net/
          </a>
        </div>
        <div>
          <b>Github</b>
          <a
            href="/#" //to remove warning
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Mehdi203/TravelExperts_ASP.Net")
            }
          >
            https://github.com/Mehdi203/TravelExperts_ASP.Net
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigAspNet = {
    titleBar: {
      enable: true,
      text: "Website Built with ASP.NET",
    },
  };

  //Desktop app .Net
  const openPopuboxDesktopNet = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popubox"
          src={desktopApp}
          alt="Desktop Application"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          consequuntur
        </p>

        <div>
          <b>Github</b>
          <a
            href="/#" //to remove warning
            className="hyper-link"
            onClick={() =>
              window.open(
                "https://github.com/Mehdi203/TravelExperts_DesktopApp"
              )
            }
          >
            https://github.com/Mehdi203/TravelExperts_DesktopApp
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigDesktopNet = {
    titleBar: {
      enable: true,
      text: "Website Built with .NET Framework",
    },
  };

  return (
    <div className="portfolio">
      <div classsName="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center-py-5">portfolio</h1>
          <div className="image-box-wrapper row row-cols-auto justify-content-center">
            <div className="portfolio-image-box" onClick={openPopuboxNodeJs}>
              <img
                className="portfolio-image"
                src={websiteNode}
                alt="website"
              ></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>

            <div className="portfolio-image-box" onClick={openPopuboxAspNet}>
              <img
                className="portfolio-image"
                src={websiteASP}
                alt="website ASP"
              ></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>

            <div
              className="portfolio-image-box"
              onClick={openPopuboxDesktopNet}
            >
              <img
                className="portfolio-image"
                src={desktopApp}
                alt="desktop app"
              ></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box">
              <img
                className="portfolio-image"
                src={desktopApp}
                alt="desktop app"
              ></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNodeJs} />
      <PopupboxContainer {...popupboxConfigAspNet} />
      <PopupboxContainer {...popupboxConfigDesktopNet} />
    </div>
  );
};

export default Portfolio;

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
        {/* <div className="header">Website Built with NodeJs</div> */}
        <img
          className="portfolio-image-popubox"
          src={websiteNode}
          alt="Website built by Node Js"
        />
        <p>
          Designed and constructed a complete website for a hypothetical Travel
          travel agency as part of the SAIT software developemnt program. This
          website is the main business presentation to the agency clients and
          also provides business incites for the agency to monitor performance
          and trends.
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
    PopupboxManager.update({
      content,
      config: {
        titleBar: { text: "Website Built with NodeJs" },
      },
    });
  };

  const popupboxConfigNodeJs = {
    titleBar: {
      enable: true,
      text: "Website Built with NodeJs",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //website asp.net
  const openPopuboxAspNet = () => {
    const content = (
      <>
        {/* <div className="header">Website Built with ASP.NET</div> */}

        <img
          className="portfolio-image-popubox"
          src={websiteASP}
          alt="Website built by ASP.NET"
        />
        <p>
          TravelExperts website was built using ASP.Net core MVC technology.
          This website is designed for the customers and the company employees.
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
    PopupboxManager.update({
      content,
      config: {
        titleBar: { text: "Website Built with ASP.NET" },
      },
    });
  };

  const popupboxConfigAspNet = {
    titleBar: {
      enable: true,
      text: "Website Built with ASP.NET",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Desktop app .Net
  const openPopuboxDesktopNet = () => {
    const content = (
      <>
        {/* <div className="header">Application Built with .NET Framework</div> */}

        <img
          className="portfolio-image-popubox"
          src={desktopApp}
          alt="Desktop Application"
        />

        <p>
          Threaded project for Software development program at SAIT. This app
          was built for employees of Travel Experts to be able to administer the
          products stored on their database, using this application that will
          provide a graphical interface for viewing and modifying the data.
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
    PopupboxManager.update({
      content,
      config: {
        titleBar: { text: "Application Built with .NET Framework" },
      },
    });
  };

  const popupboxConfigDesktopNet = {
    titleBar: {
      enable: true,
      text: "Application Built with .NET Framework",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Website built by Django
  const openPopuboxDjango = () => {
    const content = (
      <>
        {/* <div className="header">Website Built with Django</div> */}

        <img
          className="portfolio-image-popubox"
          src={desktopApp}
          alt="Django Website"
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
              window.open("https://github.com/Mehdi203/MovieRental")
            }
          >
            https://github.com/Mehdi203/MovieRental
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: { text: "Website Built with Django" },
      },
    });
  };

  const popupboxConfigDjango = {
    titleBar: {
      enable: true,
      // text: "Website Built with Django",
      text: "Website Built with Django",
    },
    fadeIn: true,
    fadeInSpeed: 500,
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
            <div className="portfolio-image-box" onClick={openPopuboxDjango}>
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
        <PopupboxContainer {...popupboxConfigNodeJs} />
        <PopupboxContainer {...popupboxConfigAspNet} />
        <PopupboxContainer {...popupboxConfigDesktopNet} />
        <PopupboxContainer {...popupboxConfigDjango} />
      </div>
    </div>
  );
};

export default Portfolio;

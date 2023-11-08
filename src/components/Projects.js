import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";
//$ npm install react-bootstrap --force
//$ npm install react-responsive-carousel --force
class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    
    const projects = {
      "Fraud Detection": {
        desc: "A fraud detection project using Python, MLflow, FastAPI, Streamlit, and Docker.",
        techStack: "Python, MLflow, FastAPI, Streamlit, Docker",
        link: "https://dagshub.com/islembenmaalem/mlops_project",
      },
      "Music Genre Classification and Lyrics Analysis": {
        desc: "An automatic music genre classification project with NLP and clustering. It involves web scraping to retrieve lyrics and Power BI for analysis.",
        techStack:
          "NLP, Power BI, Web scraping, Classification, Clustering, Flask",
        link: "https://github.com/islembenmaalem/Music-Genre-Classification-and-Lyrics-Analysis",
      },
      "Face Classification": {
        desc: "An image processing project for face classification using deep learning and Flask.",
        techStack: "Image Processing, Classification, Deep Learning, Flask",
        link: "https://github.com/islembenmaalem/Projet-de-Classification-de-Visages-Genre-race-et-age",
      },
      "Online Image Preprocessing": {
        desc: "Implemented an online system for image preprocessing by applying various techniques and storing the results in a database.",
        techStack: "HTML, CSS, JavaScript, PHP, MySQL, OpenCV",
        link: "https://github.com/islembenmaalem/Online-Image-Preprocessing",
      },
      "Data Lake ETL Project with Talend": {
        desc: "Designed and developed a data integration system based on Talend for a centralized Data Lake.",
        techStack: "Talend, Web scraping, Python, MySQL",
      }    

      ,  "MERN Bookstore en Ligne": {
    desc: "A MERN stack project for an online bookstore.",
    techStack: "HTML, CSS, JavaScript, React.js, Node.js, MongoDB",
    link: "https://github.com/islembenmaalem/MERN-Online-Bookstore-Website-Project",
  },  
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
       
        <div className="project-container">
          <ul className="projects-grid">

            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;

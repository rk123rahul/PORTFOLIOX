import React from "react";
import "./app.css"
import  Landing from "./Landing";
import pic from "./Screenshot (21).png"
import pic2 from "./0_uLMeaUchDuE30J_O.jpg"
import pic3 from "./Screenshot (12).png"
import pic4 from "./Screenshot (13).png"
import pic5 from "./Screenshot (22).png"
// Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a className="text" href="#welcome-section" onClick={props.toggleMenu}>
             <i class="fas fa-home"></i>
              </a>
            </li>
            <li>
              <a href="#about" className="text" onClick={props.toggleMenu}>
              <i class="fas fa-address-card"></i>
              </a>
            </li>
            <li>
              <a href="#projects"  className="text" onClick={props.toggleMenu}>
              <i class="fas fa-user"></i>
              </a>
            </li>
            <li>
              <a href="#contact" className="text" onClick={props.toggleMenu}>
              <i class="fas fa-comment-alt"></i>
              </a>
            </li>
          </ul>
         
        </div>
      </div>
    );
  };
  
  
  /***********************
    Nav Component
   ***********************/
  
  const Nav = props => {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
            <p className="brand">
             Rahul
              <strong>Kumar</strong>
            </p>
            <a
              onClick={props.toggleMenu}
              className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  };
  
  
  
  /***********************
    Header Component
   ***********************/
  
  const Header = props => {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">Ece(B-tech)</span>
           
           <br/>
          
            <span className="line">
              <span className="color">&</span>  Web Developer 
            </span>
          </h1>
          <div className="buttons ">
            <a className="text" href="#projects">My Works</a>
            <a   href="#contact" className="cta text">
              Contact Me
            </a>
          </div>
        </div>
      </header>
    );
  };
  
  
  /***********************
    About Component
   ***********************/
  
  const About = props => {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Profile</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Rahul.</h4>
              <p>
                I am a website Developer.
                
              </p>
              <p>
                I really enjoy solving problems as well as making things pretty and easy to use. I
                can't stop learning new things; the more, the better. I want to work for an organization which provides me the opportunity to improve my skills and knowledge to growth along with the organization objective
              
            
              </p>
            </div>
            <div className="title">
              <h3>About Me</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">I'm a programmer.</h4>
              <p>
                For the front-end I usually work with Javascript, either standalone or including
                popular frameworks like ReactJS . I also make the web pretty by using Sass,
                CSS and, whenever needed, any of their friends: Bootstrap
              </p>
              <p>
                For the back-end I work with Python (Django).
                
              </p>
            </div>
            <div className="desc">
              <h4 className="subtitle">Also a UI Developer</h4>
              <p>
                  I love  Working on a user interfaces  making  the website pretty 
              </p>
           
            </div>
          </article>
        </div>
      </section>
    );
  };
  
  
  /***********************
    Project Component
   ***********************/
  
  const Project = props => {
    const tech = {
      sass: 'fab fa-sass',
      css: 'fab fa-css3-alt',
      js: 'fab fa-js-square',
      react: 'fab fa-react',
      vue: 'fab fa-vuejs',
      d3: 'far fa-chart-bar',
      node: 'fab fa-node'
    };
  
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
  
    return (
      <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {props.tech.split(' ').map(t => (
                <i className={tech[t]} key={t} />
              ))}
            </p>
            {props.title}{' '}
          </div>
          {props.children}
          <div className="buttons">
            <a href={repo}  className="text" target="_blank" rel="noopener noreferrer">
              View source <i className="fas fa-external-link-alt" />
            </a>
            <a href={link}  className="text" target="_blank" rel="noopener noreferrer">
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  const Project2 = props => {
    const tech = {
      sass: 'fab fa-sass',
      css: 'fab fa-css3-alt',
      js: 'fab fa-js-square',
      react: 'fab fa-react',
      vue: 'fab fa-vuejs',
      d3: 'far fa-chart-bar',
      node: 'fab fa-node'
    };
  
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
  
    return (
      <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {props.tech.split(' ').map(t => (
                <i className={tech[t]} key={t} />
              ))}
            </p>
            {props.title}{' '}
          </div>
          {props.children}
          <div className="buttons">
        
            <a href={link}  className="text" target="_blank" rel="noopener noreferrer">
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  
  
  
  /***********************
    Projects Component
   ***********************/
  
  const Projects = props => {
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">My Works</h3>
            <p className="separator" />
            <p className="subtitle">
              Here's a list of <u>most</u> of the projects I've been working on . till now 
             
              
          
            </p>
          </div>
          <div className="projects-wrapper">
            <Project
              title="Portfolio"
              img={pic}
              tech="js css react"
              link=""
              repo=""
            >
              <small>
                Built using D-jango, CSS , React.js and React Router.
              </small>
              <p>
                This is a full-stack website that I made which lets the users know my profile.
              
              </p>
            </Project>
            <Project
              title="E-comm Site."
              img={pic2}
              tech="js node css"
              link=""
              repo=""
            >
              <small>
                Built using Python (D-jango) JS  + Axios, CSS + Bootstrap using APIs.
              </small>
              <p>
                Another full-stack website  which is full e-commerce based 
               
              </p>
            </Project>
            <Project
              title="UI for Organisation."
              img={pic3}
              tech="js node css"
              link=""
              repo=""
            >
              <small>Built using  JS , CSS + Bootstrap and Reactjs.</small>
              <p>
                This site was made by me For Rsquare web stidio private limited.
              </p>
            </Project>
            <Project
              title="Covid-19 Tracker."
              img={pic4}
              tech="js node css"
              link=""
              repo=""
            >
              <small>Built using Apis ,Reactjs and Css , Bootstrap</small>
              <p>This project was made using APIs to track a covid cases in india in every states</p>
            </Project>
            <Project2
              title="Intership."
              img={pic5}
              tech="js node css  sass"
              link="https://magboffin.vercel.app/"
              
            >
              <small>Organisation: Encomece</small>
              <p>As a frontend Developer using ReactJS </p>
              <small>working on Magboffin project</small>
              <p>Join Date: 15sep to present</p>
            </Project2>
    
 
     
          </div>
        </div>
      </section>
    );
  };
  
  
  
  /***********************
    Contact Component
   ***********************/
  
  const Contact = props => {
    return (
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">
                Want to <br />
                contact me?
              </p>
              <p className="separator" />
              <p className="subtitle">
                Please, use the form below or send an email to {''}
                <span className="mail">
               rahulkumarrvc
                  <i className="fas fa-at at" />
                 gmail
                  <i className="fas fa-circle dot" />
                  com
                </span>
                :
              </p>
            </div>
            <SocialLinks />
          </div>
          <form id="contact-form" action="#">
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <input className="button font" id="submit" value="Submit" type="submit" />
          </form>
        </div>
      </section>
    );
  };
  
  
  
  /***********************
    Footer Component
   ***********************/
  
  const Footer = props => {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Rahul Kumar.</p>
          <SocialLinks />
        </div>
      </footer>
    );
  };
  
  
  
  
  /***********************
    Social Links Component
   ***********************/
  
  const SocialLinks = props => {
    return (
      <div className="social">
        <a
         className="text"
          href=""
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
         className="text"
          id="profile-link"
          href="https://github.com/rk123rahul"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
         className="text"
          href="https://www.linkedin.com/in/rahul-kumar-919832167/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Codepen Profile"
        >
          {' '}
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    );
  };
  
  
  
  /***********************
    Main Component
   ***********************/
  
  class App extends React.Component {
    state = {
      menuState: false
    };
  
    toggleMenu = () => {
      this.setState(state => ({
        menuState: !state.menuState
          ? 'active'
          : state.menuState === 'deactive'
            ? 'active'
            : 'deactive'
      }));
    };
  
    render() {
      return (
        <React.Fragment>
          <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Header />
          <About />
          <Projects />
          
          <Contact />
          <Footer />
        </React.Fragment>
      );
    }
  
    componentDidMount() {
      const navbar = document.querySelector('#navbar');
      const header = document.querySelector('#welcome-section');
      const forest = document.querySelector('.forest');
      const silhouette = document.querySelector('.silhouette');
      let forestInitPos = -300;
  
      window.onscroll = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
        if (scrollPos <= window.innerHeight) {
          silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
          forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
        }
  
        if (scrollPos - 100 <= window.innerHeight)
          header.style.visibility = header.style.visibility === 'hidden' && 'visible';
        else header.style.visibility = 'hidden';
  
        if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
        else navbar.classList.remove('bg-active');
      };
  
      (function navSmoothScrolling() {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        for (let i in internalLinks) {
          if (internalLinks.hasOwnProperty(i)) {
            internalLinks[i].addEventListener('click', e => {
              e.preventDefault();
              document.querySelector(internalLinks[i].hash).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              });
            });
          }
        }
      })();
    }
  }
  
  
  export default App;
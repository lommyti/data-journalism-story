import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="h-100">
        <h1>
        <Fade left cascade>
          Automation Attack
        </Fade>
      </h1>
        <h2>Is the hysteria around AI taking jobs warranted?</h2><br/><br/>
        <h5>By &nbsp;
        <a href="https://www.linkedin.com/in/lucy-minju-kim/">Lucy Kim</a>,&nbsp;
        <a href="https://www.linkedin.com/in/liamlecka/">Liam Lecka</a>,&nbsp;
        <a href="https://www.linkedin.com/in/grace-learn-210b14134/">Grace Learn</a>,&nbsp;
        <a href="https://www.linkedin.com/in/lauren-lee-68ba4a142/">Lauren Lee</a>, & &nbsp;
        <a href="https://thomast.li">Tommy Li</a> </h5>
        </div>
        <div className="h-100">
        <Zoom>
        <p>Flourish is a platform for visualizing and storytelling with data.
        It lets JavaScript developers produce templates that anyone can use to
        edit and publish data-driven and interactive content.</p>
        </Zoom>
        <div className="w-40">
        <Zoom>
        <iframe className="frame" src='https://public.flourish.studio/visualisation/244914/embed' frameborder='0' scrolling='no'></iframe>
        </Zoom>
        </div>
        </div>
        <footer>
        A project by students from the <a href="https://design.northwestern.edu/programs/bay-area-immersion/">Northwestern
        University Bay Area Immersion Program </a>. Data visualizations made with <a href="https://flourish.studio/">Flourish</a>.
        </footer>
      </div>
    );
  }
}

export default App;

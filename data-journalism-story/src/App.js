import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    render: true,
    redBarLength:0,
    greenBarLength:0,
    redNumber:623,
    greenNumber:7530,
    text:"Click on one of the options to begin!"
  }

}

renderButtons(){
  let classNameLeft = 'left';
  let classNameMiddle = "";
  let classNameRight = 'right';
  if (this.state.redBarLength === 25) {
    classNameLeft = 'left selected';
    classNameMiddle = "";
    classNameRight = 'right';
  }
  else if (this.state.redBarLength === 50) {
    classNameLeft = 'left';
    classNameMiddle = "selected";
    classNameRight = 'right';
  }
  else if (this.state.redBarLength === 151) {
    classNameLeft = 'left';
    classNameMiddle = "";
    classNameRight = 'right selected';

  }  return (     <div>
    <button className={classNameLeft} onClick={() => this.renderAutomotive()}>Automotive</button>
    <button className={classNameMiddle} onClick={() => this.renderPersonal()}>Personal Computer</button>
    <button className={classNameRight} onClick={() => this.renderAI()}>AI & ML</button>
        </div>)
}

renderAutomotive() {
  this.setState({
    redBarLength:25,
    greenBarLength:300,
    redNumber:623,
    greenNumber:7530,
});
}

renderPersonal() {
  this.setState({
    redBarLength:50,
    greenBarLength:275,
    redNumber:3508,
    greenNumber:19263,
});
}

renderAI() {
  this.setState({
    redBarLength:151,
    greenBarLength:174,
    redNumber:11600,
    greenNumber:13400,
});
}


renderBars(){
  let classNameRed = 'redbar';
  let classNameGreen = 'greenbar';
  if (this.state.redBarLength === 25) {
    classNameRed = 'redbar redbar-25';
    classNameGreen = 'greenbar greenbar-300'
    this.state.text = "Between 1910 and 1950, 623,000 jobs were lost and 7,530,000 jobs were gained. Source: McKinsey."
  }
  else if (this.state.redBarLength === 50) {
    classNameRed = 'redbar redbar-50';
    classNameGreen = 'greenbar greenbar-275'
    this.state.text = "Between 1980 and 2015, 3,508,000 jobs were lost and 19,263,000 jobs were gained. Source: McKinsey."

  }
  else if (this.state.redBarLength === 151) {
    classNameRed = 'redbar redbar-151';
    classNameGreen = 'greenbar greenbar-174'
    this.state.text = "Between 2015 and 2030, 11,600,000 jobs were lost and 13,400,000 jobs were gained. Source: McKinsey."

  }  return (     <div>
       <div className={classNameRed}>{this.state.redNumber}</div>
          <div className="blackline">0</div>
          <div className={classNameGreen}>{this.state.greenNumber}</div>
          <div className="text">{this.state.text}</div>
        </div>)
}

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
        <div className="p-bottom-10">
        <Zoom>
        <p>A city is always changing--neighborhoods transform and buildings grow. Construction sites are bound to be present at every turn. You see a yellow tractor scraping the skeleton of a building, pushing the old to make room for the new. The tractor stops and the dust settles. The expectation to see the familiar yellow hard hat and lime safety vest of the construction worker pivots when you notice that nobody is sitting inside. An AI program controls the tractor instead.<br/><br/>
        AI is beginning to permeate white spaces historically driven by manual labor. With the implementation of AI in various industries, hard skills are gradually turning obsolete, especially as competitive landscapes motivate companies to pursue quicker, more cost-effective options.<br/><br/>
        The seemingly rapid shift from manual to automated services routinely surfaces on the Internet, plagued with concerns from the labor force about their jobs being replaced. The sheer number of questions regarding AI has increased exponentially in the past five years. However, the question stands about the nature of these searches--are people looking up artificial intelligence as a function of concern or genuine interest? <br/><br/>
        With the perceived fearful association of AI and job loss, there is no correlation between AI and unemployment benefits search volumes.



</p>
        </Zoom>
        <div className="w-40">
        <Zoom>
        <iframe className="frame" src='https://public.flourish.studio/visualisation/244914/embed' frameborder='0' scrolling='no'></iframe>
        </Zoom>
        <p>Source: Google Trends. Data visualization made with <a href="https://flourish.studio/">Flourish</a>.</p>
        </div>
        <p>This shatters the expectation that AI’s role in the job market is generating fear about unemployment, challenging the core assumptions about how the public is perceiving AI today.
<br/><br/>
According to a report by McKinsey & Co, AI and ML impacts the job market in two sways: job losses and innovation.
</p>
<Zoom>
        <h2>Job Loss (and Gain) Employment Data</h2>
        {this.renderButtons()}<br/><br/>
        {this.renderBars()}
        </Zoom>
        <Zoom>
        <p><br/><br/>
        While automation is playing a role in transforming the job market, the perception that AI will “take over the world” is not a realistic one. Certain industries will indeed be changed by new automative functions, but not nearly to the extent that the public believes. <br/>

According to a report by Carl Benedikt Frey and Michael A. Osborne, the top five affected industries include compensation and benefits managers, nuclear power operators and technicians, administrative services, atmospheric and space scientists, and power distributers and dispatchers.
        </p>
        </Zoom>
        <Zoom>
        <img src={require('./liam.png')} className="liam"/>
        </Zoom>
        <Zoom>
        <p>With the public closely watching and as it stands now, AI has the capacity to alter the job market as we know it. Whether this negatively or positively impacts the lives of workers depends entirely on how industries collaborate with automated systems.</p>
        </Zoom>
        </div>

        <footer>
        A project by students from the <a href="https://design.northwestern.edu/programs/bay-area-immersion/">Northwestern
        University Bay Area Immersion Program </a>.
        </footer>
      </div>
    );
  }
}

export default App;

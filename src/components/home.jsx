import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './home.css';
import About from './about';



export default class Home extends Component {
  constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        show: false
      };
    }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get('username');
    const courses = data.get('courses');
    const major = data.get('major');
    const standing = data.get('standing');
    const techCourses = data.get('techCourses');
    const minimumCredits = data.get('minimumCredits');
    const maximumCredits = data.get('maximumCredits');
    const minorCourses = data.get('minor');

    const obj = {
      name: name,
      courses: courses,
      major: major,
      standing: standing,
      techCourses: techCourses,
      minimumCredits: minimumCredits,
      maximumCredits: maximumCredits,
      minorrelatedCourses: minorCourses
    };
    var myJSON = JSON.stringify(obj);
    console.log(myJSON)

   //  event.preventDefault();
   //  fetch('localhost:5000/register', {
   //   method: 'post',
   //   headers: {'Content-Type':'application/json'},
   //   body: JSON.stringify(obj)
   // }).then((response) => {
   //   console.log("Post sent status: " + response.status)
   //
   // })
   this.setState({ show: true });

    // this.props.history.push('/about')
    //send all of information to backend
    //recieve schedule output
    // route to new page to display schedule output
  }
  render() {
    return (
      <div>
      <Grid>
        <Jumbotron>
          <h2> Welcome to EasyWeek </h2>
          <p> This is the ideal schedule optimizer app! </p>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Enter your name  </label>
              <input id="username" name="username" type="text" />
            </div>
            <div>
              <label htmlFor="birthdate">Enter your courses (Ex. CS 125, Math 241 etc.)  </label>
              <input id="courses" name="courses" type="text" />
              </div>
            <div>
              <label htmlFor="major">Enter your major (CS, CE etc.) </label>
              <input id="major" name="major" type="text" />
            </div>
            <div>
              <label htmlFor="standing">Enter your standing (Freshman, Sophmore etc.)  </label>
              <input id="standing" name="standing" type="text" />
            </div>
            <div>
              <label htmlFor="techCourses">Enter the maximum amount of technical courses you are willing to take</label>
              <input id="techCourses" name="techCourses" type="text" />
            </div>
            <div>
              <label htmlFor="standing">Maximum number of credits you are willing to take</label>
              <input id="maximumCredits" name="maximumCredits" type="text" />
            </div>
            <div>
              <label htmlFor="standing">Minimum number of credits you are willing to take</label>
              <input id="minimumCredits" name="minimumCredits" type="text" />
            </div>
            <div>
              <label htmlFor="standing">Number of possible minor-related courses to take</label>
              <input id="minor" name="minor" type="text" />
            </div>
            <button>Send data!</button>
          </form>
        </Jumbotron>
      </Grid>
      <div>
        <About show={this.state.show}>

        </About>
      </div>
      </div>

    )
  }
}

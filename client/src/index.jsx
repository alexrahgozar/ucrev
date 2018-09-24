import React from 'react';
import ReactDOM from 'react-dom';
// import Rewview from './components/Review.jsx';
import $ from 'jquery';
import Navbars from './components/Navbars.jsx'
import SignBoot from './components/SignBoot.jsx'
import Carouselz from './components/Carouselz.jsx'
import SignUp from './components/SignUp.jsx'
import RevForm from './components/RevForm.jsx'

import { Container, Row, Col } from 'react-bootstrap'

// import reviewData from './reviewData.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: []
    }
    this.save = this.save.bind(this);
    this.saveReview = this.saveReview.bind(this)
  }


  componentDidMount() {
    $.get('/login', function(signInData) {
      console.log('This is signUp inside index.jsx GET:  ', signInData)
    })
    .done(signInData => {
      this.setState({
        info: signInData
      });
    });
  }

  save(data) {
    console.log('this is save Data: ', data);

    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(() => window.location.reload(false))
  }


    // activateReview () {
    //   $.get("/review", function(review) {
    //     console.log(review)
    //   })
    // }

    componentDidMount() {
      $.get('/review', function(signInData) {
        console.log('This is Review index.jsx GET:  ', signInData)
      })
      .done(signInData => {
        this.setState({
          info: signInData
        });
      });
    }
    //



    saveReview(data) {
      console.log('this is save Inside SaveReview Data: ', data);
      fetch('/review', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(() => window.location.reload(false))
    }
    //
    // <RevForm saveRev={this.saveReview}/>
    // <button onClick={this.activateReview}>Review</button>
    // <SignUp />
      // <button onClick={this.activateReview}>Write A Review</button>
  render() {

    return (
      <div>
        <Navbars/>
          <Row>
            <Col md={6} sm={6}> <SignBoot/> </Col>
            <Col md={5} md={'offset'}> <Carouselz/> </Col>
          </Row>
          <RevForm saveRev={this.saveReview}/>
          <SignUp saveInfo={this.save}/>

      </div>
    )
  }

}


ReactDOM.render(<App/>, document.getElementById('app'))

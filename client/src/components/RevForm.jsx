import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class RevForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      information: '',
      createdAt: '',
      stars: 0


    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value });
  }



  handleSubmit  (e) {
    var data =
    {
      username: this.state.username,
      review: this.state.information,
      time: this.state.createdAt,
      stars: this.state.stars
  }

   console.log(data)
    // console.log('function saveMyCar: ', this.props.saveMyCar)
    console.log('I have saved this data inside of RevForm.jsx')
    e.preventDefault()
    this.props.saveRev(data)
    e.target.reset();
  }

  render() {

    return (

      <form method='POST' onSubmit={this.handleSubmit} className='inputForm'>

      <h1>Review Form</h1>
      <label>
        username: <input
        type='text'
        placeholder= "Enter username"
        name='username'
        value={this.state.term}
        onChange={this.handleChange}/>
      </label>
        <br></br>
      <label>
        User Review: <input
        type='text'
        placeholder= "Enter Your Review Please"
        name='information'
        value={this.state.term}
        onChange={this.handleChange}/>
      </label>
        <br></br>

      <label>
        Date: <input
        type='text'
        placeholder= "Enter username"
        name='createdAt'
        value={this.state.term}
        onChange={this.handleChange}/>
      </label>
        <br></br>

      <label>
        Stars: <input
        type='Number'
        placeholder= "Rating"
        name='stars'
        value={this.state.term}
        onChange={this.handleChange}/>
      </label>
        <br></br>

        <input type='submit' value='Submit'/>
    </form>

    )
  }
}

export default RevForm;

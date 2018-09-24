import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import db from '../../../database/index.js'
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordRepeat: ''


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
      password: this.state.password,
      passwordRepeat: this.state.passwordRepeat

  }

   console.log(data)
    console.log('heree')
    e.preventDefault()
    this.props.saveInfo(data)
    e.target.reset();
  }

  render() {

    return (

      <form method='POST' onSubmit={this.handleSubmit} className='inputForm'>

      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
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
      password: <input
      type='password'
      placeholder= "Enter password"
      name='password' required
      value={this.state.term}
      onChange={this.handleChange}/>
      </label>
      <br></br>
      
      <label>
      password: <input
      type='password'
      placeholder= "Repeat password"
      name='passwordRepeat' required
      value={this.state.term}
      onChange={this.handleChange}/>
      </label>
        <br></br>
        <input type='submit' value='Submit'/>
    </form>

    )
  }
}

export default SignUp;

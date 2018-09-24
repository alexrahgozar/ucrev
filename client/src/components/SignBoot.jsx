import React from 'react';
import ReactDOM from 'react-dom';
import { Button, pre, code, img, a, form, input} from 'react-bootstrap'


class SignBoot extends React.Component {
  render() {
    return (
      <div>
      <form className="form-signin" style= {{marginRight: "40%", marginLeft:'10%'}}>
      <div className="text-center mb-4">
        <img className="mb-4" src= "https://drive.google.com/uc?export=view&id=1JGmtRC0EGRGfyzvUkDEf3OwE_4yTdjH5" alt="" width="150" height="150"/>

        <p style={{fontFamily:"Times New Roman", fontSize:'22px'}}>Welcome Back</p>
      </div>

      <div className="form-label-group" >
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
        <label htmlFor="inputEmail">Email address</label>
      </div>

      <div className="form-label-group">
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
        <label htmlFor="inputPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <Button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</Button>
      <p className="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
    </form>
    </div>
    )
  }
}

export default SignBoot;

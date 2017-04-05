import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'


class Login extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      shouldRedirect: true
    }

  }

    signInUser(e){
      e.preventDefault();
      const githubuser = {
        username: this.username.value,
        password: this.password.value
      }
      this.props.authenticateUser(githubuser)
    }

    render() {

      return (
        this.props.signedIn() ?
        <Redirect to={'/repos'}/> :
          <div className="container">
        <div className="row login">
            <div className="col-sm-6 col-md-4 col-md-offset-4">
                <h1 className="text-center login-title">Please sign in with your Github username and password to continue </h1>
                <div className="account-wall">
                    <form className="form-signin" onSubmit={(e) => this.signInUser(e)}>
                    <input ref={(input) => this.username = input} type="text" className="form-control" placeholder="Username" required  />
                    <input ref={(input) => this.password = input} type="password" className="form-control" placeholder="Password" required />

                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Sign in</button>


                    </form>
                </div>


            </div>
        </div>
    </div>
      );
    }
  }

export default Login

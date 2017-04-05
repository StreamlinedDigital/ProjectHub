import React from 'react';
import Header from '../layout/Header';
import GithubAPI from 'github-api';
import utils from '../utils';
import Issue from '../components/Issue'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Issues from './Issues';
import Dashboard from './Dashboard';
import Login from './Login';
import RepoList from './RepoList';


class Main extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        authenticated: false,
        currentUser: JSON.parse(localStorage.getItem("ghuser")),
        shouldRedirect: false,
        repo: ""
      }
      this.authenticateUser = this.authenticateUser.bind(this);
    }

    authenticateUser(user){
      const gh = new GithubAPI({
        username: user.username,
        password: user.password
      });

      localStorage.setItem("ghuser", JSON.stringify([user.username, user.password]));

      const currentUser = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
      currentUser.getProfile((err, response) => {
        if(response == undefined) return
        this.setState({
          authenticated: true
        })

      });

      this.setState({
        shouldRedirect: true
      })


    }

    signedIn(){
      if(localStorage.getItem("ghuser") !== null){
        return true
      }else{
        return false
      }

    }


    render() {

      return (

        <Router>

          <div>

            {this.signedIn() ? <Header /> : ''}
            <div className="container">
              <Route exact path="/" component={() => (<Login signedIn={this.signedIn} authenticateUser={this.authenticateUser} shouldRedirect={this.state.shouldRedirect}  />)}/>
              <Route exact path="/repos" component={() => (<RepoList signedIn={this.signedIn} currentUser={this.state.currentUser} />)}/>
              <Route exact path="/repos/:repo" component={() => (<Dashboard signedIn={this.signedIn} issues={this.state.issues}   />)}/>
              <Route path="/repos/:repo/issues/" component={Issues}></Route>
            </div>
          </div>
        </Router>
      );
    }
  }




export default Main

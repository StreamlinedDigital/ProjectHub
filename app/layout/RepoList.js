import React from 'react';
import { Link } from 'react-router-dom';
import GithubAPI from 'github-api';

class RepoList extends React.Component {
      constructor(props){
        super(props)
        this.state = {
          repos: []
        }
      }
      componentDidMount(){
        const localStoragerUser = JSON.parse(localStorage.getItem("ghuser"))
        const gh = new GithubAPI({
          username: localStoragerUser[0],
          password: localStoragerUser[1]
        });

        const currentUser = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
        currentUser.listRepos((err, response) => {
          const nonForks = response.filter(item => {
            return item.fork == false && item.private == false
          })
          if(this.refs.repos) {
            this.setState({
              repos: nonForks
            })
          }
        });
      }

    render() {
      return (
        !this.props.signedIn() ?
        <Redirect to={'/login'}/> :
        <div ref='repos'>
        <h4>Select a repo:</h4>
        <div className="list-group">
        {this.state.repos.map(repo => {
            return <Link to={'/repos/' + repo.name} key={repo.id} className="list-group-item">{repo.name}</Link>
        })}

        </div>
        </div>
      );
    }
  }

export default RepoList

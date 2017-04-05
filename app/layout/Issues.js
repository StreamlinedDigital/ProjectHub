import React from 'react';
import Githubapi from '../utils/githubapi';
import Issue from '../components/Issue'
import IssuesStage from '../components/IssuesStage'
import config from '../utils/config'
class Issues extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        issues: []
      }


    }
    componentDidMount(){
      const hash = window.location.hash.split('repos/')
      // const repo = hash.replace(/-/g, "");

      Githubapi.issues(config.organization, 'FamilyChallenge').then(data => {

        this.setState({
          issues: data
        })
      })


    }
    puke(object){
      return <pre>{JSON.stringify(object, null, ' ')}</pre>
    }

    render() {

      return (
        <div>
          {this.puke(this.state.issues)}
          <IssuesStage issues={this.state.issues} title="Review/QA" />
          <IssuesStage issues={this.state.issues} title="In Progress" />
          <IssuesStage issues={this.state.issues} title="Backlog" />
          <IssuesStage issues={this.state.issues} title="Icebox" />
          <IssuesStage issues={this.state.issues} title="New Issues" />
        </div>
      );
    }
  }

export default Issues

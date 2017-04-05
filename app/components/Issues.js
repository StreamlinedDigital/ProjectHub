import React from 'react';
import Githubapi from '../utils/githubapi';
import Issue from './Issue'
import IssuesStage from './IssuesStage'

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

      Githubapi.issues("StreamlinedStudio", 'FamilyChallenge').then(data => {
        
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

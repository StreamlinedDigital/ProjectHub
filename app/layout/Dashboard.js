import React from 'react';
import Header from '../layout/Header';
import Githubapi from '../utils/githubapi';
import MilestoneTimeline from '../components/MilestoneTimeline'
import Auth from '../utils/authentication'
import utils from '../utils';
import Issue from '../components/Issue';
import { Redirect } from 'react-router'
import config from '../utils/config'

class Dashboard extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        issues: [],
        readme: {},
        milestones: []
      }


    }


    componentDidMount(){

      const hash = window.location.hash.split('repos/')[1] || "";
      const repo = hash.replace(/-/g);

      Githubapi.issues(config.organization, repo, Auth()).then(data => {
        this.setState({
          issues: data
        })
      })

      Githubapi.readme(config.organization, repo, Auth()).then(data => {
        this.setState({
          readme: data
        })
      })

      Githubapi.milestones(config.organization, repo, Auth()).then(data => {
        this.setState({
          milestones: data
        })
      })


    }

    createMarkup() {
      return {__html: this.state.readme};
    }

    percentComplete(open,closed){
      const total = open + closed;
      const percentage = ( closed / total ) * 100
      return percentage.toFixed(0) + "%"
    }
    render() {

      return (
        !this.props.signedIn() ?
        <Redirect to={'/'}/> :
        <div>
          <div className="jumbotron" dangerouslySetInnerHTML={this.createMarkup()}></div>

          <MilestoneTimeline />


            <h4>Our Current Sprint:</h4>
            {this.state.milestones.message
              ? <div className="panel panel-default">
                <div className="panel-body">
                  <h3 className="panel-title">No Milestones Found</h3>
                </div>
                </div>
              : this.state.milestones.map(milestone => {

              return (
                <div key={milestone.id}>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">{milestone.title}</h3>
                  </div>
                  <div className="panel-body">
                  <div className="inner-panel">
                  <p>Created On <strong>{utils.formatDate(milestone.created_at)}</strong></p>
                  <p>Due By <strong>{utils.formatDate(milestone.due_on)}</strong></p>
                  </div>
                  <div className="inner-panel">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: this.percentComplete(milestone.open_issues, milestone.closed_issues)}} >
                      <span className="sr-only">60% Complete</span>
                    </div>
                  </div>
                  <div className="panel-body">
                    <div className="inner-panel"><strong>{this.percentComplete(milestone.open_issues, milestone.closed_issues)}</strong> complete</div>
                    <div className="inner-panel"><strong>{milestone.open_issues}</strong> open</div>
                    <div className="inner-panel"><strong>{milestone.closed_issues}</strong> closed</div>
                  </div>
                  </div>
                  </div>
                </div>
                </div>
              )
              })
            }

          <h4>Issues we are currently working on (In Progress):</h4>
            <div className="list-group">
              {this.state.issues.map(issue => {
                  return (
                    <Issue key={issue.id} data={issue} />
                  )
                })
              }
            </div>

          </div>

      );
    }
  }


export default Dashboard

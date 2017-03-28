import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Githubapi from './utils/githubapi';
import Zenhubapi from './utils/zenhubapi';
import utils from './utils';




class App extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        issues: [],
        milestones: []
      }
    }

    componentDidMount(){
      Githubapi.samplePost()
      Githubapi.milestonesRequest().then(milestonedata => {
        const onlyOpenMilestones = milestonedata.filter(item => item.state == "open")
          this.setState({
            milestones: onlyOpenMilestones
          })
      })
      Githubapi.issuesRequest().then(githubdata => {
        Zenhubapi.boardData().then(zenhubdata => {
          githubdata.map(gitissue => {
            zenhubdata.map(zenissue => {
              if(gitissue.number == zenissue.number){
                  return gitissue.stage = zenissue.stage
              }
            })
          })

          this.setState({
            issues: githubdata.filter(item => item.stage == 'In Progress')
          })
        })
      })
    }


    percentComplete(open,closed){
      const total = open + closed;
      const percentage = ( closed / total ) * 100
      return percentage.toFixed(0) + "%"
    }
    render() {
      return (

        <div>
          <Header />
          <div className="container">
          <h4>Our Current Sprint:</h4>
          {this.state.milestones.map(milestone => {
            return (
              <div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">{milestone.title}</h3>
                </div>
                <div className="panel-body">
                <div className="inner-panel">
                Created On {utils.formatDate(milestone.created_at)}
                Due By {utils.formatDate(milestone.due_on)}
                </div>
                <div className="inner-panel">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: this.percentComplete(milestone.open_issues, milestone.closed_issues)}} >
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="inner-panel">{this.percentComplete(milestone.open_issues, milestone.closed_issues)} complete</div>
                  <div className="inner-panel">{milestone.open_issues} open</div>
                  <div className="inner-panel">{milestone.closed_issues} closed</div>
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
                    <a href={"https://github.com/StreamlinedStudio/FamilyChallenge/issues/" + issue.number} target="a_blank" className="list-group-item">{issue.title}</a>
                  )
                })
              }
            </div>

          </div>
      </div>
      );
    }
  }

render(
  <App />,
  document.querySelector('#app')
)

//
// <ul className="list-group">
//   <li className="list-group-item">
//     <span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
//     Here is an issue for this one
//   </li>
//   <li className="list-group-item">
//     <span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
//     Here is an issue for this one lets see how it goes if this is super long </li>
//   <li className="list-group-item">
//     <span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
//     Or super short
//   </li>
// </ul>
//   <h4>What is Next:</h4>
//   <ul className="list-group">
//     <li className="list-group-item">
//       <span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
//       Here is an issue for this one
//     </li>
//     <li className="list-group-item">
//       <span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
//       Here is an issue for this one lets see how it goes if this is super long </li>
//     <li className="list-group-item">
//       <span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
//       Or super short
//     </li>
//
//
//
// </ul>

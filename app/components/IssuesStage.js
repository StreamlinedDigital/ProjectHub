import React from 'react';
import Issue from './Issue';


class IssuesStage extends React.Component {
    constructor(props){
      super(props)
      this.filterByStage = this.filterByStage.bind(this);
    }
    filterByStage(filterBy){

      return this.props.issues.filter(issue => {
        
        return issue.stage == filterBy
      })
    }
    render() {

      return (
        <div>
        <h2></h2>
        <div className="panel panel-default">
          <div className="panel-heading"><strong>{this.props.title}</strong></div>
        {this.filterByStage(this.props.title).length < 1
          ? <span className="list-group-item">No Issues</span>
          : this.filterByStage(this.props.title).map(issue => {
            return (
              <Issue data={issue} />
            )
          })
        }

        </div>
        </div>
      );
    }
  }

export default IssuesStage

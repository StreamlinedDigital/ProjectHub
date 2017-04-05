import React from 'react';

const styles = {
  icon: {
    fontSize: "22px",
    color: "#608519",
    marginRight: "7px",
    verticalAlign: "middle"
  }
}

function Issue(props){
    return (
      <a href={"https://github.com/StreamlinedStudio/FamilyChallenge/issues/" + props.data.number} target="a_blank" className="list-group-item">
        <span className="glyphicon glyphicon-info-sign" style={styles.icon} aria-hidden="true"></span>
        {props.data.title}
      </a>
    )
}

export default Issue

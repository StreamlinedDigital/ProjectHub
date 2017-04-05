import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){

  const hash = window.location.hash.split('repos/')[1]
  let repo;
  if(hash !== undefined){
    repo = hash.replace(/-/g, "");
  }


  return (
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <span className="navbar-brand" href="#"><Link to="/">Project Hub</Link></span>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        {hash
          ?
            <ul className="nav navbar-nav">
            <li><Link to={repo + '/issues/'}>Issues <span className="sr-only">(current)</span></Link></li>
            <li><a href="#">Notes</a></li>
            </ul>
          : ''
        }


      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header

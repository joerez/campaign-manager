import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Link to="/email/new"><button className="action-btn">New Email</button></Link>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);

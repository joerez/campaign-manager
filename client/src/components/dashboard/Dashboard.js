import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {emails: []}

  }

  componentDidMount() {
    axios.get('/api/emails').then((res) => {
      this.setState({emails : res.data})
    })
  }

  renderEmails() {
    return this.state.emails.reverse().map(email => {
      return (
        <div className="card darken-1" key={email._id}>
          <div className="card-content">
            <span className="card-title">{email.title}</span>
            <p>
              {email.subject}
              {email.body}
            </p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="dashboard">

        {this.renderEmails()}

        <Link to="/email/new"><button className="action-btn">New Email</button></Link>


      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);

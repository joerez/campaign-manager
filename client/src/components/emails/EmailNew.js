import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class EmailNew extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="new-email">
        <form action="/api/emails/new" method="POST">
          <input type="hidden" name="email" value={this.props.auth.email}/>
          <input placeholder="Email Subject" name="subject"/>
          <input placeholder="Body" name="body"/>
          <input placeholder="Recipients" name="recipients"/>
          <input type="submit"/> <Link className="right" to="/dashboard"><button>Back</button></Link>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(EmailNew);

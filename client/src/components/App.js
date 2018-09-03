import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import { connect } from 'react-redux';
import * as actions from '../actions';

import axios from 'axios';

import './styles.css';

import Header from './Header';
import Landing from './landing/Landing';
import Dashboard from './dashboard/Dashboard';
import EmailNew from './emails/EmailNew';

class App extends Component {


  componentDidMount() {
    this.props.fetchUser();
  }

  render() {



    return (
        <BrowserRouter>
            <div>
              <Header />
              <div className="container">
              </div>
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/email/new" component={EmailNew} />
            </div>
        </BrowserRouter>
    );
  };
};


function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);


// export default connect(null, actions)(App);

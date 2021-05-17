import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';

/*
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
*/

import CustomLayout from './containers/Layout';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}


/*
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/

export default App;

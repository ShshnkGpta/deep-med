import React from 'react';
import { Route } from 'react-router-dom';

import ReportList from './containers/ReportListView';
import ReportDetail from './containers/ReportDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={ReportList} />
        <Route exact path="/reports/:articleID" component={ReportDetail} />
        <Route exact path="/login/" component={Login} />
        <Route exact path="/signup/" component={Signup} />
    </div>
);

export default BaseRouter;
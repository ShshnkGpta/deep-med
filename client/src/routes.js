import React from 'react';
import { Route } from 'react-router-dom';

import ReportList from './containers/ReportListView';
import ReportDetail from './containers/ReportDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ReportList} />
        <Route exact path='/:articleID' component={ReportDetail} />
    </div>
);

export default BaseRouter;
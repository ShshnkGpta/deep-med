import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ReportDetail extends React.Component {
    state = {
        report: {}
    }

    componentDidMount() {
        const reportID = this.props.match.params.reportID;
        axios.get('http://127.0.0.1:8000/api/${reportID}')
            .then(res => {
                this.setState({
                    report: res.data
                });
            })
    }

    render() {
        return (
            <Card title={this.state.report.title}>
                <p>{this.state.report.content}</p>
            </Card>
        );
    }
}

export default ReportDetail;
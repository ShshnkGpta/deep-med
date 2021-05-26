import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd';

import CustomForm from '../components/form';

class ReportDetail extends React.Component {
    state = {
        report: {}
    }

    componentDidMount() {
        const reportID = this.props.match.params.reportID;
        axios.get(`http://127.0.0.1:8000/api/${reportID}`)
            .then(res => {
                this.setState({
                    report: res.data
                });
            })
    }

    handleDelete = (event) => {
        const reportID = this.props.match.params.reportID;
        axios.delete(`http://127.0.0.1:8000/api/${reportID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Card title={this.state.report.title}>
                    <p>{this.state.report.content}</p>
                </Card>
                <CustomForm 
                    requestType="put"
                    reportID={this.props.match.params.reportID}
                    buttonText="Update"
                />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        );
    }
}

export default ReportDetail;
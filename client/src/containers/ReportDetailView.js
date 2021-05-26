import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
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
            });
    }

    handleDelete = event => {
        event.preventDefault();
        const reportID = this.props.match.params.reportID;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios.delete(`http://127.0.0.1:8000/api/${reportID}/delete/`)
        .then(res => {
            if (res.status === 204) {
                this.props.history.push('/');
            }
        })
    };

    render() {
        return (
            <div>
                <Card title={this.state.report.title}>
                    <p>{this.state.report.content}</p>
                </Card>
                <CustomForm
                    {...this.props}
                    token={this.props.token}
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

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(ReportDetail);

import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Button, Card } from 'antd';
import CustomForm from '../components/Form';

class ReportDetail extends React.Component {
    state = {
        report: {}
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.token) {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: newProps.token
            }
            const reportID = this.props.match.params.reportID;
            axios.get(`http://127.0.0.1:8000/api/${reportID}/`)
                .then(res => {
                    this.setState({
                        report: res.data
                    });
                    console.log(this.state.report)
                });
        } 
    }

    handleDelete = () => {
        if (this.props.token !== null) {
            const reportID = this.props.match.params.reportID;
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: this.props.token
            }
            axios.delete(`http://127.0.0.1:8000/api/${reportID}/delete/`);
            this.props.history.push(`/`);
            this.forceUpdate();
        } else {
            //show error
        }
    };

    render() {
        return (
            <div>
                <Card title={this.state.report.title}>
                    Symptoms:<p> {this.state.report.desc} </p>
                    Generated result:<p> {this.state.report.result} </p>
                </Card>
                <br /><br /><br />
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

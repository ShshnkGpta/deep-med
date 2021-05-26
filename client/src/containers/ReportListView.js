import React from 'react';
import axios from 'axios';


import Reports from '../components/Report';
import CustomForm from '../components/form';


class ReportList extends React.Component {
    state = {
        reports: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    reports: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <Reports data={this.state.reports}/>
                <br />
                <h2>Start new diagnosis</h2>
                <CustomForm
                    requestType="post"
                    reportID={null}
                    buttonText="Submit"
                />
            </div>
        );
    }
}

export default ReportList;
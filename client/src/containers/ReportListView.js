import React from 'react';
import axios from 'axios';
import Reports from '../components/Report';
import CustomForm from '../components/form';


class ReportList extends React.Component {
    state = {
        reports: []
    }
    
    fetchReports = () => {
        axios.get("http://127.0.0.1:8000/api/", 
            {headers: {
                "Content-Type": "text/plain",
                'key': '4eb16374a2d97290b126cd0471bf3e96a862ccce', 
            }})
        .then(res => {
            this.setState({
                reports: res.data
            });
        });
    }
    
    componentDidMount() {
        this.fetchReports();
    }
    
    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            this.fetchReports();      
        }
    }
    
    /*
    componentDidMount() {
        var data = '';

        var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/',
            headers: {
                "Content-Type": "application/json",
                'key': '4eb16374a2d97290b126cd0471bf3e96a862ccce', 
            },
            data : data
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    */
    render() {
        return (
            <div>
                <Reports data={this.state.reports} />
                <br />
                <h2>Start a new diagnosis</h2>
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
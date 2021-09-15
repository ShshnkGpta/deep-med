import React from 'react';
import axios from 'axios';
import Reports from '../components/Report';
import CustomForm from '../components/Form';
import { connect } from "react-redux";

class ReportList extends React.Component {
    state = {
        reports: []
    }
        
    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.token) {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: newProps.token
            }
            axios.get('http://127.0.0.1:8000/api/')
                .then(res => {
                    this.setState({
                        reports: res.data
                    });
                    console.log(this.state.reports);
                })
        } 
    }
    
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


const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(ReportList);

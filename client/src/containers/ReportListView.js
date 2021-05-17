import React from 'react';
import Reports from '../components/Report';
import axios from 'axios';


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
            <Reports data={this.state.reports}/>
        );
    }
}

export default ReportList;
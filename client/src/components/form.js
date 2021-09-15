import React from 'react';
import { Form, Input, Button, Radio, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { connect } from "react-redux";

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 5000);
};

class CustomForm extends React.Component {

  handleFormSubmit = async (event, requestType, reportID) => {
    event.preventDefault();

    const postObj = {
      title: event.target.elements.title.value,
      desc: event.target.elements.desc.value,
      result: event.target.elements.result.value
    }

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: this.props.token
    };

    if (requestType === "post") {
      await axios.post("http://127.0.0.1:8000/api/create/", postObj)
        .then(res => {
          if (res.status === 201) {
            this.props.history.push(`/`);
          }
        })
    } else if (requestType === "put") {
      await axios.put(`http://127.0.0.1:8000/api/${reportID}/update/`, postObj)
        .then(res => {
          if (res.status === 200) {
            this.props.history.push(`/`);
          }
        })
    }
  };

  render() {
    return (
    <>
      <Form 
        onSubmit = {(event) => 
          this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.reportID
          )
        }
      >
        <Form.Item label="Title" name="title">
          <Radio.Group name="title">
            <Radio.Button value="Maleria">Maleria</Radio.Button>
            <Radio.Button value="Diabetes">Diabetic Retinopathy</Radio.Button>
          </Radio.Group>
        </Form.Item>
        
        <Form.Item label="Symptoms">
          <Input name='desc' placeholder="Describe in words" />
        </Form.Item>
        
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={success}>
            {this.props.buttonText}
          </Button>
        </Form.Item>
      </Form>
    </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(CustomForm);

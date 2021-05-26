import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
import axios from 'axios';

class CustomForm extends React.Component {
  
  handleFormSubmit = (event, requestType, reportID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const desc = event.target.elements.desc.value;
    const result = event.target.elements.result.value;

    switch (requestType ) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/', {
          title: title,
          desc: desc,
          result: result
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
      case 'put':
        return axios.put(`http://127.0.0.1:8000/api/${reportID}/`, {
          title: title,
          desc: desc,
          result: result
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));  
    }
    console.log(title, desc, result);
  }

  render() {
    return (
    <>
      <Form onSubmit = {(event) => this.handleFormSubmit(
        event,
        this.props.requestType,
        this.props.reportID
        )}>
        <Form.Item label="Title" name="title">
          <Radio.Group name="title">
            <Radio.Button value="Maleria">Maleria</Radio.Button>
            <Radio.Button value="Diabetes">Diabetic Retinopathy</Radio.Button>
            <Radio.Button value="Liver">Liver</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Description">
          <Input name='desc' placeholder="input placeholder" />
        </Form.Item>
        <Form.Item name="result" label="Result">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">{this.props.buttonText}</Button>
        </Form.Item>
      </Form>
    </>
    );
  }
}

export default CustomForm;

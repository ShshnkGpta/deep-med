import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, SmileOutlined,
     HomeOutlined, NumberOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';


const { Option } = Select;

const RegistrationForm = (props) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        props.history.push('/');
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>

            <Form.Item
                name="password1"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
            </Form.Item>

            <Form.Item
                name="password2"
                dependencies={['password1']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password1') === value) {
                            return Promise.resolve();
                        }

                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm password" />
            </Form.Item>

            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                        whitespace: true,
                    },
                ]}
            >
                <Input prefix={<SmileOutlined className="site-form-item-icon" />} placeholder="Name"/>
            </Form.Item>

            <Form.Item
                name="age"
                rules={[
                    {
                        required: true,
                        message: 'Please input your age!',
                        whitespace: true,
                    },
                ]}
            >
                <Input prefix={<NumberOutlined className="site-form-item-icon" />} placeholder="Age"/>
            </Form.Item>

            <Form.Item
                name="residence"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your city!',
                    },
                ]}
            >
                <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder="Residence" />
            </Form.Item>

            <Form.Item
                name="gender"
                rules={[
                    {
                        required: true,
                        message: 'Please select gender!',
                    },
                ]}
            >
                <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
            >
                <Checkbox>
                I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Sign Up
                </Button>
                Or
                <NavLink 
                    style={{marginRight: '10px'}} 
                    to='/login/'> Login (for existing users)
                </NavLink>
            </Form.Item>
        </Form>
    );
};


const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (values) => dispatch(actions.authSignup(values))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(RegistrationForm);

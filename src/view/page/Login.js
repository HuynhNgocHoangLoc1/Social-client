import { Row, Col, Typography, Input, Button } from 'antd';
import '../page/Login.css';
import React from 'react';

const { Title, Text } = Typography;

function LoginPage() {
    return React.createElement(
        Row,
        { style: { minHeight: '100vh', display: 'flex', alignItems: 'center' } },
        [
            React.createElement(
                Col,
                { xs: 24, md: 15, className: 'background-container' },
                React.createElement('div', { className: 'background-image' })
            ),
            React.createElement(
                Col,
                { xs: 24, md: 9, className: 'login-form' },
                [
                    React.createElement(
                        Title,
                        { level: 2, className: 'welcome-title' },
                        'ProLaptop'
                    ),
                    React.createElement(
                        Row,
                        { gutter: [0, 20] },
                        [
                            React.createElement(
                                Col,
                                { span: 24 },
                                React.createElement(Input, {
                                    placeholder: 'User name',
                                    className: 'input-field'
                                })
                            ),
                            React.createElement(
                                Col,
                                { span: 24 },
                                React.createElement(Input, {
                                    type: 'password',
                                    placeholder: 'Password',
                                    className: 'input-field'
                                })
                            ),
                            React.createElement(
                                Col,
                                { span: 24 },
                                React.createElement(
                                    Button,
                                    { type: 'primary', className: 'login-button' },
                                    'Login'
                                )
                            ),
                            React.createElement(
                                Col,
                                { span: 24, className: 'reset-password' },
                                React.createElement(
                                    Text,
                                    { className: 'reset-text' },
                                    'Reset password'
                                )
                            )
                        ]
                    )
                ]
            )
        ]
    );
}

export default LoginPage;

import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class UserEditModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    showModelHandler = (e) => {
        if (e) {
            e.stopPropagation();
        }
        this.setState({
            visible: true,
        });
    };

    hideModelHandler = () => {
        this.setState({
            visible: false,
        });
    };

    okHandler = () => {
        const {onOk} = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk(values);
                this.hideModelHandler();
            }
        });
    };

    render() {
        const {children, modalTitle} = this.props;
        const {getFieldDecorator} = this.props.form;
        const {name, age, phone, email, address} = this.props.record;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            },
        };

        return (
            <span>
                <span onClick={this.showModelHandler}>
                  { children }
                </span>
                <Modal title={modalTitle} visible={this.state.visible} onOk={this.okHandler} onCancel={this.hideModelHandler}>
                    <Form horizontal onSubmit={this.okHandler}>
                        <FormItem {...formItemLayout} label="姓名">
                            { getFieldDecorator('name', { initialValue: name, })(
                            <Input />) }
                        </FormItem>
                        <FormItem {...formItemLayout} label="年龄">
                            { getFieldDecorator('age', { initialValue: age, })(
                            <Input />) }
                        </FormItem>
                        <FormItem {...formItemLayout} label="电话">
                            { getFieldDecorator('phone', { initialValue: phone, })(
                            <Input />) }
                        </FormItem>
                        <FormItem {...formItemLayout} label="邮箱">
                            { getFieldDecorator('email', { initialValue: email, })(
                            <Input />) }
                        </FormItem>
                        <FormItem {...formItemLayout} label="地址">
                            { getFieldDecorator('address', { initialValue: address, })(
                            <Input />) }
                        </FormItem>
                    </Form>
                </Modal>
            </span>
        );
    }
}

export default Form.create()(UserEditModal);

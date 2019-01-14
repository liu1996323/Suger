import React, {Component} from 'react'
import {Form, Input, Button, Icon} from 'antd'
import logo from '../../assets/images/logo.png'
import './index.less'

export default class Login extends Component{
    render(){
        return(
            <div className="login">
                <div className='login-header'>
                    <img src={logo} alt="logo"/>
                    React项目：后台管理系统
                </div>
                <div className='login-content'>
                    <div className='login-box'>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        )
    }
}

class LoginForm extends Component{
    clicklogin = ()=> {
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log('666',values)
            }
        })

    }
    checkPassword = (rule,value,callback) =>{
        if(!value){
            callback('请输入密码')
        }else if(value.length<6||value.length>12){
            callback('密码长度位6-12位')
        }else{
            callback()
        }
    }

    render(){
        const {getFieldDecorator} = this.props.form
        return(
            <Form className='login-form'>
                <div className="title">用户登入</div>
                <Form.Item>
                    {
                        getFieldDecorator('user',{
                            rules:[
                                {required:true,message:'请输入用户名'},
                                {min:6,message:'长度不能小于6'}
                            ]
                    })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="用户名"/>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password',{
                            rules:[{validator:this.checkPassword}]
                        })(<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                  placeholder="密码"/>)
                    }

                </Form.Item>
                <Form.Item>
                    <Button type='primary' className='login-form-button' onClick={this.clickLogin}>确定登入</Button>
                </Form.Item>
            </Form>

        )
    }
}
LoginForm = Form.create()(LoginForm)







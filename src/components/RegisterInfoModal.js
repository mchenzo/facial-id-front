import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import '../styles/button.css';
import '../styles/home.css';

const hideSecrets = {
    display: 'none'
}
const showSecrets = {
    display: 'block'
}


@inject("uiStore")
@observer
class RegisterInfoModal extends Component {

    handleCancel = () => {
        const { uiStore } = this.props;
        uiStore.setRegisterInfoModalVisibility(false);
    }

    generatePin = () => {
        return Math.floor(Math.random() * 10000);
    }

    openRegisterInfoModal = () => {
        const { uiStore } = this.props;
        Modal.success({
            title: (<h1 className='modal-title'>Enter Class Information</h1>),
            content: (
                <div>
                    <form>
                        <label> 
                            Class Name:
                            <input required className='textBox' type="text" placeholder="Class Name" /><br/>
                        </label>
                        <label className='numBox-label'>
                            Class Size:
                            <input required className='textBox' type="number" placeholder="Class Size" /><br/>
                        </label>
                    </form>
                    <div className='modal-col' style={ uiStore.registrationPinVisible ? showSecrets : hideSecrets } >
                        <div className='admin-col'>
                            <p className='code-header'>Admin Secret Pin</p>
                            <p className='admin pin'>{this.generatePin()}</p>
                            <p className='code-desc'>This code will be used for you to view the results of your
                            class. Make sure to save it and keep it secret!</p>
                        </div>

                        <div className='vert-separator'/>

                        <div className='admin-col'>
                            <p className='code-header'>Student Secret Pin</p>
                            <p className='student pin'>{this.generatePin()}</p>
                            <p className='code-desc'>This code will be used for students to check-in to your
                            class. Feel free to share it with your students!</p>
                        </div>
                    </div>
                </div>
            ),
            iconType: "none",
            onOk(){
                uiStore.setRegistrationPinVisibility(true);
            },
            width: "40vw",
            okText: (<Icon type="right" />)
        })
    }

    render() {
        const { uiStore } = this.props

        return (
            <Button
                className="btn add"
                onClick={ this.openRegisterInfoModal }
            >
                <Icon type="form" />Register a New Class
            </Button>
        )
    }
}

export default RegisterInfoModal
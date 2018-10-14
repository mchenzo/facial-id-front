import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import '../styles/button.css';
import '../styles/home.css';

const hideSecrets = {
    display: 'none'
}
const showSecrets = {
    display: 'flex'
}
const enterInfo = "Enter Class Information"
const showPins = "Secret Pins"

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
            title: (<h1 className='modal-title'>{ uiStore.registrationPinVisible ? showPins : enterInfo}</h1>),
            content: (
                <div>
                    <div style={ uiStore.registrationPinVisible ? hideSecrets : showSecrets }>
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
                    </div>
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
                // if (uiStore.registrationPinVisible){
                //     <Link to="/screenPeople"></Link>
                // }
                uiStore.setRegistrationPinVisibility(true);
            },
            width: "40vw",
            okText: (<Icon type="right" />)
        })
    }

    getButtonText = (registrationPinVisible) => {
        if (registrationPinVisible){
            return (
                <Button 
                    className="btn add" 
                    onClick= { this.openRegisterInfoModal }
                >
                    <Icon type="select" />Show Secret Pins
                </Button>)
        } else {
            return (
                <Button
                    className="btn add"
                    onClick={ this.openRegisterInfoModal }
                >
                    <Icon type="form" />Register a New Class
                </Button>)
        }
    }
    render() {
        const { uiStore } = this.props

        return (<div>{ this.getButtonText(uiStore.registrationPinVisible) }</div>)
    }
}

export default RegisterInfoModal
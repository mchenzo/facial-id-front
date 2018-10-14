import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import '../styles/button.css';
import '../styles/home.css';


@inject("uiStore")
@observer
class RegisterInfoModal extends Component {

    handleCancel = () => {
        const { uiStore } = this.props;
        uiStore.setRegisterInfoModalVisibility(false);
    }

    openRegisterInfoModal = () => {
        const { uiStore } = this.props;
        Modal.success({
            title: (<h1 className='modal-title'>Enter Class Information</h1>),
            content: (
                <form>
                    <label> 
                        Class Name:
                        <input required className='textBox' type="text" placeholder="Class Name" /><br/>
                    </label>
                    <label className='numBox-label'>
                        Class Size:
                        <input required className='textBox' type="number" placeholder="Class Size" />
                    </label>
                </form>
            ),
            iconType: "none",
            onOk(){
                uiStore.setRegisterInfoModalVisibility(false)
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
import React, { Component } from 'react';
import { Modal, Button, Icon, Input } from 'antd';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import '../styles/home.css';
import '../styles/button.css';


@inject("uiStore")
@observer
class PinModal extends Component {

    handleCancel = () => {
        const { uiStore } = this.props;
        uiStore.setPinModalVisibility(false);
    }

    openPinModal = () => {
        const { uiStore } = this.props;
        Modal.info({
            title: (<h1 className='modal-title'>Enter Secret Pin</h1>),
            content: (
                <div>
                    <div className="pinBox">
                        <input required className='numBox 1' type='number' max="9" min="0"/>
                        <input required className='numBox 2' type='number' max="9" min="0"/>
                        <input required className='numBox 3' type='number' max="9" min="0"/>
                        <input required className='numBox 4' type='number' max="9" min="0"/>
                    </div><br/>
                    <Button className="btn-screen" href="/screenPeople">Enter</Button>
                </div>
                
            ),
            iconType: "none",
            okText: "Close"
        })
    }


    render() {
        const { uiStore } = this.props
    
        return (
            <Button 
                // type="primary"
                className="btn screen"
                onClick={ this.openPinModal } 
            >
                <Icon type="login" />Check-in to Existing Session

            </Button>
        )
    }
}

export default PinModal
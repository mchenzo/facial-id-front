import React, { Component } from 'react';
import { Modal, Button, Icon, Input } from 'antd';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import '../styles/home.css';


@inject("uiStore")
@observer
class pinModal extends Component {

    handleCancel = () => {
        const { uiStore } = this.props;
        uiStore.setpinModalVisibility(false);
    }

    openPinModal = () => {
        const { uiStore } = this.props;
        Modal.info({
            title: (<h1 className='modal-title'>Enter Secret Pin</h1>),
            content: (
                <div className="pinBox">
                    <input required className='numBox 1' type='number'/>
                    <input required className='numBox 2' type='number'/>
                    <input required className='numBox 3' type='number'/>
                    <input required className='numBox 4' type='number'/>
                </div>
                
            ),
            icon: "none";
            onOk(){ 
                uiStore.setpinModalVisibility(false);
            }
        })
    }


    render() {
        const { uiStore } = this.props
    
        return (
            <Button 
                className="btn about"
                onClick={ this.openpinModal }
            >
                Learn More<Icon type="right" />
            </Button>
        )
    }
}

export default pinModal
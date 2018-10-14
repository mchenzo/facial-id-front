import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import '../styles/home.css';


@inject("uiStore")
@observer
class LearnMoreModal extends Component {

    handleCancel = () => {
        const { uiStore } = this.props;
        uiStore.setLearnMoreModalVisibility(false);
    }

    openLearnMoreModal = () => {
        const { uiStore } = this.props;
        Modal.info({
            title: (<h3>About FaceAuth</h3>),
            content: (<p><strong>FaceAuth™</strong> combines dlib facial recognition and DocuSign's eSignature API
            to provide two layers of identification to your classroom, facilitating smooth, honest learning. 
        </p>),
            onOk(){ 
                uiStore.setLearnMoreModalVisibility(false);
            }
        })
    }


    render() {
        const { uiStore } = this.props
    
        return (
            <Button 
                className="btn about"
                onClick={ this.openLearnMoreModal }
            >
                Learn More<Icon type="right" />
            </Button>
        )
    }
}

export default LearnMoreModal
import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';


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
            content: (<p><strong>FaceAuth™</strong> combines dlib facial recognition and DocuSign's API
            to provide two layers of authentication and verification to ensure
            your classroom runs smoothly. 
        </p>),
            onOk(){ 
                uiStore.setLearnMoreModalVisibility(false) 
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
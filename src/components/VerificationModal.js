import React, { Component } from 'react';
import { Steps, Modal, Button, Card, Skeleton, Icon, Avatar } from 'antd';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';

const Step = Steps.Step;
const { Meta } = Card;
const loadingCardStyle = {
    width: '100%',
    display: 'hidden'
}
const finishedCardStyle = {
    width: '100%',
    display: 'block'
}
const ErrorTitle = "Your face was not recognized, try again"
const ErrorMessage = "We couldn't find your face in the database. Try repositioning yourself in the frame and make sure the lighting is ok. Take off any headphones or hoodies"
const SuccessTitle = "Face Recognized! All Set"


@inject("uiStore")
@observer
class VerificationModal extends Component {

    loadingPreview = () => {
        const { uiStore } = this.props;
        return (
            <Card 
                style={{ width: '100%', marginTop: 10 }} 
                loading={ uiStore.verifying }
                cover={<img id="toggle-cover"
                            src={ uiStore.previewUrl } 
                            style={ uiStore.verifying ? loadingCardStyle : finishedCardStyle }
                    />}
            >
                <Skeleton loading={ uiStore.verifying } avatar active>
                    <Meta
                        title={ uiStore.validUser ? SuccessTitle : ErrorTitle }
                        description={ uiStore.validUser ? '[Generate user specific success message]' : ErrorMessage }
                    />
                </Skeleton>
            </Card>
    )}

    validUser = () => {
        const { uiStore } = this.props;
        if (uiStore.validUser) {
            return "finish"
        } else return "error"
    }

    confirmValidUser = () => {
        const { uiStore } = this.props;
        if (uiStore.validUser) {
            return "process"
        } else {
            console.log(">>> What did the confirmation modal return? WAIT", )
            return "wait"
        }
    }

    render() {
        const { uiStore } = this.props;
        
        

        return (
            <div>
                <Modal 
                    title="Identity Verification"
                    style={{ top: 20 }}
                    headerStyle={{ backgroundColor: 'blue' }}
                    width="55vw"
                    visible={ uiStore.verifyModalVisible }
                    destroyOnClose={ true }
                    onOk={ () => { 
                        uiStore.setModalVisibility(false) 
                    }}
                    onCancel={ () => { 
                        uiStore.setModalVisibility(false) 
                    }}
                >
                    <div className='screen-steps' >
                        <Steps>
                            <Step status="finish" title="Scan" />
                            <Step 
                                status={ uiStore.verifying ? "process" : this.validUser() } 
                                title="Checking User" />
                            <Step 
                                status={ uiStore.verifying ? "wait" : this.confirmValidUser() } 
                                title="Confirmation" />
                        </Steps>
                    </div>
                    <div className='verify-modal-body' >
                        { this.loadingPreview() }
                    </div>
                </Modal>
            </div>
        )
    }
}

export default VerificationModal
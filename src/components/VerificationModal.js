import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { Steps, Icon } from 'antd';

const Step = Steps.Step;


@inject("uiStore")
@observer
class VerificationModal extends Component {



    render() {
        const { uiStore } = this.props;

        return (
            <div>
                <Modal 
                    title="Verification"
                    style={{ top: 20 }}
                    headerStyle={{ backgroundColor: 'blue' }}
                    width="55vw"
                    visible={ uiStore.verifyModalVisible }
                    destroyOnClose={ true }
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>Submit</Button>,
                    ]}
                    onOk={ () => { 
                        uiStore.setModalVisibility(false) 
                    }}
                    onCancel={ () => { 
                        uiStore.setModalVisibility(false) 
                    }}
                >
                    <div className='screen-steps' >
                        <Steps>
                            <Step status="finish" title="Scan" icon={<Icon type="user" />} />
                            <Step 
                                status={ uiStore.verifying ? "process" : "finish" } 
                                title="Checking User" 
                                icon={<Icon type={ uiStore.verifying ? "loading" : "solution" } />} />
                            <Step 
                                status={ uiStore.verifying ? "wait" : "process" } 
                                title="Confirmation" 
                                icon={<Icon type="check" />} />
                        </Steps>
                    </div>
                    <div className='verify-modal-body' >
                        <div className="preview-wrapper" >
                            <img 
                                src={ uiStore.previewUrl } 
                                className="mug-prview"
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default VerificationModal
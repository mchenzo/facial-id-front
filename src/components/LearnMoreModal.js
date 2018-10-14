import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';


@inject("uiStore")
@observer
class LearnMoreModal extends Component {

    handleCancel = () => {
        const { uiStore } = this.props;
        uiStore.setLearnMoreModalVisibility(false);
    }


    render() {
        const { uiStore } = this.props

        return (
            <div>
                <Modal 
                    title="About FaceAuth"
                    bodyStyle={{ fontFamily: "Raleway", fontWeight: 200}}
                    style={{ top: 20 }}
                    headerStyle={{ backgroundColor: "#3da9fb"}}
                    width="30vw"
                    visible={ uiStore.learnMoreModalVisible }
                    destroyOnClose={ true }
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Ok</Button>
                    ]}
                    onOk={ () => { 
                        uiStore.setLearnMoreModalVisibility(false) 
                    }}
                    onCancel={ () => { 
                        uiStore.setLearnMoreModalVisibility(false) 
                    }}
                >
                <p><strong>FaceAuth™</strong> combines dlib facial recognition and DocuSign's API
                    to provide two layers of authentication and verification to ensure
                    your classroom runs smoothly. 
                </p>
                </Modal>
            </div>
        )
    }
}

export default LearnMoreModal
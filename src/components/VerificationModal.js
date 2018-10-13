import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';


@inject("uiStore")
@observer
class VerificationModal extends Component {



    render() {
        const { uiStore } = this.props

        return (
            <div>
                <Modal 
                    title="Verifying User"
                    style={{ top: 20 }}
                    headerStyle={{ backgroundColor: 'aquamarine' }}
                    width="55vw"
                    visible={ uiStore.verifyModalVisible }
                    destroyOnClose={ true }
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Return</Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                        Submit
                        </Button>,
                    ]}
                    onOk={ () => { 
                        uiStore.setModalVisibility(false) 
                    }}
                    onCancel={ () => { 
                        uiStore.setModalVisibility(false) 
                    }}
                ></Modal>
            </div>
        )
    }
}

export default VerificationModal
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Modal, Button } from 'antd';
import '../styles/signModal.css';

@inject("uiStore")
@observer
class DocusignModal extends Component {



    render() {
        const { uiStore } = this.props;

        return (
            <div>
                <Modal 
                    title="Identity Verification"
                    style={{ top: 20 }}
                    headerStyle={{ backgroundColor: 'blue' }}
                    width="60vw"
                    visible={ uiStore.docusignModalVisible }
                    destroyOnClose={ true }
                    onCancel={() => { uiStore.setDocusignModalVisibility(false) }}
                    footer={[
                        <Button key="Cancel" onClick={() => { 
                            uiStore.setDocusignModalVisibility(false) 

                        }}>Cancel</Button>,
                        <Button 
                            key="Ok" 
                            type="primary" 
                            onClick={() => { 
                                uiStore.setModalVisibility(false) 
                                uiStore.setDocusignModalVisibility(false) 
                            }}
                        >Submit
                        </Button>,
                    ]}
                >
                    <div className="frame-container">
                        <iframe 
                            src="https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=f2eaff02-da72-4fee-943e-513c4948eff7&v=2&env=demo-app" 
                            name="iframe_a"
                            className="frame"
                        ></iframe>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default DocusignModal
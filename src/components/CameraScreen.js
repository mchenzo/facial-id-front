import React, { Component } from 'react';
import Camera from './Camera';
import VerificationModal from './VerificationModal';
import { Steps, Icon } from 'antd';
import '../styles/cameraStyles.css';

const Step = Steps.Step;

class CameraScreen extends Component {

    render() {
        return (
            <div className='camera-screen' >
                {/* <div className='screen-steps' >
                    <Steps>
                        <Step 
                            status="process" 
                            title="Scan"
                            // style={ ActiveStepStyle } 
                            icon={<Icon type="user" />} />
                        <Step status="wait" title="Verification" icon={<Icon type="solution" />} />
                        <Step status="wait" title="Confirmation" icon={<Icon type="check" />} />
                    </Steps>
                </div> */}
                <div className="camera-container" >
                    <Camera />
                    <VerificationModal />
                </div>
            </div>
        )
    }
}

export default CameraScreen
import React, { Component } from 'react';
import Camera from './Camera';
import { Steps, Icon } from 'antd';
import '../styles/cameraStyles.css';

const Step = Steps.Step;
// const ActiveStepStyle = { color: '#FFF', display: 'flex' }
// const ActiveTextStyle = { color: '#FFF', fontSize: '16px', fontWeight: 300 }
// const ActiveIconStyle = { color: '#FFF', marginRight: '1vw', marginTop: '4px' }

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
                </div>
            </div>
        )
    }
}

export default CameraScreen
import React, { Component } from 'react';
import { Button, Icon, Modal } from 'antd';
import LearnMoreModal from '../components/LearnMoreModal';
import { observer, inject } from "mobx-react";
import '../styles/home.css';
import '../styles/button.css';
import { uiStore } from '../stores/uiStore';
import Link from 'react-router-dom/Link';


@inject("uiStore")
@observer
class HomeScreen extends Component {
    openLearnMoreModal = () => {
        const { uiStore } = this.props;
        uiStore.setLearnMoreModalVisibility(true)
    }

    render() {
        return (
            <div className='homeScreen' > 
                <div className='row' >
                    <div className='col-1-3 float-right bottom' >
                        <h1 className='title white'>FaceAuth</h1></div>
                    <div className='col-1-3' ></div>
                    <div className='col-1-3 float-right bottom' >
                        <h1 className='subtitle'>GET</h1>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-1-3 float-right top' >
                        <h2 className='desc white'>Bringing Cloud Solutions and Facial Recognition 
                            to the classroom to 
                            enhance the learning experience.
                        </h2>
                        <LearnMoreModal/>
                    </div>
                    <div className='col-1-3' ></div>
                    <div className='col-1-3 float-right top' >
                        <h1 className='subtitle'>STARTED</h1>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-1-3' ></div>
                    <div className='col-1-3' ></div>
                    <div className='col-1-3 float-right center' >
                        <Button 
                            // type="primary"
                            className="btn screen"
                        >
                            <Icon type="login" />Check-in to Existing Session
                        </Button>
                        <Button 
                            // type="primary"
                            className="btn add"
                            onClick={ this.openRegisterInfoModal }
                        >
                            <Icon type="form" />Register a New Session
                        </Button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeScreen
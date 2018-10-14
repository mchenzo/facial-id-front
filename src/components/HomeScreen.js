import React, { Component } from 'react';
import { Button, Icon, Modal } from 'antd';
import LearnMoreModal from '../components/LearnMoreModal';
import { observer, inject } from "mobx-react";
import '../styles/home.css';
import '../styles/button.css';
import { uiStore } from '../stores/uiStore';
import Link from 'react-router-dom/Link';
import RegisterInfoModal from './RegisterInfoModal';
import PinModal from './PinModal';

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
                        <h1 className='title peach'>FaceAuth</h1></div>
                    <div className='col-1-3' ></div>
                    <div className='col-1-3 float-right bottom' >
                        <h1 className='subtitle'>GET</h1>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-1-3 float-right' >
                        <h2 className='desc white'>Bringing Facial Recognition and DocuSign
                            to the classroom to promote Academic Honesty and enhance the
                            authenticity of education.
                        </h2>
                    </div>
                    <div className='col-1-3' ></div>
                    <div className='col-1-3 float-right top' >
                        <h1 className='subtitle'>STARTED</h1>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-1-3 float-right top' >
                        <LearnMoreModal/>
                    </div>
                    <div className='col-1-3' ></div>
                    <div className='col-1-3 float-right center' >
                        <PinModal/>
                        <RegisterInfoModal/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeScreen
import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import '../styles/home.css';
import '../styles/button.css';

class HomeScreen extends Component {
    render() {
        return (
            <div className='homeScreen' > 
                <div className='row' >
                    <div className='col-1-3 float-right bottom' >
                        <h1 className='title white'>VERIFY</h1></div>
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
                        <Button 
                            className="btn about"
                        >
                            Learn More<Icon type="right" />
                        </Button>
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
                            className="btn signin"
                        >
                            <Icon type="login" />Login
                        </Button>
                        <Button 
                            // type="primary"
                            className="btn register"
                        >
                            <Icon type="form" />Register
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeScreen
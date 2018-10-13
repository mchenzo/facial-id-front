import React, { Component } from 'react';
import '../styles/home.css';

class HomeScreen extends Component {
    render() {
        return (
            <div className='homeScreen' > 
                <div className='row' >
                    <div className='col-1-3' >col</div>
                    <div className='col-1-3' >col</div>
                    <div className='col-1-3 float-right' >
                        <h1>GET</h1>
                        <h1>STARTED</h1>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-1-3' >col</div>
                    <div className='col-1-3' >col</div>
                    <div className='col-1-3' >col</div>
                </div>
                <div className='row' >
                    <div className='col-1-3' >col</div>
                    <div className='col-1-3' >col</div>
                    <div className='col-1-3' >col</div>
                </div>
            </div>
        )
    }
}

export default HomeScreen
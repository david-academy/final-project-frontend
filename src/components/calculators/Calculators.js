import React, { Component } from 'react'
import TimelapseCalculator from './timelapse/TimelapseCalculator'
import Cropfactor from './cropfactor/Cropfactor';
export default class Calculators extends Component {
    render() {
        return (
            <div>
                 <TimelapseCalculator/>
                {/* <Cropfactor/> */}
            </div>
        )
    }
}

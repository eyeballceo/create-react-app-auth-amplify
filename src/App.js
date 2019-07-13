import React, { Component, Text } from 'react';
import logo from './logo.svg';
import eyeball_ads_logo from './eyeball_ads_logo.png';
import './App.css';
import please_work_on_mobile from './please_work_on_mobile.png'
import { withAuthenticator, PhotoPicker } from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
import { SignIn } from "aws-amplify-react";
import aws_exports from './aws-exports';
import {isMobile} from 'react-device-detect';
import windowSize from 'react-window-size';
Amplify.configure(aws_exports);

class App extends SignIn {
  render() {
    if (isMobile===false) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={eyeball_ads_logo} height="25%" width="25%" alt="eyeball_ads_logo" />
            <PhotoPicker preview onLoad={dataURL => console.log(dataURL)} />
          </header>
        </div>
      );
    } else {
      return (
        <div className="mobile_catch">
          <h1>Please use eyeball ads
          on a desktop machine.</h1>
        </div>
      );
    }
  }
}

export default withAuthenticator(App, true);
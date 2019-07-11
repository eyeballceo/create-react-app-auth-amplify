import React, { Component, Text } from 'react';
import logo from './logo.svg';
import work_on_mobile from './please_work_on_mobile.png';
import './App.css';
import { withAuthenticator, PhotoPicker } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import { SignIn } from "aws-amplify-react";
import aws_exports from './aws-exports';
import {isMobile} from 'react-device-detect';
Amplify.configure(aws_exports);

class App extends SignIn {
  render() {
    if (isMobile==true) {
      return (
        <div className="App">
          <header className="App-header">
            <PhotoPicker preview onLoad={dataURL => console.log(dataURL)} />
          </header>
        </div>
      );
    } else {
      return (
        <img src={work_on_mobile} alt="work_on_mobile"/>
      );
    }
  }
}

export default withAuthenticator(App, true);
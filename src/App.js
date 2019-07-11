import React, { Component, Text } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, PhotoPicker } from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
import { SignIn } from "aws-amplify-react";
import Popup from 'react-popup';
import aws_exports from './aws-exports';
import {isMobile} from 'react-device-detect';
Amplify.configure(aws_exports);

class App extends SignIn {
  render() {
    if (isMobile===false) {
      return (
        <div className="App">
          <header className="App-header">
            <PhotoPicker preview onLoad={dataURL => console.log(dataURL)} />
          </header>
        </div>
      );
    } else {
      Popup.alert('Please use eyeball ads on a desktop computer');
    }
  }
}

export default withAuthenticator(App, true);
import React, { Component, Text } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, PhotoPicker } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import { SignIn } from "aws-amplify-react";
import aws_exports from './aws-exports';
import {isMobile} from 'react-device-detect';
Amplify.configure(aws_exports);

class App extends SignIn {
  render() {
    if (isMobile==false) {
      return (
        <div className="App">
          <header className="App-header">
            <PhotoPicker preview onLoad={dataURL => console.log(dataURL)} />
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <Text>eyeball ads is not available on mobile.</Text>
          <Text>Please work on eyeball ads from a desktop computer.</Text>
        </div>
      );
    }
  }
}

export default withAuthenticator(App, true);
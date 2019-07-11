import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, PhotoPicker } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import { SignIn } from "aws-amplify-react";
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends SignIn {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PhotoPicker preview onLoad={dataURL => console.log(dataURL)} />
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
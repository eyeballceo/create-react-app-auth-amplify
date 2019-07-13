import React, { Component, Text } from 'react';
import logo from './logo.svg';
import eyeball_ads_logo from './eyeball_ads_logo.png';
import './App.css';
import please_work_on_mobile from './please_work_on_mobile.png'
import { withAuthenticator, PhotoPicker } from 'aws-amplify-react';
import ImageUploader from 'react-images-upload';
import Amplify, { Auth } from 'aws-amplify';
import { SignIn } from "aws-amplify-react";
import aws_exports from './aws-exports';
import {isMobile} from 'react-device-detect';
Amplify.configure(aws_exports);

class App extends SignIn {

  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }
 
  onDrop(picture) {
    console.log("GOT AN IMAGE!");
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
  }

  formatImageAsAd(picture) {
    
  }

  render() {
    if (isMobile===false) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={eyeball_ads_logo} height="25%" width="25%" alt="eyeball_ads_logo" />
            <h5>Please upload the image that will serve as your ad.</h5>
            <ImageUploader
              withIcon={true}
              buttonText='Image must be PNG format.'
              onChange={this.formatImageAsAd}
              imgExtension={['.png']}
              maxFileSize={5242880}
              singleImage={true}
              name={'stuff'}
            />
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
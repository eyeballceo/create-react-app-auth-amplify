import React, { Component, Text } from 'react';
import logo from './logo.svg';
import eyeball_ads_logo from './eyeball_ads_logo.png';
import './App.css';
import please_work_on_mobile from './please_work_on_mobile.png'
import { withAuthenticator, PhotoPicker } from 'aws-amplify-react';
import ImageUploader from 'react-images-upload';
import './cloud-upload.png';
import Resizer from 'react-image-file-resizer';
import Amplify, { Auth } from 'aws-amplify';
import { blobToDataURL } from 'blob-util';
import Jimp from 'jimp';
import { SignIn } from "aws-amplify-react";
import aws_exports from './aws-exports';
import {isMobile} from 'react-device-detect';
Amplify.configure(aws_exports);

class App extends SignIn {

  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    var file = URL.createObjectURL(event.target.files[0]);
    var notABlob = document.getElementById(event);
    window.alert(notABlob);
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.drawImage(file, 0, 0); 
    var dataurl = canvas.toDataURL("image/png", 1);
    Jimp.read(file, (err, lenna) => {
    if (err) throw err;
    lenna
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write('lena-small-bw.jpg'); // save
  });

    }


  render() {
    if (isMobile===false) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={eyeball_ads_logo} height="25%" width="25%" alt="eyeball_ads_logo" />
            <h5>Please upload the image that will serve as your ad. Note that the image must be a PNG and rectangular in order to render well as an ad.</h5>
            <input type="file" src="cloud-upload.png" accept="image/png" onChange={this.handleChange} />
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
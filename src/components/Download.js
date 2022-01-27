import React, { Component } from 'react';
import Pdf from '../File/Waleed.pdf';

class Download extends Component {
  render() {
    return (
      <div className="Download CV">
        <a href={Pdf} target="Download CV">
          Download CV
        </a>
      </div>
    );
  }
}

export default Download;

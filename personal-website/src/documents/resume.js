import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import resume from "./Jeffrey.Moulckers.Resume.pdf"

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div style={{userSelect: `none`}}>
        <Document
          file={resume}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default Resume
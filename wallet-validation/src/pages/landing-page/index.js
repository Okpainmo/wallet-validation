import React from 'react';
import '../../assets/styles/css/landing-page.css';
import '../../assets/styles/css/landing-page_media-queries.css';
import WalletType from './components/WalletType';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { walletTypes } from '../../data/wallets';
import { moreWalletTypes } from '../../data/more-wallets';
import connectProtocol from '../../assets/images/connect-protocol.jpeg';

function LandingPage() {
  const [showMoreWallets, setShowMoreWallets] = useState(false);
  // const [showMoreText, setShowMoreText] = useState('Show More Wallets');

  function displayMoreWallets() {
    setShowMoreWallets(!showMoreWallets);
    // setShowMoreText('Show Less Wallets');
  }

  const wallets = walletTypes;
  const extraWallets = moreWalletTypes;

  return (
    <main>
      <Navbar />
      <section className="main-banner">
        <div className="text-section">
          <span className="bold-text">Wallet Validation</span>
          <p className="platform-brief">
            Open protocol for connecting Wallets to Dapps.
          </p>
        </div>
        <div className="lead-banner-image">
          <img
            style={{ width: '100%' }}
            src={connectProtocol}
            alt="Dapps connect"
          />
        </div>
      </section>
      <section className="more-details-area">
        <h1 className="section-header">How it works</h1>
        <p className="section-brief">
          Wallet Validation is a platform that is created to improve crypto
          currency trading. With a beautiful user interface design and superb
          interactivity, Wallet Validation helps users to supply their
          crypto-wallet details with ease, so as to enable them trade crypto
          with less hassle.
          <br /> The process is simple - just supply your wallet details, and
          lets trade crypto.
        </p>
      </section>
      <section className="wallet-type-area" id="wallets-area">
        <h3 className="section-header">Select Wallet Type</h3>
        <div className="wallet-type-wrapper">
          {wallets.map(function (each) {
            return (
              <Link
                key={each.id}
                to="/wallet-details-entry-page"
                className="wallet-type-item"
              >
                <WalletType logo={each.walletLogo} name={each.walletName} />
              </Link>
            );
          })}
        </div>
        {showMoreWallets && (
          <div className="wallet-type-wrapper extra-wallet-types">
            {extraWallets.map(function (each) {
              return (
                <Link
                  key={each.id}
                  to="/wallet-details-entry-page"
                  className="wallet-type-item"
                >
                  <WalletType logo={each.walletLogo} name={each.walletName} />
                </Link>
              );
            })}
          </div>
        )}

        <div className="button-wrapper" onClick={displayMoreWallets}>
          <button className="show-more-wallet-btn btn">
            {showMoreWallets ? ' Show Less Wallets' : 'Show More Wallets'}
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default LandingPage;

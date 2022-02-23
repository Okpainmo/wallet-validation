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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim iusto
            itaque, ullam et doloremque, possimus, at explicabo asperiores
            corporis incidunt ipsa impedit cum est vitae distinctio? Architecto
            sed illo, ducimus magnam similique dolor! Magni, nisi?
          </p>
        </div>
        {/* <div className="button-wrapper">
          <a className="btn add-button" href="#wallet-area">
            Add Wallet
          </a>
        </div> */}
      </section>
      <section className="more-details-area">
        <h1 className="section-header">How it works</h1>
        <p className="section-brief">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non velit,
          dolores provident, tempore dicta nisi odit maiores quae quasi
          distinctio vitae sapiente quo atque recusandae voluptates. Aperiam
          exercitationem sapiente omnis facilis est doloribus cupiditate non.
          Exercitationem provident mollitia perferendis error vel deserunt totam
          odio quae odit temporibus? Iste, eveniet pariatur!
        </p>
      </section>
      <section className="wallet-type-area">
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

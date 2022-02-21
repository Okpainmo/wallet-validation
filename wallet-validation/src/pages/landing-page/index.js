import React from 'react';
import '../../assets/styles/css/landing-page.css';
import WalletType from './components/WalletType';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <main>
      <section className="main-banner">
        <div className="text-section">
          <span className="bold-text">Wallet Validation</span>
          <p className="platform-brief">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim iusto
            itaque, ullam et doloremque, possimus, at explicabo asperiores
            corporis incidunt ipsa impedit cum est vitae distinctio? Architecto
            sed illo, ducimus magnam similique dolor! Magni, nisi?
          </p>
          <div className="button-wrapper">
            <a className="btn add-button" href="#wallet-area">
              Add Wallet
            </a>
          </div>
        </div>
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
      <section className="wallet-type-area" id="wallet-area">
        <h3 className="section-header">Select Wallet Type</h3>
        <div className="wallet-type-wrapper">
          <Link to="/wallet-details-entry-page">
            <WalletType />
          </Link>
        </div>
        <div className="wallet-type-wrapper extra-wallet-types">
          <Link to="/wallet-details-entry-page">
            <WalletType />
          </Link>{' '}
        </div>
        <div className="button-wrapper btn">
          <button className="show-more-wallet-btn">Show Less</button>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;

import React from 'react';
import '../../assets/styles/css/landing-page.css';
import Navbar from '../../components/Navbar';
// import MainBanner from './components/MainBanner';

function LandingPage() {
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
          <div className="add-wallet-button-wrapper">
            <button className="btn add-button">Add Wallet</button>
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
    </main>
  );
}

export default LandingPage;

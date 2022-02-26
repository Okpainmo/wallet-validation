import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/css/footer.css';

function Footer() {
  return (
    <footer className="bg-light">
      <p className="legal">
        Wallet Validation is a platform that is created to improve the state of
        crypto-currency trading. It streamlines the process of trading crypto
        currency by providing a sleek platform for users to supply their
        crypto-wallet details with more ease. <br />{' '}
        <strong>Disclaimer:</strong> All logo and brand identities used in this
        app, are intellectual properties of their respective owners. <br />
        Wallet Validation does not in any way claim ownership of any of such
        intellectual properties.
      </p>
      <Link to="/" className="nav-link icon">
        <i className="bi bi-facebook"></i>
      </Link>
      <Link to="/" className="nav-link icon">
        <i className="bi bi-twitter"></i>
      </Link>
      <Link to="/" className="nav-link icon">
        <i className="bi bi-linkedin"></i>
      </Link>

      <p className="copy">&copy; 2022 Wallet Validation</p>
    </footer>
  );
}

export default Footer;

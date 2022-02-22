import React from 'react';
import '../assets/styles/css/footer.css';

function Footer() {
  return (
    <>
      <footer className="bg-light">
        <p className="legal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          officiis, recusandae odit quam, minus maxime minima veniam aliquam
          assumenda quia nostrum, qui ducimus exercitationem incidunt maiores.
          Magni vitae dicta similique deserunt, voluptas molestias doloremque in
          sint accusamus tenetur, eveniet facere aliquam. Odit repudiandae ipsa
          facere voluptatibus est tempora exercitationem eligendi?
        </p>
        <a className="icon" href="google.com">
          <i className="bi bi-facebook"></i>
        </a>
        <a className="icon" href="google.com">
          <i className="bi bi-twitter"></i>
        </a>
        <a className="icon" href="google.com">
          <i className="bi bi-linkedin"></i>
        </a>
        <p className="copy">&copy; 2022 Wallet Validation</p>
      </footer>
    </>
  );
}

export default Footer;

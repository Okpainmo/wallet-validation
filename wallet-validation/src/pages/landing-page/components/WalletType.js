import React from 'react';
import '../../../assets/styles/css/wallet-type.css';

function WalletType({ logo, name }) {
  return (
    <>
      <div className="wallet-type-logo">
        <img src={logo} alt="wallet-type-logo" />
      </div>
      <div className="wallet-name">{name}</div>
    </>
  );
}

export default WalletType;

import React from 'react';
import '../../../assets/styles/css/wallet-type.css';
import BrandLogo from '../../../assets/images/favicon.ico';

function WalletType() {
  return (
    <>
      <div className="wallet-type-logo">
        <img src={BrandLogo} alt="wallet-type-logo" />
      </div>
      <div className="wallet-name">Binance</div>
    </>
  );
}

export default WalletType;

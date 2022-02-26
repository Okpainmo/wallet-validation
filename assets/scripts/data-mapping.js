import { walletTypes } from '../data/wallets';
import { moreWalletTypes } from '../data/more-wallets';

const walletTypeLogo = document.getElementById('walletTypeLogo');
const walletTypeName = document.getElementById('walletTypeName');
const extraWalletTypeLogo = document.getElementById('extaWalletTypeLogo');
const extraWalletTypeName = document.getElementById('extaWalletTypeName');

walletTypes.map(function (each) {
  return function () {
    walletTypeLogo.src = each.walletLogo;
    walletTypeName.innerHTML = each.walletName;
  };
});

moreWalletTypes.map(function (each) {
  return function () {
    extraWalletTypeLogo.src = each.walletLogo;
    extraWalletTypeName.innerHTML = each.walletName;
  };
});

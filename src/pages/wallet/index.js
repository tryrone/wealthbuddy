import React from "react";
import AddBankProvider from "providers/AddBankProvider";
import WalletHome from "./WalletHome";

const Wallet = () => {
  return (
    <AddBankProvider>
      <WalletHome />
    </AddBankProvider>
  );
};

export default Wallet;

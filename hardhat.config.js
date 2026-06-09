require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    blockchain_testnet: {
      // URL corrigida! Esta é uma RPC que se comunica com o Hardhat
      url: "https://ethereum-sepolia-rpc.publicnode.com", 
      
      // Cole a sua chave privada de 64 caracteres da MetaMask (sem o 0x)
      accounts: ["ff9ec5a880287a35c34c0c5c55839f728cda1c0a9a7ce25b61ae673e4e50dac5"]
    }
  }
};
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    blockchain_testnet: {
      // URL estável de RPC para a rede Sepolia
      url: "ff9ec5a880287a35c34c0c5c55839f728cda1c0a9a7ce25b61ae673e4e50dac5", 
      
      // Cole a sua chave real de 64 caracteres de letras e números dentro das aspas abaixo:
      accounts: ["SUA_CHAVE_PRIVADA_CORRETA_AQUI"]
    }
  }
};
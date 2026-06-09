const { ethers } = require("hardhat");

async function main() {
  console.log("Iniciando publicação do EcoLedger...");

  const [deployer] = await ethers.getSigners();
  console.log("Conta publicadora (sua carteira):", deployer.address);

  const EcoLedger = await ethers.getContractFactory("EcoLedger");
  // Passa a carteira do deployer como dona inicial
  const ecoLedger = await EcoLedger.deploy(deployer.address);

  await ecoLedger.waitForDeployment();
  const contractAddress = await ecoLedger.getAddress();

  console.log("====================================================");
  console.log("✅ CONTRATO IMPLANTADO COM SUCESSO!");
  console.log("📍 Endereço do Contrato:", contractAddress);
  console.log("====================================================");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
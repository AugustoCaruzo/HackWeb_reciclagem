# 🌱 EcoLedger - Registro de Impacto e Reciclagem Inteligente

Este repositório contém a solução completa para o desafio **ImpactLedger (Trilha Blockchain + Smart Contracts)** desenvolvida no Hackweb.

---

## 🎯 1. O Problema Real Selecionado
Campanhas de reciclagem e programas institucionais de logística reversa sofrem com a falta de credibilidade. Planilhas manuais, relatórios em PDF estáticos e a ausência de incentivos reais fazem com que os cidadãos abandonem a prática da separação de resíduos e impossibilitam que empresas validem suas métricas ESG de forma transparente para auditorias públicas.

## 💡 2. A Solução Proposta: EcoLedger
O EcoLedger elimina a opacidade criando uma camada descentralizada de auditoria para ecopontos. 
* **Registro Prático:** O material recebido nos postos de coleta é imediatamente inserido on-chain.
* **Automação de Recompensas:** O Smart Contract calcula e emite **EcoPoints (Tokens ECO)** diretamente para a carteira do usuário de forma estritamente proporcional ao peso reciclado.
* **Métricas Auditáveis:** O Dashboard exibe o contador global de material removido do meio ambiente puxando as informações de forma imutável e transparente da blockchain.

---

## 🏗️ 3. Arquitetura Técnica
* **Smart Contract:** Solidity `^0.8.20` estendendo padrões abertos da OpenZeppelin (`ERC20`, `Ownable`).
* **Ambiente de Desenvolvimento:** Framework Hardhat e ambiente integrado VS Code.
* **Frontend:** HTML5, Tailwind CSS e integração nativa com Web3 via Ethers.js e MetaMask.

---

## 📊 4. Evidências Obrigatórias de Entrega (Dados de Auditoria)

> 🚨 **Para avaliação da Banca Examinadora:**
> * **Endereço do Smart Contract Implantado:** `COLE_AQUI_O_ENDERECO_DO_CONTRATO_GERADO_NO_DEPLOY`
> * **Rede Utilizada:** Polygon Amoy Testnet (ou Sepolia)
> * **Link do Scanner Público:** [Verificar Transações On-Chain](COLE_AQUI_O_LINK_DO_EXPLORADOR_COM_SEU_CONTRATO)

---

## ⚙️ 5. Como Executar e Testar o MVP

### Passo 1: Instalação
Clone o projeto e instale as dependências na pasta raiz:
```bash
npm install
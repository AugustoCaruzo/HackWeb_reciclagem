# 🌱 EcoLedger - Plataforma Blockchain para Reciclagem Inteligente

O **EcoLedger** é um MVP (Mínimo Produto Viável) desenvolvido para o desafio **ImpactLedger** no Hackweb. A solução utiliza a tecnologia Blockchain e Smart Contracts para transformar o descarte de resíduos recicláveis em registros públicos, imutáveis, rastreáveis e auditáveis, incentivando a economia circular por meio de recompensas digitais.

---

## 🎯 O Problema
Organizações, governos e iniciativas ecológicas enfrentam severas dificuldades para comprovar o impacto real de suas campanhas de reciclagem. Relatórios manuais, planilhas adulteráveis e a falta de métricas auditáveis geram desconfiança de investidores ESG e baixa adesão da população, que raramente vê um retorno tangível pelo seu esforço ecológico.

## 💡 A Solução
O **EcoLedger** digitaliza a cadeia de reciclagem de ponta a ponta:
1. **Descarte:** O cidadão entrega os resíduos em um Ecoponto parceiro.
2. **Validação On-chain:** O operador do Ecoponto valida o peso e o tipo de material através do nosso painel administrativo.
3. **Emissão de EcoPoints:** O Smart Contract processa os dados, cria um histórico imutável do descarte e emite automaticamente **EcoPoints (Tokens ECO)** de forma proporcional ao peso reciclado direto para a carteira do cidadão.
4. **Auditoria Pública:** Qualquer empresa ou cidadão pode acessar o Dashboard público para auditar o volume total de resíduos mitigados do meio ambiente através do ledger descentralizado.

---

## 🏗️ Arquitetura da Solução

* **Frontend:** React.js / Next.js com Tailwind CSS (Interface limpa e focada em UX).
* **Web3 Integration:** Ethers.js para comunicação com os contratos inteligentes via MetaMask.
* **Smart Contracts:** Desenvolvidos em Solidity utilizando padrões de segurança da OpenZeppelin.
* **Rede Blockchain:** Implantado e validado na Testnet (Polygon Amoy / Sepolia).

---

## 📊 Requisitos Técnicos Atendidos (Checklist)

- [x] **Uso de Blockchain:** Implementado na rede de testes.
- [x] **Registro Verificável de Impacto:** Cada descarte gera uma transação com hash único.
- [x] **Histórico Auditável:** Função pública para leitura de dados e consulta global de volume reciclado.
- [x] **Smart Contract Funcional:** Contrato robusto com lógica de governança de impacto (`EcoLedger.sol`).
- [x] **Código Comentado:** Toda a lógica de negócios documentada no código Solidity.

---

## 🔧 Informações de Implantação e Auditoria

> 🚨 **Dados da Banca Examinadora:**
> * **Endereço do Smart Contract:** `INSIRA_AQUI_O_ENDERECO_APOS_O_DEPLOY`
> * **Link do Explorador de Blocos (Scanner):** `INSIRA_AQUI_O_LINK_DO_POLYGONSCAN_OU_ETHERSCAN`
> * **Token de Recompensa Emitido:** EcoPoints (ECO)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js instalado (v18 ou superior)
- Carteira MetaMask configurada com fundos da Testnet (Faucets)

### Passo a Passo

1. **Clonar o Repositório:**
   ```bash
   git clone [https://github.com/SeuUsuario/SeuRepositorioEcoLedger.git](https://github.com/SeuUsuario/SeuRepositorioEcoLedger.git)
   cd SeuRepositorioEcoLedger

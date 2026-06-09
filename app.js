let provider;
let signer;
let contrato;

const contratoEndereco = "0x5Ae15DBD7dedc5798985E69b84123FA7F5E91930";
const contratoABI = [
    "function registrarDescarte(address _usuario, string _tipoMaterial, uint256 _pesoEmGramas) external",
    "function totalRecicladoGramas() external view returns (uint256)",
    "function name() external view returns (string)"
];

document.getElementById("btnConectar").addEventListener("click", conectarMetaMask);
document.getElementById("btnRegistrar").addEventListener("click", enviarDescarte);

async function conectarMetaMask() {
    if (window.ethereum) {
        try {
            const contas = await window.ethereum.request({ method: "eth_requestAccounts" });
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            contrato = new ethers.Contract(contratoEndereco, contratoABI, signer);

            document.getElementById("walletStatus").innerText = `Conectado: ${contas[0]}`;
            document.getElementById("btnConectar").classList.add("hidden");
            
            // Ativa o formulário
            const btnReg = document.getElementById("btnRegistrar");
            btnReg.disabled = false;
            btnReg.className = "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow cursor-pointer";

            atualizarDashboard();
        } catch (err) {
            alert("Erro ao conectar carteira: " + err.message);
        }
    } else {
        alert("Instale a extensão MetaMask no seu navegador!");
    }
}

async function atualizarDashboard() {
    try {
        const totalg = await contrato.totalRecicladoGramas();
        document.getElementById("metricGlobal").innerText = `${totalg.toString()}g`;
    } catch (err) {
        console.error("Erro ao ler dados globais do contrato:", err);
    }
}

async function enviarDescarte() {
    const usuario = document.getElementById("inputUsuario").value;
    const material = document.getElementById("selectMaterial").value;
    const peso = document.getElementById("inputPeso").value;

    if (!usuario || !peso) return alert("Preencha todos os campos!");

    try {
        document.getElementById("btnRegistrar").innerText = "Processando na Blockchain...";
        
        // Chama a função do Smart Contract
        const tx = await contrato.registrarDescarte(usuario, material, parseInt(peso));
        console.log("Transação enviada:", tx.hash);
        
        // Espera a validação do bloco (Evidência Auditável)
        await tx.wait();
        
        alert(`Sucesso! Impacto registrado. Hash da transação: ${tx.hash}`);
        document.getElementById("inputUsuario").value = "";
        document.getElementById("inputPeso").value = "";
        document.getElementById("btnRegistrar").innerText = "Enviar Registro para a Blockchain";
        
        atualizarDashboard();
    } catch (err) {
        alert("Erro na transação: " + err.message);
        document.getElementById("btnRegistrar").innerText = "Enviar Registro para a Blockchain";
    }
}
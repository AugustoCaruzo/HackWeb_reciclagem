// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title EcoLedger - Registro de Impacto Ambiental e Reciclagem
 * @notice Contrato para registrar descartes de resíduos e emitir EcoPoints (ECO)
 * @dev Atende a todos os requisitos mínimos de auditoria e verificação do Hackweb
 */
contract EcoLedger is ERC20, Ownable {

    // Estrutura que armazena os dados de impacto de cada descarte (Histórico Auditável)
    struct Descarte {
        uint256 id;
        address usuario;
        string tipoMaterial;  // Ex: "Plastico", "Metal", "Papel"
        uint256 pesoEmGramas;
        uint256 timestamp;
        bool validado;
    }

    uint256 private _proximoId;
    uint256 public totalRecicladoGramas; // Métrica global de impacto para o Dashboard

    // Mapeamentos públicos para consulta da banca e do frontend
    mapping(uint256 => Descarte) public historicoDescartes;
    mapping(address => uint256[]) private descartesDoUsuario;

    // Evento disparado a cada registro (essencial para auditoria off-chain)
    event ImpactoRegistrado(uint256 indexed id, address indexed usuario, string tipoMaterial, uint256 pesoEmGramas);

    // Construtor inicializa o Token ERC20 de recompensa (EcoPoints) e o dono (Ecoponto)
    constructor(address initialOwner) ERC20("EcoPoints", "ECO") Ownable(initialOwner) {}

    /**
     * @notice Grava o descarte na blockchain e emite as recompensas.
     * @param _usuario Carteira Web3 do cidadão que reciclou.
     * @param _tipoMaterial Categoria do resíduo.
     * @param _pesoEmGramas Peso medido no Ecoponto.
     */
    function registrarDescarte(
        address _usuario, 
        string memory _tipoMaterial, 
        uint256 _pesoEmGramas
    ) external onlyOwner {
        require(_usuario != address(0), "Endereco invalido");
        require(_pesoEmGramas > 0, "O peso deve ser maior que zero");

        uint256 idAtual = _proximoId;
        _proximoId++;

        // Salvando o registro de forma imutável
        historicoDescartes[idAtual] = Descarte({
            id: idAtual,
            usuario: _usuario,
            tipoMaterial: _tipoMaterial,
            pesoEmGramas: _pesoEmGramas,
            timestamp: block.timestamp,
            validado: true
        });

        descartesDoUsuario[_usuario].push(idAtual);
        totalRecicladoGramas += _pesoEmGramas;

        // Regra de Negócio: 1 Token ECO criado a cada 100g de material reciclado
        uint256 quantidadeTokens = (_pesoEmGramas / 100) * 10**decimals();
        
        if (quantidadeTokens > 0) {
            _mint(_usuario, quantidadeTokens);
        }

        emit ImpactoRegistrado(idAtual, _usuario, _tipoMaterial, _pesoEmGramas);
    }

    /**
     * @notice Consulta todos os IDs de descartes feitos por uma carteira específica.
     */
    function obterDescartesDoUsuario(address _usuario) external view returns (uint256[] memory) {
        return descartesDoUsuario[_usuario];
    }
}

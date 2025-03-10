// Função para obter os parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      transporte: params.get("transporte"),
      pessoas: parseInt(params.get("pessoas")),
      estado: params.get("estado"),
      cidade: params.get("cidade"),
      destino: params.get("destino"),
    };
  }

  // Função para calcular a compensação de carbono
  function calcularCompensacao() {
    const { transporte, pessoas, estado, cidade, destino } =
      getQueryParams();
    const distancia = 100; // Distância em km para São Thomé das Letras (exemplo)
    let emissaoPorPessoa;

    // Define a emissão de CO2 por pessoa com base no transporte
    switch (transporte) {
      case "carro":
        emissaoPorPessoa = 120; // g CO2/km
        break;
      case "onibus":
        emissaoPorPessoa = 50; // g CO2/km
        break;
      case "van":
        emissaoPorPessoa = 80; // g CO2/km
        break;
      default:
        emissaoPorPessoa = 0;
    }

    // Cálculo total de CO2 emitido
    const totalEmissao = emissaoPorPessoa * pessoas * distancia; // em gramas
    const totalEmissaoKg = totalEmissao / 1000; // Convertendo para kg

    // Exibe o resultado
    document.getElementById("resultado").innerText =
      `Transporte: ${transporte}\nPessoas: ${pessoas}\nEstado: ${estado}\nCidade: ${cidade}\nDestino: ${destino}\n` +
      `Emissão total de CO2 para a viagem: ${totalEmissaoKg.toFixed(2)} kg`;
  }

  // Chama a função de cálculo ao carregar a página
  calcularCompensacao();
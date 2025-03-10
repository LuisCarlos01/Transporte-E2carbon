document.getElementById("voltar").addEventListener("click", function () {
  alert("Voltando...");
});

document.getElementById("transporte").addEventListener("change", function () {
  const transporteSelecionado = this.value;
  const pessoasSelect = document.getElementById("pessoas");
  const pessoasInput = document.getElementById("pessoas-input");

  if (transporteSelecionado === "carro") {
    pessoasSelect.disabled = false; // Habilita o select
    pessoasInput.style.display = "none"; // Esconde o input
    pessoasSelect.value = ""; // Reseta a seleção
  } else if (
    transporteSelecionado === "onibus" ||
    transporteSelecionado === "van"
  ) {
    pessoasSelect.disabled = true; // Desabilita o select
    pessoasInput.style.display = "none"; // Esconde o input
    pessoasSelect.value = ""; // Reseta a seleção
  } else {
    pessoasSelect.disabled = true; // Desabilita o select
    pessoasInput.style.display = "none"; // Esconde o input
  }
});

document.getElementById("pessoas").addEventListener("change", function () {
  const pessoasSelecionadas = parseInt(this.value);
  if (pessoasSelecionadas > 5) {
    alert("Você não pode selecionar mais de 5 pessoas para carro.");
    this.value = ""; // Reseta a seleção
  }
});

document.getElementById("avancar").addEventListener("click", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  const cidadeSelecionada = document.getElementById("cidade").value;
  const transporteSelecionado = document.getElementById("transporte").value;
  let pessoasSelecionadas; // Declare a variável aqui

  if (transporteSelecionado === "carro") {
    pessoasSelecionadas = document.getElementById("pessoas").value;
  } else {
    pessoasSelecionadas = 1; // Para ônibus e van, assume-se que pelo menos o motorista está presente
  }

  // Verifica se o valor de pessoasSelecionadas é um número
  if (
    transporteSelecionado === "carro" &&
    (isNaN(pessoasSelecionadas) || pessoasSelecionadas < 1)
  ) {
    alert("Por favor, insira um número de pessoas maior que 0.");
    return; // Interrompe a execução se a condição não for atendida
  }

  if (transporteSelecionado === "carro") {
    if (pessoasSelecionadas < 1 || pessoasSelecionadas > 5) {
      alert(
        "Por favor, selecione um número de pessoas entre 1 e 5 (contando com o motorista)."
      );
      return; // Interrompe a execução se a condição não for atendida
    }
  }

  if (cidadeSelecionada) {
    // Redireciona para a página de cálculo de compensação de carbono
    const destino = "sao_thome_das_letras"; // Destino fixo
    window.location.href = `calculo_compensacao.html?transporte=${transporteSelecionado}&pessoas=${pessoasSelecionadas}&estado=${
      document.getElementById("estado").value
    }&cidade=${cidadeSelecionada}&destino=${destino}`;
  } else {
    alert("Por favor, selecione uma cidade.");
  }
});

document.getElementById("estado").addEventListener("change", function () {
  const estadoSelecionado = this.value;
  const cidadeSelect = document.getElementById("cidade");
  const cidadeInput = document.getElementById("cidade-input");

  // Limpa as opções de cidade
  cidadeSelect.innerHTML = '<option value="">Cidades</option>';
  cidadeSelect.innerHTML += '<option value="outra">Outra</option>'; // Adiciona a opção "Outra"

  // Define as cidades com base no estado selecionado
  let cidades = [];
  if (estadoSelecionado === "sp") {
    cidades = [
      "São Paulo",
      "Campinas",
      "Santos",
      "São Bernardo do Campo",
      "São José dos Campos",
    ];
  } else if (estadoSelecionado === "rj") {
    cidades = [
      "Rio de Janeiro",
      "Niterói",
      "Petrópolis",
      "Cabo Frio",
      "Volta Redonda",
    ];
  } else if (estadoSelecionado === "mg") {
    cidades = [
      "Belo Horizonte",
      "Uberlândia",
      "Contagem",
      "Juiz de Fora",
      "Betim",
    ];
  } else if (estadoSelecionado === "ba") {
    cidades = [
      "Salvador",
      "Feira de Santana",
      "Vitória da Conquista",
      "Camaçari",
      "Ilhéus",
    ];
  } else if (estadoSelecionado === "al") {
    cidades = ["Maceió", "Arapiraca", "Palmeira dos Índios"];
  } else if (estadoSelecionado === "ce") {
    cidades = ["Fortaleza", "Caucaia", "Juazeiro do Norte"];
  } else if (estadoSelecionado === "df") {
    cidades = ["Brasília", "Gama", "Taguatinga"];
  } else if (estadoSelecionado === "es") {
    cidades = ["Vitória", "Vila Velha", "Serra"];
  } else if (estadoSelecionado === "go") {
    cidades = ["Goiânia", "Aparecida de Goiânia", "Anápolis"];
  } else if (estadoSelecionado === "ma") {
    cidades = ["São Luís", "Imperatriz", "Caxias"];
  } else if (estadoSelecionado === "mt") {
    cidades = ["Cuiabá", "Várzea Grande", "Rondonópolis"];
  } else if (estadoSelecionado === "ms") {
    cidades = ["Campo Grande", "Dourados", "Três Lagoas"];
  } else if (estadoSelecionado === "pb") {
    cidades = ["João Pessoa", "Campina Grande", "Patos"];
  } else if (estadoSelecionado === "pr") {
    cidades = ["Curitiba", "Londrina", "Maringá"];
  } else if (estadoSelecionado === "pe") {
    cidades = ["Recife", "Olinda", "Jaboatão dos Guararapes"];
  } else if (estadoSelecionado === "pi") {
    cidades = ["Teresina", "Parnaíba", "Picos"];
  } else if (estadoSelecionado === "rn") {
    cidades = ["Natal", "Mossoró", "Caicó"];
  } else if (estadoSelecionado === "rs") {
    cidades = [
      "Porto Alegre",
      "Caxias do Sul",
      "Pelotas",
      "Santa Maria",
      "Gravataí",
    ]; // Adicionei mais cidades
  } else if (estadoSelecionado === "ro") {
    cidades = ["Porto Velho", "Ji-Paraná", "Ariquemes"];
  } else if (estadoSelecionado === "rr") {
    cidades = ["Boa Vista", "Rorainópolis", "Caracaraí"];
  } else if (estadoSelecionado === "sc") {
    cidades = ["Florianópolis", "Joinville", "Blumenau"];
  } else if (estadoSelecionado === "se") {
    cidades = ["Aracaju", "Lagarto", "Itabaiana"];
  } else if (estadoSelecionado === "to") {
    cidades = ["Palmas", "Araguaína", "Gurupi"];
  }

  // Adiciona as cidades ao select
  cidades.forEach((cidade) => {
    const option = document.createElement("option");
    option.value = cidade.toLowerCase().replace(/\s+/g, "_"); // Formata o valor
    option.textContent = cidade;
    cidadeSelect.appendChild(option);
  });

  // Mostra o campo de entrada se "Outra" for selecionada
  cidadeSelect.addEventListener("change", function () {
    if (this.value === "outra") {
      cidadeInput.style.display = "block"; // Mostra o campo de entrada
      cidadeInput.value = ""; // Limpa o campo de entrada
    } else {
      cidadeInput.style.display = "none"; // Esconde o campo de entrada
    }
  });
});

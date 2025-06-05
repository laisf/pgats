

function geradorDeTagsDeIdentificacao (nome) {

  console.log("-----------------------")
  console.log(`Nome do dog: ${nome}`);
  console.log("-----------------------")
  return nome.toUpperCase()
 
}

function verificarSePodeSerAdotado(idade, porte) {

  console.log("-----------------------")
  console.log(`Idade do dog: ${idade}`);
  console.log(`Porte do dog: ${porte}`);
  console.log("-----------------------")

  if (porte === 'P' && idade >= 0.2) {
    return true
  } else if (porte === 'M' && idade >= 1) {
    return true
  } else if (porte === 'G' && idade >= 2) {
    return true
  } else {
    return false
  }

  
}


function calcularConsumoDeRacao(nome, idade, peso) {
  const gramasPorDia = peso * 300;

  console.log("-----------------------")
  console.log(`Nome do dog: ${nome}`);
  console.log(`Idade do dog: ${idade}`);
  console.log(`Peso: ${peso}`);
  console.log(`Gramas por dia: ${gramasPorDia}`);
  console.log("---------------------------");

  return gramasPorDia
}

function decidirTipoDeAtividadePorPorte(porte) {
  let atividade;

  if (porte = "pequeno") {
      atividade = "brincar dentro de casa";
  } else if (porte = "médio") {
      atividade = "Caminhada no quarteirão";
  } else if (porte = "grande") {
      atividade = "Correr no parque";
  } else {
      atividade = "Não há atividade";
  }

  console.log("-----------------------")
  console.log(`Porte do dog: ${porte}`);
  console.log(`Atividade sugerida: ${atividade}`);
  console.log("-----------------------")

  return atividade
}

async function buscarDadoAsync() {
  return 'Pipoca'
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}
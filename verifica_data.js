const verificaData =() => {
  const hoje = new Date();
  let dia = hoje.getDay(); // Isso irá atribuir a "dia" o número correspondente ao dia da semana (de 0 a 6)
  return dia
};

module.exports = verificaData;
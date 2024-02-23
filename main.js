const enviarEmail = require("./enviar_email");
const verificaData = require("./verifica_data");
const corpoEmail = require("./corpo_email")
const error = require("./resposta")

const dia = verificaData();
if (dia === 1) {
  error(enviarEmail(corpoEmail()));
}

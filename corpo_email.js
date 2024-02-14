const listaEmails = [
  { email: "EdnaldoPereira@gmail.com", flag: true },
  { email: "AzulCaneta@gmail.com", flag: false },
  { email: "LisaMona@gmail.com", flag: true },
  { email: "PirikitosemFreio@gmail.com", flag: false },
  { email: "DuduCarros@gmail.com", flag: true },
  { email: "ArmasdeAna@gmail.com", flag: false },
  { email: "felipeBatata@gmail.com", flag: true },
  { email: "CachorroCaramelo3@gmail.com", flag: false },
  { email: "DaddarioAlexandra@.gmail.com", flag: true },
  { email: "DicaprioLeonard@gmail.com", flag: false },
];

const corpoEmail = () => {
  const addressee = [];
  const subject =
    "Descubra os Novos Veículos Mais Vendidos e Condições Exclusivas! 🚗✨";
  const body =
    "Olá,\n\nEsperamos que esteja tendo uma excelente semana! Estamos animados em compartilhar com você as últimas novidades em nossa concessionária de automóveis. Não poderíamos deixar de fora os modelos mais cobiçados e as oportunidades imperdíveis para adquirir o carro dos seus sonhos.\n\nNovidades Reluzentes: Explore nossa linha de veículos recém-chegados, cada um projetado para elevar sua experiência de condução a novos patamares de conforto, tecnologia e estilo. De sedans elegantes a SUVs versáteis, temos uma opção para cada estilo de vida.\n\nTop de Vendas: Descubra os queridinhos de nossos clientes! Nossos especialistas selecionaram cuidadosamente os veículos mais populares, garantindo desempenho excepcional, confiabilidade e inovação. Não se surpreenda se encontrar o carro perfeito que se encaixa perfeitamente em suas necessidades.\n\nCondições Especiais de Aquisição: Para tornar sua jornada até o volante ainda mais emocionante, estamos oferecendo condições exclusivas de financiamento e descontos especiais para nossos clientes fiéis. Não perca esta oportunidade de dirigir para casa com um negócio incrível!\n\nEntre em contato conosco hoje mesmo para agendar um test drive ou para obter mais informações sobre nossas ofertas e serviços personalizados. Estamos aqui para tornar sua experiência de compra de carro a mais agradável possível.\n\nAtenciosamente,\nLucas Pena\nGestor de Vendas\nCarShop Unlimited";

  for (const alerta of listaEmails) {
    if (alerta.flag === true) {
      addressee.push(alerta.email);
    }
  }

  return {
    addressee: addressee,
    subject: subject,
    body: body,
  };
};

module.exports = corpoEmail;

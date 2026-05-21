export const CALENDLY_URL = 'https://calendly.com/queirosenterprise/30min';

/** CTA principal — tom leve, foco em viabilidade (não visita presencial) */
export const CTA_PRIMARY = 'Agendar Chamada de Viabilidade';

/** Variante curta para nav mobile e barra fixa */
export const CTA_SHORT = 'Chamada de Viabilidade';

export const TRUST_POINTS = [
  { icon: '✓', text: 'Chamada gratuita' },
  { icon: '✓', text: 'Sem compromisso' },
  { icon: '✓', text: 'Resposta em 24h' },
] as const;

export const VIABILITY_STEPS = [
  { step: '1', title: 'Deixas o contacto', body: 'Nome e telemóvel — menos de 30 segundos.' },
  { step: '2', title: 'Agendamos a chamada', body: 'Em menos de 24 horas confirmamos o horário que te convém.' },
  { step: '3', title: 'Avaliamos a viabilidade', body: 'Em cerca de 30 minutos esclarecemos preço, financiamento e próximos passos — sem pressão.' },
] as const;

export const VIABILITY_FAQ = [
  {
    q: 'A chamada é gratuita e sem compromisso?',
    a: 'Sim. É uma conversa para perceber se o projeto encaixa contigo — preço, prazos e financiamento. Não há obrigação de avançar.',
  },
  {
    q: 'Preciso de ter o crédito aprovado antes da chamada?',
    a: 'Não. Na chamada explicamos o modelo de compra em planta e como o banco financia a obra. A simulação fazemos contigo.',
  },
  {
    q: 'Quanto tempo demoram a contactar-me?',
    a: 'Normalmente no mesmo dia útil ou, no máximo, em menos de 24 horas após o pedido.',
  },
  {
    q: 'O que tratamos na chamada de viabilidade?',
    a: 'Preço, entrada, prestação estimada, prazos de obra, personalização e, se fizer sentido, agendamos visita ao lote.',
  },
  {
    q: 'Posso falar com o meu parceiro ou família na chamada?',
    a: 'Claro. Podes estar os dois na linha ou marcar um horário em que estejam disponíveis.',
  },
  {
    q: 'E se o banco não aprovar o financiamento?',
    a: 'Tens cláusula de proteção: se a reprovação for por motivos alheios a ti, o sinal é devolvido na íntegra.',
  },
] as const;

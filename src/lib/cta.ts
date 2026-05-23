import { PROJECT } from '@/lib/project';

export const CALENDLY_URL = 'https://calendly.com/queirosenterprise/30min';

/** Objectivo da LP: vender a chamada com o gestor — o gestor conduz a venda */
export const CTA_PRIMARY = 'Agendar Chamada com o Gestor';

export const CTA_SHORT = 'Falar com o Gestor';

export const TRUST_POINTS = [
  { icon: '◆', text: PROJECT.managerTitle },
  { icon: '◆', text: `${PROJECT.callDuration} em média` },
  { icon: '◆', text: 'Resposta em 24h' },
] as const;

export const VIABILITY_STEPS = [
  {
    step: '1',
    title: 'Deixa o contacto',
    body: 'Indica nome e telemóvel. A equipa agenda a chamada com o gestor.',
  },
  {
    step: '2',
    title: 'Fala com o gestor',
    body: `Em média ${PROJECT.callDuration}: projeto, financiamento, personalização e avaliação bancária (${PROJECT.priceAppraisal}€).`,
  },
  {
    step: '3',
    title: 'Gestor acompanha',
    body: 'Se fizer sentido, visita ao lote, reserva e obra — sempre com o mesmo gestor.',
  },
] as const;

export const VIABILITY_FAQ = [
  {
    q: 'O que acontece na chamada?',
    a: `Conversa com o ${PROJECT.managerTitle} (~${PROJECT.callDuration.replace('~', '')} em média): moradia, preço (${PROJECT.price}€), avaliação bancária (${PROJECT.priceAppraisal}€), financiamento e personalização. Sem compromisso.`,
  },
  {
    q: 'Quantas unidades restam?',
    a: `${PROJECT.unitsAvailable} unidades disponíveis — ${PROJECT.unitsReserved} já foi reservada (de ${PROJECT.unitsTotal} no empreendimento).`,
  },
  {
    q: 'O que posso personalizar?',
    a: 'Todas as áreas e acabamentos, com o gestor a orientar as escolhas enquanto a obra está em curso.',
  },
  {
    q: 'Porque comprar em planta?',
    a: 'Apoio bancário à obra, benefícios fiscais e preço fechado com personalização total.',
  },
  {
    q: 'Preciso de crédito aprovado antes?',
    a: 'Não. O gestor esclarece financiamento na chamada.',
  },
  {
    q: 'E se o banco recusar o crédito?',
    a: 'Proteção contratual: sinal devolvido se a recusa for por motivos alheios ao comprador.',
  },
] as const;

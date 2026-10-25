const telefone = '5519993102020';

export const whatsapp = (texto: string) =>
  `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(texto)}`;

export const whatsappPadrao = whatsapp('Oi. Gostaria de saber mais sobre o trabalho de vocês');

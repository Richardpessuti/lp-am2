export const unidades = [
  {
    cidade: 'Hortolândia',
    rua: 'R. José Agostinho, 594',
    bairro: 'Jardim Santana',
    cep: '13184-527',
    endereco: 'R. José Agostinho, 594 - Jardim Santana, Hortolândia - SP, 13184-527',
  },
  {
    cidade: 'Paulínia',
    rua: 'R. Nações Unidas, 73',
    bairro: 'Vila Bressani',
    cep: '13140-508',
    endereco: 'R. Nações Unidas, 73 - Vila Bressani, Paulínia - SP, 13140-508',
  },
];

const q = (endereco: string) => encodeURIComponent(endereco);

export const googleMaps = (endereco: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${q(endereco)}`;
export const waze = (endereco: string) => `https://waze.com/ul?q=${q(endereco)}&navigate=yes`;
export const mapaEmbed = (endereco: string) =>
  `https://www.google.com/maps?q=${q(endereco)}&hl=pt-BR&output=embed`;

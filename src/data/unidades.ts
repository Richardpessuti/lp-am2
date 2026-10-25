// Horário por dia da semana, de domingo (0) a sábado (6).
// Use ['07:00', '17:00'], 'fechado' ou null enquanto não souber ([PREENCHER]).
export type Horario = [string, string] | 'fechado' | null;

// Vale para as duas unidades. Feriados: fechado.
const horarioPadrao: Horario[] = [
  'fechado',
  ['07:00', '17:00'],
  ['07:00', '17:00'],
  ['07:00', '17:00'],
  ['07:00', '17:00'],
  ['07:00', '16:00'],
  'fechado',
];

// Ordem de exibição: começa na segunda.
export const ordemDias = [1, 2, 3, 4, 5, 6, 0];

export const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export const unidades: {
  id: string;
  cidade: string;
  rua: string;
  bairro: string;
  cep: string;
  endereco: string;
  horarios: Horario[];
}[] = [
  {
    id: 'hortolandia',
    cidade: 'Hortolândia',
    rua: 'R. José Agostinho, 594',
    bairro: 'Jardim Santana',
    cep: '13184-527',
    endereco: 'R. José Agostinho, 594 - Jardim Santana, Hortolândia - SP, 13184-527',
    horarios: horarioPadrao,
  },
  {
    id: 'paulinia',
    cidade: 'Paulínia',
    rua: 'R. Nações Unidas, 73',
    bairro: 'Vila Bressani',
    cep: '13140-508',
    endereco: 'R. Nações Unidas, 73 - Vila Bressani, Paulínia - SP, 13140-508',
    horarios: horarioPadrao,
  },
];

const q = (endereco: string) => encodeURIComponent(endereco);

export const googleMaps = (endereco: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${q(endereco)}`;
export const waze = (endereco: string) => `https://waze.com/ul?q=${q(endereco)}&navigate=yes`;
export const mapaEmbed = (endereco: string) =>
  `https://www.google.com/maps?q=${q(endereco)}&hl=pt-BR&output=embed`;

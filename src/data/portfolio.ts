import { url } from '../lib/url';

// Conteúdo do portfólio (Canva "Portifólio completo - AM2" + PDF "AM2 - Versão Digital").
// foto: caminho em /public/img (WebP). Enquanto não houver, aparece [FOTO].
export type Item = { nome: string; descricao: string; foto?: string };
export type Categoria = { id: string; titulo: string; resumo: string; foto?: string; fotoAlt?: string; itens: Item[] };

export const categorias: Categoria[] = [
  {
    id: 'andaimes',
    titulo: 'Andaimes',
    resumo:
      'Estruturas provisórias para trabalhar no alto com segurança: pintura, gesso, fachada e acabamento em toda a extensão da obra.',
    itens: [
      {
        nome: 'Andaime tubular 1 m x 1,5 m', foto: url('/img/portfolio/andaime-tubular.webp'),
        descricao:
          'Ótimo custo-benefício para serviços no alto, da reforma simples à obra complexa. Plataforma ampla com piso metálico. Vem com escada de acesso, guarda-corpo e rodapé.',
      },
      {
        nome: 'Andaime fachadeiro', foto: url('/img/portfolio/andaime-fachadeiro.webp'),
        descricao:
          'Ideal para serviços em fachadas. Montagem fácil e plataforma ampla. Tubos de aço-carbono pintados por imersão, guarda-corpo exclusivo e piso metálico galvanizado.',
      },
      {
        nome: 'Painel metálico para andaime', foto: url('/img/portfolio/quadro.webp'),
        descricao:
          'Painéis de 1 m, 1,5 m e 2 m para montar andaime tubular ou fachadeiro. Marcas de mercado, conforme a NR-18.',
      },
      {
        nome: 'Trava diagonal', foto: url('/img/portfolio/diagonal.webp'),
        descricao:
          'Trava de 1 m ou 1,5 m em aço-carbono, conforme a NR-18. Dá mais firmeza à torre e segurança ao trabalhador. Fornecida na locação do andaime tubular.',
      },
      {
        nome: 'Piso metálico', foto: url('/img/portfolio/piso-metalico.webp'),
        descricao:
          'Plataforma de 1 m e 1,5 m, com travas e superfície antiderrapante, conforme a NR-18. Substitui as pranchas de madeira e faz a ligação entre torres.',
      },
      {
        nome: 'Guarda-corpo com rodapé', foto: url('/img/portfolio/guarda-corpo.webp'),
        descricao:
          'Obrigatório em andaime com circulação de pessoas. Evita quedas de pessoas e de objetos.',
      },
      {
        nome: 'Escada de acesso', foto: url('/img/portfolio/escada.webp'),
        descricao: 'Escada para subir com segurança entre os níveis do andaime fachadeiro.',
      },
      {
        nome: 'Rodapé', foto: url('/img/portfolio/rodape.webp'),
        descricao: 'Fecha a base da plataforma e evita a queda de ferramentas e materiais.',
      },
      {
        nome: 'Barras de ligação', foto: url('/img/portfolio/barras-ligacao.webp'),
        descricao: 'Ligam e travam os quadros do andaime fachadeiro, dando firmeza ao conjunto.',
      },
      {
        nome: 'Rodízio para andaime', foto: url('/img/portfolio/rodizio.webp'),
        descricao:
          'Roda com trava e pneu de borracha, conforme a NR-18. Para mover a torre com rapidez em corredores, galpões e serviços que mudam de posição.',
      },
      {
        nome: 'Sapata ajustável', foto: url('/img/portfolio/sapata-ajustavel.webp'),
        descricao:
          'Rosca para nivelar a torre e assentá-la melhor no solo. Ideal para terrenos desnivelados. Conforme a NR-18.',
      },
      {
        nome: 'Sapata fixa', foto: url('/img/portfolio/sapata-fixa.webp'),
        descricao:
          'Aumenta a área de apoio da torre e evita afundamento em solo arenoso e tombamento. Aço-carbono pintado por imersão.',
      },
    ],
  },
  {
    id: 'escoras',
    titulo: 'Escoras metálicas',
    foto: url('/img/portfolio/obra-andaime.webp'),
    fotoAlt: 'Escoramento metálico montado ao longo de uma obra',
    resumo:
      'Escoramento provisório de lajes e vigas, inclusive durante a cura do concreto. Regulagem grossa e fina, montagem rápida e mais carga que a madeira, sem gerar descarte.',
    itens: [
      {
        nome: 'Escoras de 2,20 m a 4,50 m', foto: url('/img/portfolio/escoras.webp'),
        descricao:
          'Tubos de aço com ajuste de altura por pino e regulagem final por copo roscado com alças. Rosca trapezoidal usinada em aço.',
      },
      {
        nome: 'Escoramento com torre', foto: url('/img/portfolio/escoramento-torre.webp'),
        descricao:
          'Torres de painéis e diagonais para obras pesadas: viadutos, pontes e prédios com pé-direito duplo.',
      },
      {
        nome: 'Viga metálica de escoramento de lajes', foto: url('/img/portfolio/case-grdi-1.webp'),
        descricao:
          'Chapa de aço galvanizada ou pintada, de alta capacidade de carga. Dispensa caibros, barrotes e contrabarrotes de madeira.',
      },
      {
        nome: 'Viga metálica de travamento de pilar', foto: url('/img/portfolio/case-hotel-class.webp'),
        descricao:
          'Cintas metálicas, barras de ancoragem e presilhas para alinhar pilares e vigas com menos madeira.',
      },
      {
        nome: 'Forcado misto fixo', foto: url('/img/portfolio/forcado.webp'),
        descricao:
          'Apoia vigas no escoramento. Montado no topo da escora fixa ou da torre regulável. Serve para uma viga ou para unir duas.',
      },
      {
        nome: 'Forcado misto regulável', foto: url('/img/portfolio/forcado.webp'),
        descricao:
          'Apoia vigas no escoramento, com regulagem. Montado no topo da escora ou da torre. Serve para uma viga ou para unir duas.',
      },
      {
        nome: 'Forcado simples fixo', foto: url('/img/portfolio/forcado.webp'),
        descricao: 'Montado no topo da escora para apoiar as vigas de madeira da laje. Mais estabilidade para a obra.',
      },
      {
        nome: 'Forcado duplo fixo', foto: url('/img/portfolio/forcado.webp'),
        descricao: 'Une as vigas metálicas no topo da escora, na concretagem de lajes e colunas.',
      },
      {
        nome: 'Cruzeta', foto: url('/img/portfolio/escoras.webp'),
        descricao:
          'Montada no tubo superior da escora (até 63 mm) para escorar painéis laterais e fundo das fôrmas de vigas. Encaixe que não se solta no transporte.',
      },
      {
        nome: 'Tripé', foto: url('/img/portfolio/tripe.webp'),
        descricao:
          'Mantém a escora firme na vertical e facilita a montagem das vigas. Fixação rápida por cunha. Para tubos de 40 a 65 mm.',
      },
      {
        nome: 'Presilha de viga (cachorrinho)', foto: url('/img/portfolio/case-residencia-1.webp'),
        descricao:
          'Usada com a barra de ancoragem para fechar e travar as fôrmas de viga com mais segurança.',
      },
      {
        nome: 'Barra de ancoragem com flange (até 1 m)', foto: url('/img/portfolio/obra-andaime.webp'),
        descricao:
          'Também chamada de agulha ou tirante. Trava fôrmas de pilares, vigas e muros na concretagem, sem pregos nem sarrafos.',
      },
      {
        nome: 'Aprumador de pilar', foto: url('/img/portfolio/case-grdi-2.webp'),
        descricao:
          'Deixa painéis e fôrmas no prumo em muros, paredes e colunas. Regulagem por rosca de 1 1/4" para ajuste rápido e preciso.',
      },
    ],
  },
  {
    id: 'outros',
    titulo: 'Outros equipamentos',
    resumo: 'Equipamentos para deixar a obra mais rápida, eficiente e segura, de pequeno a grande porte.',
    itens: [
      {
        nome: 'Betoneiras', foto: url('/img/portfolio/betoneira.webp'),
        descricao: 'Mistura massa e concreto em pequenas e grandes quantidades, para qualquer obra.',
      },
      {
        nome: 'Vibradores de concreto', foto: url('/img/portfolio/vibrador.webp'),
        descricao:
          'Deixam a massa homogênea e tiram o ar: concreto mais duro e resistente em colunas, vigas, sapatas, pisos e lajes.',
      },
      {
        nome: 'Geradores', foto: url('/img/portfolio/gerador.webp'),
        descricao: 'Energia 110 V ou 220 V para equipamentos em locais sem rede elétrica.',
      },
      {
        nome: 'Rompedores', foto: url('/img/portfolio/rompedor.webp'),
        descricao: 'Para demolição e quebra de concreto e pedra, com rapidez e segurança.',
      },
      {
        nome: 'Furadeiras e marteletes', foto: url('/img/portfolio/martelete.webp'),
        descricao: 'Ferramentas elétricas para furos em concreto e pedra. Obra mais rápida e segura.',
      },
      {
        nome: 'Compactadores e placas vibratórias', foto: url('/img/portfolio/placa-vibratoria.webp'),
        descricao: 'Compactam solo e cascalho para uma base firme em alicerces, fundações e outras estruturas.',
      },
      {
        nome: 'Cortadoras de piso', foto: url('/img/portfolio/cortadora-piso.webp'),
        descricao: 'Serra circular à bateria, com mais potência, velocidade e vida útil no corte.',
      },
      {
        nome: 'Containers', foto: url('/img/portfolio/container.webp'),
        descricao: 'Caixa de aço ou alumínio para guardar e transportar cargas grandes e pesadas.',
      },
    ],
  },
];

export const clientes = [
  { nome: 'BRZ Empreendimentos', logo: 'brz' },
  { nome: 'Barros Pimentel', logo: 'barros-pimentel' },
  { nome: 'Arcon Engenharia', logo: 'arcon' },
  { nome: 'Seiji Engenharia', logo: 'seiji' },
  { nome: 'Cataguá Construtora', logo: 'catagua' },
  { nome: 'Carbinatto Empreendimentos', logo: 'carbinatto' },
  { nome: 'Congesa', logo: 'congesa' },
  { nome: 'Eco Vila Incorporadora', logo: 'eco-vila' },
  { nome: 'GRDI Construtora', logo: 'grdi' },
  { nome: 'Longitude Incorporadora', logo: 'longitude' },
  { nome: 'Luxor', logo: 'luxor' },
  { nome: 'Sega Construtora', logo: 'sega' },
].map((c) => ({ ...c, logo: url(`/img/clientes/${c.logo}.webp`) }));

export const cases = [
  {
    cliente: 'ABC&DAGAMA',
    titulo: 'Hotel Class',
    local: 'Americana/SP',
    texto:
      'Projeto com mais de 650 m². Obra diversificada: do travamento de pilares e vigas ao escoramento de lajes, cada etapa planejada em detalhe.',
    fotos: [{ src: url('/img/portfolio/case-hotel-class.webp'), alt: 'Obra do Hotel Class com estrutura em andamento', w: 990, h: 742 }],
  },
  {
    cliente: 'Residência',
    titulo: 'Willian & Ericka',
    local: '',
    texto:
      'Sobrado de dois pavimentos com pé-direito duplo de quase 7 metros. Após várias reuniões com o proprietário, combinamos andaime fachadeiro e escoramento para sustentar as vigas.',
    fotos: [
      { src: url('/img/portfolio/case-residencia-1.webp'), alt: 'Escoramento de vigas na residência Willian & Ericka', w: 414, h: 552 },
      { src: url('/img/portfolio/case-residencia-2.webp'), alt: 'Andaime fachadeiro na fachada da residência', w: 412, h: 548 },
    ],
  },
  {
    cliente: 'GRDI Construtora e Engenharia',
    titulo: 'Sobrado em Alphaville Dom Pedro',
    local: '',
    texto:
      'Sobrado de dois andares e 225 m² de construção. 6.700 kg de material, com cada etapa planejada da fundação ao acabamento.',
    fotos: [
      { src: url('/img/portfolio/case-grdi-projeto.webp'), alt: 'Projeto do sobrado da GRDI em Alphaville Dom Pedro', w: 996, h: 560 },
      { src: url('/img/portfolio/case-grdi-1.webp'), alt: 'Escoramento interno no sobrado da GRDI', w: 566, h: 754 },
      { src: url('/img/portfolio/case-grdi-2.webp'), alt: 'Andaime na fachada do sobrado da GRDI', w: 588, h: 440 },
    ],
  },
];

export const diretores = [
  { nome: 'Adam Taveira', cargo: 'Diretor Comercial', foto: url('/img/portfolio/adam-taveira.webp') },
  { nome: 'Matheus Lima', cargo: 'Diretor de Engenharia', foto: url('/img/portfolio/matheus-lima.webp') },
];

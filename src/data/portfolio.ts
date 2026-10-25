// Conteúdo do portfólio (Canva "Portifólio completo - AM2").
// foto: caminho em /public/img (WebP). Enquanto não houver, aparece [FOTO].
export type Item = { nome: string; descricao: string; foto?: string };
export type Categoria = { id: string; titulo: string; resumo: string; foto?: string; itens: Item[] };

export const categorias: Categoria[] = [
  {
    id: 'andaimes',
    titulo: 'Andaimes',
    resumo:
      'Estruturas provisórias para trabalhar no alto com segurança: pintura, gesso, fachada e acabamento em toda a extensão da obra.',
    itens: [
      {
        nome: 'Andaime tubular 1 m x 1,5 m',
        descricao:
          'Ótimo custo-benefício para serviços no alto, da reforma simples à obra complexa. Plataforma ampla com piso metálico. Vem com escada de acesso, guarda-corpo e rodapé.',
      },
      {
        nome: 'Andaime fachadeiro',
        descricao:
          'Ideal para serviços em fachadas. Montagem fácil e plataforma ampla. Tubos de aço-carbono pintados por imersão, guarda-corpo exclusivo e piso metálico galvanizado.',
      },
      {
        nome: 'Painel metálico para andaime',
        descricao:
          'Painéis de 1 m, 1,5 m e 2 m para montar andaime tubular ou fachadeiro. Marcas de mercado, conforme a NR-18.',
      },
      {
        nome: 'Trava diagonal',
        descricao:
          'Trava de 1 m ou 1,5 m em aço-carbono, conforme a NR-18. Dá mais firmeza à torre e segurança ao trabalhador. Fornecida na locação do andaime tubular.',
      },
      {
        nome: 'Piso metálico',
        descricao:
          'Plataforma de 1 m e 1,5 m, com travas e superfície antiderrapante, conforme a NR-18. Substitui as pranchas de madeira e faz a ligação entre torres.',
      },
      {
        nome: 'Guarda-corpo com rodapé',
        descricao:
          'Obrigatório em andaime com circulação de pessoas. Evita quedas de pessoas e de objetos.',
      },
      {
        nome: 'Rodízio para andaime',
        descricao:
          'Roda com trava e pneu de borracha, conforme a NR-18. Para mover a torre com rapidez em corredores, galpões e serviços que mudam de posição.',
      },
      {
        nome: 'Sapata ajustável',
        descricao:
          'Rosca para nivelar a torre e assentá-la melhor no solo. Ideal para terrenos desnivelados. Conforme a NR-18.',
      },
      {
        nome: 'Sapata fixa',
        descricao:
          'Aumenta a área de apoio da torre e evita afundamento em solo arenoso e tombamento. Aço-carbono pintado por imersão.',
      },
    ],
  },
  {
    id: 'escoras',
    titulo: 'Escoras metálicas',
    resumo:
      'Escoramento provisório de lajes e vigas, inclusive durante a cura do concreto. Regulagem grossa e fina, montagem rápida e mais carga que a madeira, sem gerar descarte.',
    itens: [
      {
        nome: 'Escoras de 3,20 m e 4,50 m',
        descricao:
          'Tubos de aço com ajuste de altura por pino e regulagem final por copo roscado com alças. Rosca trapezoidal usinada em aço.',
      },
      {
        nome: 'Escoramento com torre',
        descricao:
          'Torres de painéis e diagonais para obras pesadas: viadutos, pontes e prédios com pé-direito duplo.',
      },
      {
        nome: 'Viga metálica de escoramento de lajes',
        descricao:
          'Chapa de aço galvanizada ou pintada, de alta capacidade de carga. Dispensa caibros, barrotes e contrabarrotes de madeira.',
      },
      {
        nome: 'Viga metálica de travamento de pilar',
        descricao:
          'Cintas metálicas, barras de ancoragem e presilhas para alinhar pilares e vigas com menos madeira.',
      },
      {
        nome: 'Forcado misto fixo',
        descricao:
          'Apoia vigas no escoramento. Montado no topo da escora fixa ou da torre regulável. Serve para uma viga ou para unir duas.',
      },
      {
        nome: 'Forcado misto regulável',
        descricao:
          'Apoia vigas no escoramento, com regulagem. Montado no topo da escora ou da torre. Serve para uma viga ou para unir duas.',
      },
      {
        nome: 'Forcado simples fixo',
        descricao: 'Montado no topo da escora para apoiar as vigas de madeira da laje. Mais estabilidade para a obra.',
      },
      {
        nome: 'Forcado duplo fixo',
        descricao: 'Une as vigas metálicas no topo da escora, na concretagem de lajes e colunas.',
      },
      {
        nome: 'Cruzeta',
        descricao:
          'Montada no tubo superior da escora (até 63 mm) para escorar painéis laterais e fundo das fôrmas de vigas. Encaixe que não se solta no transporte.',
      },
      {
        nome: 'Tripé',
        descricao:
          'Mantém a escora firme na vertical e facilita a montagem das vigas. Fixação rápida por cunha. Para tubos de 40 a 65 mm.',
      },
      {
        nome: 'Presilha de viga (cachorrinho)',
        descricao:
          'Usada com a barra de ancoragem para fechar e travar as fôrmas de viga com mais segurança.',
      },
      {
        nome: 'Barra de ancoragem com flange (até 1 m)',
        descricao:
          'Também chamada de agulha ou tirante. Trava fôrmas de pilares, vigas e muros na concretagem, sem pregos nem sarrafos.',
      },
      {
        nome: 'Aprumador de pilar',
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
        nome: 'Betoneiras',
        descricao: 'Mistura massa e concreto em pequenas e grandes quantidades, para qualquer obra.',
      },
      {
        nome: 'Vibradores de concreto',
        descricao:
          'Deixam a massa homogênea e tiram o ar: concreto mais duro e resistente em colunas, vigas, sapatas, pisos e lajes.',
      },
      {
        nome: 'Geradores',
        descricao: 'Energia 110 V ou 220 V para equipamentos em locais sem rede elétrica.',
      },
      {
        nome: 'Rompedores e ferramentas elétricas',
        descricao: 'Ferramentas variadas para furos em concreto e pedra, com rapidez e segurança.',
      },
      {
        nome: 'Compactadores e placas vibratórias',
        descricao: 'Compactam solo e cascalho para uma base firme em alicerces, fundações e outras estruturas.',
      },
      {
        nome: 'Cortadoras de piso',
        descricao: 'Serra circular à bateria, com mais potência, velocidade e vida útil no corte.',
      },
      {
        nome: 'Containers',
        descricao: 'Caixa de aço ou alumínio para guardar e transportar cargas grandes e pesadas.',
      },
    ],
  },
];

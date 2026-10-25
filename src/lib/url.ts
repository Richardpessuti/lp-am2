// Prefixa o caminho com o base do site (ex.: /lp-am2 no GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (caminho: string) => base + caminho;

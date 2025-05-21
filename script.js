function openModal(id) {
  document.getElementById(`modal-${id}`).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(`modal-${id}`).style.display = 'none';
}

function scrollToNota() {
  document.getElementById("nota-tecnica").scrollIntoView({
    behavior: "smooth"
  });
}

const termos = [
  {
    id: "01",
    titulo: "Acácia",
    descricao: "(Cassia fistula) - Conhecida como chuva-de-ouro. Tem belos cachos de flores douradas, copa arredondada e pode ser plantada em calçadas. Não tem raízes agressivas.",
    fonte: "https://pixabay.com/pt/photos/ac%c3%a1cia-%c3%a1rvore-flor-p%c3%a9talas-amarelo-4342471/",
    imagem: "imgs/acacia.jpg",
    video: "videos/acacia.mp4"
  },
  {
    id: "02",
    titulo: "Água",
    descricao: "Líquido incolor, sem cheiro, composto de hidrogênio e oxigênio (H2O). Porção líquida que cobre aproximadamente 70% da superfície do planeta Terra.",
    fonte: "https://pixabay.com/pt/photos/gota-de-água-derrubar-impacto-578897/",
    imagem: "imgs/agua.jpg",
    video: "videos/agua.mp4"
  },
  {
    id: "03",
    titulo: "Araucária",
    descricao: "(Araucaria angustifólia) - Árvore símbolo do estado do Paraná. Tem saborosos pinhões e servem de alimento para aves e diversos animais. Sugestão para o reflorestamento de toda a região sul.",
    fonte: "https://pixabay.com/pt/photos/arauc%c3%a1ria-pinheiro-paisagem-5892839/",
    imagem: "imgs/araucaria.jpg",
    video: "videos/araucaria.mp4"
  },
  {
    id: "04",
    titulo: "Arborização Urbana",
    descricao: "Plantação de árvores que pertence à cidade. Ajudam a controlar o calor do sol, absorvem ruídos, renovam o oxigênio do ar e contribuem para reduzir o efeito das enchentes, além de atrair pássaros.",
    fonte: "https://pixabay.com/pt/photos/paris-frança-arvores-outono-cair-90935/",
    imagem: "imgs/arborizacao.jpg",
    video: "videos/arborizacao.mp4"

  },
  {
    id: "05",
    titulo: "Aroeira Pimenteira",
    descricao: "(Schinus terebinthifolius) - Árvore de porte médio, folhas aromáticas e flores pequenas. Polinizada por abelhas e diversos outros insetos.",
    fonte: "https://www.ibflorestas.org.br/lista-de-especies-nativas/",
    imagem: "imgs/aroeira.png",
    video: "https://www.youtube.com/watch?v=example1"

  },
  {
    id: "06",
    titulo: "Aroeira Salsa",
    descricao: "(Schinus molle) - Árvore com altura entre 4 a 8 metros. Os galhos superiores tendem a cair. Indicada para ações de reflorestamento, preservação ambiental, arborização urbana ou plantios domésticos.",
    fonte: "Autoria própria (2022).",
    imagem: "imgs/aroeirasalsa.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "07",
    titulo: "Bananeira",
    descricao: "(Musa SP) - As folhas servem de embrulho para cozinhar ou assar e a fruta é a banana. Possibilidade da fabricação de vários produtos de artesanato.",
    fonte: "https://pixabay.com/pt/photos/bananas-bananeiras-404536/",
    imagem: "imgs/bananeira.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "08",
    titulo: "Biomas",
    descricao: "Grande comunidade de plantas e animais de uma determinada região, resultando em uma diversidade de flora e fauna própria. O Brasil possui seis biomas e o nosso maior bioma, a Amazônia.",
    fonte: "https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/18307-biomas-brasileiros.html",
    imagem: "imgs/biomas.jpg",
    video: "https://www.youtube.com/watch?v=example1"

  },
  {
    id: "09",
    titulo: "Coleta Seletiva",
    descricao: "Recolha dos resíduos orgânicos ou materiais recicláveis. As cores das lixeiras são: amarelo (metal em geral); azul (papel; papelão); branco (resíduos ambulatoriais e de serviços de saúde); Verde (vidro); vermelho (plástico); marrom (resíduos orgânicos).",
    fonte: "https://br.freepik.com/vetores-gratis/lixeiras-coloridas-com-simbolo-de-reciclagem-isolado_8700139.htm?query=coleta%20seletiva",
    imagem: "imgs/lixo.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "10",
    titulo: "Compostagem",
    descricao: "Reciclagem de lixo, através do qual a matéria orgânica (folhas, comida etc.) transforma-se e é usada como adubo agrícola. Pode ser utilizado na agricultura, em jardins e plantas, substituindo o uso de produtos químicos.",
    fonte: "https://pixabay.com/pt/photos/lixo-verde-composto-513609/",
    imagem: "imgs/compostagem.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "11",
    titulo: "Desmatamento",
    descricao: "Ação de desmatar. Provoca diversos problemas: alterações climáticas, exposição do solo à erosão e contribuição para intensificação do efeito estufa.",
    fonte: "https://pixabay.com/pt/photos/madeira-troncos-de-árvore-tronco-7011677/",
    imagem: "imgs/desmatamento.jpg",
    video: "https://www.youtube.com/watch?v=example1"

  },
  {
    id: "12",
    titulo: "Efeito Estufa",
    descricao: "Aumento da temperatura do ar. A alta concentração desses gases está relacionada às atividades industriais, o crescimento da produção agrícola, do desmatamento e do uso do transporte.",
    fonte: "https://br.freepik.com/vetores-gratis/o-efeito-estufa-com-a-terra-e-o-sol_16460726.htm#query=efeito%20estufa%20desenho&position=14&from_view=search",
    imagem: "imgs/efeitoestufa.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "13",
    titulo: "Flamboyant",
    descricao: "(Delonix regia) - Árvore frondosa. A vagem tem diversas sementes, por meio das quais processa-se a multiplicação da espécie. As raízes são bastante agressivas, tornando-a imprópria para calçadas, ruas ou próximo a tubulações de água, esgoto, paredes e até mesmo fiação elétrica.",
    fonte: "https://pixabay.com/pt/photos/extravagante-flamboyant-2430085/",
    imagem: "imgs/flamboyant.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "14",
    titulo: "Ficus",
    descricao: "(Ficus benjamina) - Árvore muito popular, utilizada em decoração. Suas folhas são pequenas, de coloração verde. Não deve ser cultivada em calçadas, pois possui raízes agressivas.",
    fonte: "https://www.jardineiro.net/plantas/ficus-ficus-benjamina.html",
    imagem: "imgs/ficus.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "15",
    titulo: "Figueira Chilena",
    descricao: "(Ficus auriculata) - Apresenta folhas grandes e textura fina. Suas folhas são vermelhas quando jovens e gradualmente tornam-se verdes. Os frutos pedunculados são como os figos comuns. Deve ser cultivada em solos férteis e profundos.",
    fonte: "https://www.jardineiro.net/plantas/figueira-de-jardim-ficus-auriculata.html",
    imagem: "imgs/ficusauriculata.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "16",
    titulo: "Hibisco",
    descricao: "(Hibiscus rosa-sinensis) - Utilizada na arborização urbana abaixo da rede elétrica devido ao pequeno porte, além de enfeitar jardins, praças e servir de cerca-viva. Também, é usado para lustrar sapatos e as flores secas são para fazer chá.",
    fonte: "https://pixabay.com/pt/photos/hibisco-rosa-flor-floral-jardim-2659151/",
    imagem: "imgs/hibisco.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "17",
    titulo: "Ipê-amarelo",
    descricao: "(Tabebuia chrysotricha) - As árvores são de grande porte. Gostam de calor e sol. Possuem copas abertas, arredondadas e elevadas. Produz anualmente grande quantidade de sementes por ano.",
    fonte: "https://pixabay.com/pt/photos/flores-amarelas-ipê-nature-3427214/",
    imagem: "imgs/ipeamarelo.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "18",
    titulo: "Ipê-branco",
    descricao: "(Tabebuia roseo-alba) - As flores são brancas. Sua característica torna-a uma planta interessante para recuperação de áreas degradadas. Multiplica-se por sementes postas a germinar.",
    fonte: "https://pixabay.com/pt/photos/flor-branca-branco-ipê-flores-1019237/",
    imagem: "imgs/ipebranco.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "19",
    titulo: "Ipê-rosa",
    descricao: "(Tabebuia rosea) - De crescimento bem rápido em regiões livres de geadas. A polinização é realizada por abelhas e pássaros. Sua madeira é usada para a construção externa, na produção de carvão e tem ainda em aplicações medicinais.",
    fonte: "https://pixabay.com/pt/photos/ipê-ipê-rosa-ipê-roxo-inverno-2580477/",
    imagem: "imgs/iperosa.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "20",
    titulo: "Ipê-roxo",
    descricao: "(Tabebuia impetiginosa) - O tronco, mais ou menos reto e cilíndrico. Atrativa para abelhas e pássaros. A espécie é muito utilizada em praças, jardins públicos e na arborização de ruas, avenidas, estradas e também, em recomposição de mata ciliar.",
    fonte: "https://pixabay.com/pt/photos/ipê-flores-natureza-árvore-6044096/",
    imagem: "imgs/iperoxo.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: "21",
    titulo: "Jaqueira",
    descricao: "(Artocarpus heterophyllus) - Árvore frutífera alcançando facilmente 30 metros de altura. O fruto, a jaca, com casca recoberta de saliências, podendo chegar a 40 quilos. Seus curiosos frutos brotam diretamente do tronco e sua utilização longe de caminhos, casas e estacionamento de automóveis, visto que a queda dos  pesados frutos pode provocar acidentes graves.",
    fonte: "https://pixabay.com/pt/photos/jaca-jaqueira-comida-%C3%A1rvore-fruta-2236851/",
    imagem: "imgs/jaqueira.jpg",
    video: "https://www.youtube.com/watch?v=example1"
  },
   {
  id: "22",
  titulo: "Ligustro",
  descricao: "(Ligustrum lucidum) - Árvore que chega a 10 m de altura. O tronco grosso, de casca escura, sustenta a copa densa, de forma arredondada. É usado na arborização de parques ou áreas amplas. É resistente a podas, rústica e cresce rápido.",
  fonte: "Autoria própria (2022)",
  imagem: "imgs/ligustro.png",
  video: "https://www.youtube.com/watch?v=example22"
},
{
  id: "23",
  titulo: "Lixo Orgânico",
  descricao: "Restos de alimentos, como cascas de frutas, restos de carne, legumes, vegetais, madeira e folhas de árvore. A melhor forma de reciclar o lixo orgânico é o processo de compostagem.",
  fonte: "https://br.freepik.com/fotos-gratis/restos-de-comida-em-uma-lixeira_11277827.htm",
  imagem: "imgs/resto.jpg",
  video: "https://www.youtube.com/watch?v=example23"
},
{
  id: "24",
  titulo: "Magnólia-amarela)",
  descricao: "(Magnolia champaca - Árvore conhecida em todo mundo pelo delicioso perfume de suas flores. De sua madeira são fabricados brinquedos, caixas, objetos de arte, móveis e utensílios, além de ser aproveitada na construção civil. Das flores é extraído um óleo essencial de rica fragrância, utilizado na indústria da perfumaria e são utilizadas em colares.",
  fonte: "https://pixabay.com/pt/photos/amarelo-magnolia-flor-florescer-3395440/",
  imagem: "imgs/magnolia.jpg",
  video: "https://www.youtube.com/watch?v=example24"
},
{
  id: "25",
  titulo: "Mangueira",
  descricao: "(Mangifera indica) - Árvore de copa densa que pode alcançar 30 metros de altura. O fruto, a manga, apresenta uma única semente, grande e fibrosa.",
  fonte: "https://pixabay.com/pt/photos/manga-verde-%c3%a1rvore-imaturo-fruta-1683002/",
  imagem: "imgs/mangueira.jpg",
  video: "https://www.youtube.com/watch?v=example25"
},
{
  id: "26",
  titulo: "Mata Ciliar",
  descricao: "Vegetação florestal que acompanha os rios, dificilmente ultrapassando 100 metros de largura em cada margem. Protege os rios e o solo, reduzindo o assoreamento e a força das águas que chegam a rios, lagos e represas, impedindo a entrada de poluentes para o meio aquático.",
  fonte: "https://mundoeducacao.uol.com.br/geografia/mata-ciliar.htm",
  imagem: "imgs/mataciliar.webp",
  video: "https://www.youtube.com/watch?v=example26"
},
{
  id: "27",
  titulo: "Murta",
  descricao: "(Murraya paniculata) - Um arbusto grande. Suas folhas são pinadas. Durante todo o ano produz flores de coloração branca. Adequada para cercas vivas e plantadas as mudas distanciadas em um metro umas das outras. Devido à facilidade de propagação pode tornar-se invasiva.",
  fonte: "https://www.jardineiro.net/plantas/murta-de-cheiro-murraya-paniculata.html",
  imagem: "imgs/murrayapaniculata.jpg",
  video: "https://www.youtube.com/watch?v=example27"
},
{
  id: "28",
  titulo: "Oiti",
  descricao: "(Licania tomentosa) - Árvore muito utilizada na arborização urbana. Sua copa é bem cheia, produzindo excelente sombra. O oiti é uma escolha frequente na arborização urbana.",
  fonte: "Autoria própria (2022)",
  imagem: "imgs/oiti.png",
  video: "https://www.youtube.com/watch?v=example28"
},
{
  id: "29",
  titulo: "Palmeira-imperial",
  descricao: "(Roystonea oleracea) - Alcança entre 30 e 40 metros de altura. Um símbolo da história do Brasil, a primeira palmeira desta espécie foi plantada pelo então príncipe regente Dom João VI, em 1809. Acompanha grandes construções, avenidas, parques, prédios públicos e residências de grande porte, principalmente em duplas, grupos ou fileiras.",
  fonte: "https://www.jardineiro.net/?s=Palmeira-Imperial+Roystonea+oleracea",
  imagem: "imgs/palmeiraimperial.jpg",
  video: "https://www.youtube.com/watch?v=example29"
},
{
  id: "30",
  titulo: "Pata de Vaca",
  descricao: "(Bauhinia variegata) - Árvore muito florífera. As folhas são redondas e devido ao seu típico aspecto de pisada de casco bovino, são responsáveis pelo nome curioso desta árvore. As flores são grandes e ainda muito atrativas para insetos polinizadores e aves silvestres. Por não apresentar raízes agressivas, ela é ideal para calçadas.",
  fonte: "https://www.jardineiro.net/plantas/pata-de-vaca-bauhinia-variegata.html",
  imagem: "imgs/patadevaca.jpg",
  video: "https://www.youtube.com/watch?v=example30"
},
{
  id: "31",
  titulo: "Pau-Brasil",
  descricao: "(Caesalpinia echinata) - A árvore que alcança entre dez e quinze metros de altura. Copa densa com folhas verdes brilhantes e flores perfumadas. A árvore ganhou importância para os portugueses por conta da sua madeira, que poderia ser utilizada na construção de objetos e na produção de corante utilizado para tingir tecidos.",
  fonte: "Autoria própria (2022)",
  imagem: "imgs/paubrasil.png",
  video: "https://www.youtube.com/watch?v=example31"
},
{
  id: "32",
  titulo: "Poluição",
  descricao: "Degradação do meio ambiente provocada pela ação do homem. Gera danos à nossa saúde, além de afetar animais, plantas e todos os seres vivos do ecossistema em questão. Os principais tipos de poluição são: atmosférica, hídrica, dos solos, visual e sonora.",
  fonte: "https://pixabay.com/pt/photos/fumaça-chaminé-poluição-fumar-258786/",
  imagem: "imgs/poluicao.jpg",
  video: "https://www.youtube.com/watch?v=example32"
},
{
  id: "33",
  titulo: "Quaresmeira",
  descricao: "(Tibouchina granulosa) - Árvore de beleza que encanta por sua exuberante floração. Ela é uma das principais árvores utilizadas na arborização urbana no Brasil, podendo ornamentar calçadas, avenidas, praças, parques e jardins em geral.",
  fonte: "https://pixabay.com/pt/photos/quaresmeira-rosa-flor-ornamental-2682098/",
  imagem: "imgs/quaresmeira.jpg",
  video: "https://www.youtube.com/watch?v=example33"
},
{
  id: "34",
  titulo: "Queimadas",
  descricao: "Destruição do mato pelo fogo. As principais causas estão relacionadas a casos simples como a limpeza mais rápida ou renovação da pastagem de determinadas áreas de agricultores, áreas para criação de gado ou outras culturas agrícolas, e até mesmo outras causas não controladas.",
  fonte: "https://pixabay.com/pt/photos/o-pântano-feio-reserva-natural-433688/",
  imagem: "imgs/queimadas.jpg",
  video: "https://www.youtube.com/watch?v=example34"
},
{
  id: "35",
  titulo: "Reciclagem",
  descricao: "Ação de reciclar, de reutilizar. Os materiais serão reaproveitados com técnicas de reciclagem. Importante para o Meio Ambiente e para as pessoas. Contínua coleta e processamento de resíduos que seriam jogados como lixo, mas que podem ser reaproveitados e transformados em novos produtos.",
  fonte: "https://br.freepik.com/vetores-gratis/conceito-de-reciclagem_5117867.htm",
  imagem: "imgs/reciclagem.jpg",
  video: "https://www.youtube.com/watch?v=example35"
},
{
  id: "36",
  titulo: "Resedá",
  descricao: "(Lagerstroemia indica) - Perfeita para as calçadas, é uma arvoreta que não possui raízes agressivas. A forma natural da planta é bonita, mas é frequente o uso de podas de formação para transformá-la em arbusto ou pequena árvore com copa redonda e compacta. Resistente à poluição urbana.",
  fonte: "https://www.jardineiro.net/plantas/reseda-lagerstroemia-indica.html",
  imagem: "imgs/reseda.jpg",
  video: "https://www.youtube.com/watch?v=example36"
},
{
  id: "37",
  titulo: "Sete Copas",
  descricao: "(Terminalia catappa) - Árvore que apresenta caule que cresce de 12 a 35 metros. Sua copa ampla e cheia. No seu manejo, há que se ter cuidado apenas com as podas que podem descaracterizar a copa. A árvore ainda produz madeira de boa qualidade, utilizada no fabrico de móveis, canoas e caixotes.",
  fonte: "https://www.jardineiro.net/plantas/chapeu-de-sol-terminalia-catappa.html",
  imagem: "imgs/setecopas.jpg",
  video: "https://www.youtube.com/watch?v=example37"
},
{
  id: "38",
  titulo: "Sibipuruna",
  descricao: "(Caesalpinia peltophoroides) - Árvore de rápido crescimento e florescimento. A copa é arredondada e a floração com numerosas flores amarelas. Não produz raízes agressivas e boa opção para arborização urbana.",
  fonte: "https://www.jardineiro.net/plantas/sibipiruna-caesalpinia-peltophoroides.html",
  imagem: "imgs/sibipuruna.jpg",
  video: "https://www.youtube.com/watch?v=example38"
},
{
  id: "39",
  titulo: "Sustentabilidade",
  descricao: "Relaciona com ações sociais (a sociedade e suas condições de vida, como educação, saúde, violência, lazer); ambientais (recursos naturais do planeta e a forma como são utilizados pela sociedade, comunidades ou empresas); econômicas (relacionado com a produção, crescimento, distribuição e consumo de bens e serviços).",
  fonte: "https://br.freepik.com/vetores-gratis/salve-o-conceito-de-planeta-com-pessoas-cuidando-da-terra_7824979.htm",
  imagem: "imgs/sustentabilidade.png",
  video: "https://www.youtube.com/watch?v=example39"
},
{
  id: "40",
  titulo: "Tipuana",
  descricao: "(Tipuana tipu) - Árvore florífera, de copa ampla e densa. Não convém utilizá-la na arborização de calçadas, sendo interessante seu plantio em amplos parques e praças, a uma distância segura de construções e pavimentações.",
  fonte: "https://www.jardineiro.net/plantas/tipuana-tipuana-tipu.html",
  imagem: "imgs/tipuana.jpg",
  video: "https://www.youtube.com/watch?v=example40"
}
];


const cardsContainer = document.getElementById('cards-container');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

// Criar os cards dinamicamente
termos.forEach(termo => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${termo.imagem}" alt="${termo.titulo}">
    <h3>${termo.titulo}</h3>
    <button class="btn" data-id="${termo.id}">Ver descrição</button>
  `;
  cardsContainer.appendChild(card);
});

// Abrir modal ao clicar no botão
cardsContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.getAttribute('data-id');
    openModal(id);
  }
});

// Função para abrir modal e preencher conteúdo
function openModal(id) {
  const termo = termos.find(t => t.id === id);
  modalContent.innerHTML = `
    <span class="close" id="modal-close">&times;</span>
    <h2>${termo.titulo}</h2>
    <video controls>
      <source src="${termo.video}" type="video/webm">
      Seu navegador não suporta vídeo HTML5.
    </video>
    <p>${termo.descricao}</p>
    <p><strong>Fonte:</strong> <a href="${termo.fonte}" target="_blank">${termo.fonte}</a></p>
  `;
  modal.style.display = "block";

  // Adiciona evento para fechar modal
  document.getElementById('modal-close').addEventListener('click', () => {
    modal.style.display = "none";
  });
}

// Fecha modal ao clicar fora do conteúdo
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function alternarTema() {
  document.body.classList.toggle('dark');
  localStorage.setItem('tema', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Aplica o tema salvo ao carregar
window.onload = () => {
  if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark');
  }
};

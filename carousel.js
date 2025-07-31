const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let cardWidth;
let cardsToShow = getCardsToShow();
let autoSlide;
const totalOriginalCards = 6;
const cardContents = [
  {
    title: "Java | Spring Framework",
    paragraphs: [
      `
        Minha principal linguagem de especialização,
        utilizada no desenvolvimento de <b>APIs REST</b> e
        automação de processos. Tenho experiência com
        arquiteturas complexas, como motores de
        orquestração de jobs e microsserviços robustos.
      `
    ]
  },
  {
    title: "PostgreSQL, Oracle, SQL Server",
    paragraphs: [
      `
        <b>PostgreSQL</b> é meu banco de dados de
        preferência, graças à sua robustez e
        escalabilidade. No entanto, também atuei com
        <b> Oracle</b> e <b>SQL Server</b> em ambientes corporativos
        diversos.
      `
    ]
  },
  {
    title: "JavaScript & TypeScript | React & React Native",
    paragraphs: [
      `
        Desde o início da carreira, utilizei JavaScript para
        entregar soluções ágeis. Com o tempo, adotei o
        TypeScript como padrão, especialmente em
        aplicações frontend com <b>React</b> e <b>React Native</b>.
      `,
      `
        Me especializei em frameworks robustos como
        <b> React</b> e <b>React Native</b>, com os quais entreguei
        soluções modernas e performáticas.
      `
    ]
  },
  {
    title: "HTML E CSS",
    paragraphs: [
      `
        Impossível citar minha experiência frontend, sem
        citar a base estrutural da tecnologia.
      `,
      `
        Atuo com HTML e CSS desde o primeiro dia de
        minha carreira e, considero que acumulei uma
        sólida experiência ao longo desse período.
      `
    ]
  },
  {
    title: "Infraestrutura",
    paragraphs: [
      `
        Nunca tive o foco em me especializar em
        infraestrutura, porém sempre tive o interesse na
        área.
      `,
      `
        Ao longo de minha jornada, acumulei experiência
        em configuração de servidores, automação de
        deploys com <b>Docker</b> e <b>Kubernetes</b>, além da
        utilização prática dos serviços cloud da <b>AWS</b>,
        como <b>EC2</b>, <b>S3</b> e <b>RDS</b> (dentre outros).
      `
    ]
  },
];

function getCardsToShow() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
}

function createCards() {
  carousel.innerHTML = "";
  const totalClones = cardsToShow;
  const fullList = [
    ...cardContents.slice(-totalClones),
    ...cardContents,
    ...cardContents.slice(0, totalClones),
  ];

  fullList.forEach((content) => {
    const card = document.createElement("div");
    card.className = "card";

    const titulo = document.createElement("h3");
    titulo.textContent = content.title;

    // Montar estrutura
    card.appendChild(titulo);

    content.paragraphs.forEach((paragraph) => {
      const paragrafo = document.createElement("p");
      paragrafo.innerHTML = paragraph;
      card.appendChild(paragrafo);
    });

    carousel.appendChild(card);
  });
}

function updateSlide(noTransition = false) {
  if (noTransition) carousel.style.transition = "none";
  else carousel.style.transition = "transform 0.5s ease";

  const card = carousel.querySelector(".card");
  cardWidth = card.offsetWidth + 20;
  carousel.style.transform = `translateX(-${
    (currentIndex + cardsToShow) * cardWidth
  }px)`;
}

function nextSlide() {
  currentIndex++;
  updateSlide();
  // resetAutoSlide();
}

function prevSlide() {
  currentIndex--;
  updateSlide();
  // resetAutoSlide();
}

carousel.addEventListener("transitionend", () => {
  if (currentIndex >= cardContents.length) {
    currentIndex = 0;
    updateSlide(true);
  } else if (currentIndex < 0) {
    currentIndex = cardContents.length - 1;
    updateSlide(true);
  }
});

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    nextSlide();
  }, 4000);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

window.addEventListener("resize", () => {
  cardsToShow = getCardsToShow();
  currentIndex = 0;
  createCards();
  updateSlide(true);
});

cardsToShow = getCardsToShow();
createCards();
updateSlide(true);
// resetAutoSlide();

const App = {
  data() {
    return {
      logo: "MOVEE",
      navLinks: [
        {
          text: "Цены",
          link: "www.price.com",
        },
        {
          text: "Автопарк",
          link: "#",
        },
        {
          text: "Отзывы",
          link: "#",
        },
        {
          text: "Контакты",
          link: "#",
        },
      ],
      number: "8(800)-080-12-13",
      headertitle01: "Квартирные",
      headertitle02: "переезды",
      headersubtitle: "По Москве и области",
      headerBodyBtn: "Заказать",
      headerBodyTableItems: [
        {
          img: "img/svg/truck.png",
          text01: "Более 800",
          text02: "переездов",
        },
        {
          img: "img/svg/trigger.png",
          text01: "Бережная",
          text02: "упаковка",
        },
        {
          img: "img/svg/money.png",
          text01: "Фиксированная",
          text02: "цена",
        },
      ],
      timelinetitle: "Как это происходит?",
      timelinetable: [
        {
          number: "01",
          title: "Оценка объема предстоящих работ",
          text: "Стоимость переезда зависит от количества комнат, вещей и мебели.",
        },
        {
          number: "02",
          title: "Упаковка вещей",
          text: "Упаковываем вещи в коробки, подписываем. Габаритное и деликатное,  упаковываем отдельно.",
        },
        {
          number: "03",
          title: "Погрузка и транспортировка вещей",
          text: "В нашем автопарке имеются машины, подходящие для мебели любых габаритов.",
        },
        {
          number: "04",
          title: "Распаковка и расстановка мебели",
          text: "Опытные грузчики быстро расставят мебель и уберут мусор от распаковки.",
        },
      ],
      pricesTitle: 'Цены',
      pricesSubitle: 'Фиксированная стоимость на переезд под ключ',
      pricesCards: [
          {
            title: '1-комнатная кв-ра',
            metaAuto: '1 фургон',
            metaWorker: '2 грузчика',
            metaTime: 'Переезд за 4 часа',
            price: '8 490₽',
          },
          {
            title: '2-комнатная кв-ра',
            metaAuto: '1 газель - 3 метра',
            metaWorker: '2 грузчика',
            metaTime: 'Переезд за 4 часа',
            price: '10 990₽',
          },
          {
            title: '3-комнатная кв-ра',
            metaAuto: '1 газель - 4 метра',
            metaWorker: '2 грузчика',
            metaTime: 'Переезд за 6 часов',
            price: '16 490₽',
          },
      ]
    };
  },
  methods: {
    fire() {
      console.log("fire!");
    },
    pricesBtn(e) {
      e.target.classList.add("active");
      setTimeout(() => {
        e.target.classList.remove("active");
      }, 1000);
    },
  },
};

Vue.createApp(App).mount("#page");

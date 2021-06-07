const app = Vue.createApp({
  data() {
    return {
      logo: "MOVEE",
      navLinks: [
        {
          text: "Цены",
          link: "#prices",
        },
        {
          text: "Автопарк",
          link: "#autopark",
        },
        {
          text: "Отзывы",
          link: "#reviews",
        },
        {
          text: "Контакты",
          link: "#contact",
        },
      ],
      sidebarLinks: [
        {
          text: "Главная",
          link: "#header",
        },
        {
          text: "Цены",
          link: "#prices",
        },
        {
          text: "Автопарк",
          link: "#autopark",
        },
        {
          text: "Отзывы",
          link: "#reviews",
        },
        {
          text: "Контакты",
          link: "#contact",
        },
      ],
      number: "8(800)-080-12-13",
      emailMain: "hello@movee.ru",
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
      autoparkSubtitle: "10 видов автомобилей от 800 кг до 10 тонн",
      autoparkCarouselNav: [
        {
          text: "Газели",
          id: "autopark-1",
        },
        {
          text: "Каблуки",
          id: "autopark-2",
        },
        {
          text: "Грузовики",
          id: "autopark-3",
        },
      ],
      autoparkCarouselSlide: [
        {
          title: "Газель 3 метра",
          list: [
            {
              listItem: "Ширина 2 м",
            },
            {
              listItem: "Высота 2 м",
            },
            {
              listItem: "Объем 16 м³",
            },
            {
              listItem: "Грузоподъемность 1,5 т",
            },
          ],
          btn: "",
          autoImg: "auto-01.png",
        },
        {
          title: "Каблук 2 метра",
          list: [
            {
              listItem: "Ширина 2 м",
            },
            {
              listItem: "Высота 2 м",
            },
            {
              listItem: "Объем 16 м³",
            },
            {
              listItem: "Грузоподъемность 1,5 т",
            },
          ],
          btn: "",
          autoImg: "auto-03.png",
        },
        {
          title: "Грузовик 4 метра",
          list: [
            {
              listItem: "Ширина 2 м",
            },
            {
              listItem: "Высота 2 м",
            },
            {
              listItem: "Объем 16 м³",
            },
            {
              listItem: "Грузоподъемность 1,5 т",
            },
          ],
          btn: "",
          autoImg: "auto-02.png",
        },
      ],
      autoparkCurrentSlide: 0,
      rewiesItems: [
        {
          title: "Ирина",
          id: "rewiesItem-1",
          data: "24.03.2019",
          comment:
            "Обращение к вам за помощью в переезде оставило только положительные впечатления. Хотелось отметить замечательного водителя газели Алексея. Были трудности с заездом во двор, он проявил себя как компетентный и профессиональный сотрудник, за что ему огромное спасибо! Могу на 100% порекомендовать компанию MOVEE и отметить, что цены фиксированы, что упрощает расчет.",
        },
        {
          title: "Светлана Васильевна ",
          id: "rewiesItem-2",
          comment:
            "Сегодня ( 13.09.2019 ) мы переехали. Остались очень довольны, несмотря на то, что к нам опоздали на 1,5 часа. Морально были к этому готовы ( в прошлый переезд в другой фирме тоже опоздали на час). Водитель заранее позвонил, предупредил, что задерживается. Когда заранее позвонил и предупредил! Могу на 100% порекомендовать компанию MOVEE и отметить, что цены фиксированы, что упрощает расчет.",
          data: "13.09.2019",
        },
        {
          title: "Ольга Петрова",
          id: "rewiesItem-3",
          data: "11.11.2019",
          comment:
            "Могу на 100% порекомендовать компанию MOVEE и отметить, что цены фиксированы, что упрощает расчет. Безо всяких заморочек, в отличии от их конкурентов. Упаковали все качественно и быстро. Все вещи приехали в сохранности. Особлая благодарность Александру за его уситчивость! Могу на 100% порекомендовать компанию MOVEE и отметить, что цены фиксированы, что упрощает расчет.",
        },
      ],
      pricesTitle: "Цены",
      pricesSubitle: "Фиксированная стоимость на переезд под ключ",
      pricesCards: [
        {
          title: "1-комнатная кв-ра",
          metaAuto: "1 фургон",
          metaWorker: "2 грузчика",
          metaTime: "Переезд за 4 часа",
          price: "8 490₽",
        },
        {
          title: "2-комнатная кв-ра",
          metaAuto: "1 газель - 3 метра",
          metaWorker: "2 грузчика",
          metaTime: "Переезд за 4 часа",
          price: "10 990₽",
        },
        {
          title: "3-комнатная кв-ра",
          metaAuto: "1 газель - 4 метра",
          metaWorker: "2 грузчика",
          metaTime: "Переезд за 6 часов",
          price: "16 490₽",
        },
      ],
      contactTitle: "Закажи  переезд прямо сейчас",
      contactSubtitle: "Мы перезвоним в течении 10 секунд",
      mapLinks: [
        {
          title: "Москва, Волгоградский пр-т, 38",
        },
        {
          title: "8 (800)-080-12-13",
        },
        {
          title: "hello@movee.ru",
        },
      ],
      footerLinkPolit: "Политика конфиденциальнности",
      footerLinkCopy: "Соглашение на обработку персональных данных",
      footerLinks: [
        {
          title: "Главная",
          link: "#",
        },
        {
          title: "Цена",
          link: "#",
        },
        {
          title: "Автопарк",
          link: "#",
        },
        {
          title: "Отзывы",
          link: "#",
        },
        {
          title: "Контакты",
          link: "#",
        },
      ],
    };
  },
  methods: {
    textSize(num, el, choise, index) {
      let cropElement = el, // выбор элементов
        size = num, // кол-во символов
        endCharacter = "...";

      if (cropElement.length > 1) {
        cropElement.forEach((el) => {
          let text = el.innerHTML;

          if (el.innerHTML.length > size) {
            text = text.substr(0, size);
            el.innerHTML = text + endCharacter;
          }
        });
      } else {
        let text = vm.rewiesItems[index].comment;
        text = text.substr(0, size);
        cropElement.innerHTML = text;

        if (choise == true) {
          cropElement.innerHTML = text;
        } else {
          cropElement.innerHTML = text + endCharacter;
        }
      }
    },
    reviewsbtn(e) {
      if (e.target.innerHTML === "Скрыть") {
        e.target.innerHTML = "Читать полностью";
        let elem = e.target
          .closest(".reviews__table-item")
          .querySelector(".reviews__table-item-text");
        let elemItemId = e.target.closest(".reviews__table-item").id;
        let index = vm.rewiesItems.findIndex((el) => el.id === elemItemId);
        vm.textSize(260, elem, false, index);
      } else {
        e.target.innerHTML = "Скрыть";
        let elem = e.target
          .closest(".reviews__table-item")
          .querySelector(".reviews__table-item-text");
        let elemItemId = e.target.closest(".reviews__table-item").id;
        let index = vm.rewiesItems.findIndex((el) => el.id === elemItemId);
        vm.textSize(900, elem, true, index);
      }
    },
    pricesBtn(e) {
      e.target.classList.add("active");
      setTimeout(() => {
        e.target.classList.remove("active");
      }, 1000);
    },
    reviewMain() {
      let cropEl = document.querySelectorAll(".reviews__table-item-text");
      vm.textSize(260, cropEl);
    },
    slidePrev() {
      if (this.autoparkCurrentSlide > 0) {
        this.autoparkCurrentSlide--;
      }
    },
    slideNext() {
      if (this.autoparkCurrentSlide >= this.autoparkCarouselSlide.length - 1) {
        this.autoparkCurrentSlide = 0;
      } else {
        this.autoparkCurrentSlide++;
      }
    },
    slideNav() {
      const carouselNavItem = document.querySelectorAll(
        ".autopark__carousel-nav-item"
      );

      for (let index = 0; index < carouselNavItem.length; index++) {
        const element = carouselNavItem[index];
        if (index === this.autoparkCurrentSlide) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      }
    },
    giveMeActiveClass(e) {
      e.target.classList.toggle('active');
    },
    sidebarActive() {
      document.getElementById('sidebar').classList.toggle('active');
    },
    bodyBlock() {
      document.querySelector('body').classList.toggle('body--hidden');
    }
  },
  mounted() {
    window.onload = () => {
      const carouselNavItem = document.querySelectorAll(
        ".autopark__carousel-nav-item"
      );

      for (let index = 0; index < carouselNavItem.length; index++) {
        const element = carouselNavItem[index];
        if (index === this.autoparkCurrentSlide) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      }
    };

    (function () {
      const reviewsTable = document.getElementById("reviewsTable");
      const reviewsTableItems = reviewsTable.querySelectorAll(
        ".reviews__table-item"
      );
      reviewsTableItems.forEach((item, index) => {
        if (document.documentElement.clientWidth <= 720) {
          if (index >= 1) {
            item.classList.add("hidden");
          }
        } else if (document.documentElement.clientWidth <= 1200) {
          if (index >= 2) {
            item.classList.add("hidden");
          }
        }
      });
    })();

    (function () {
      const pricesCards = document.getElementById("pricesCards");
      const pricesCardsItems = pricesCards.querySelectorAll(
        ".prices__cards-item"
      );
      pricesCardsItems.forEach((item, index) => {
        if (document.documentElement.clientWidth <= 720) {
          if (index >= 1) {
            item.classList.add("hidden");
          }
        } else if (document.documentElement.clientWidth <= 1200) {
          if (index >= 2) {
            item.classList.add("hidden");
          }
        }
      });
    })();

    const reviewsBtn = document.getElementById("reviewsBtn");
    reviewsBtn.addEventListener("click", (e) => {
      let reviewsItems = e.target
        .closest(".reviews")
        .querySelectorAll(".reviews__table-item.hidden");
      reviewsItems.forEach((item) => {
        item.classList.remove("hidden");
      });
      if (reviewsItems.length >= 1) {
        e.target.closest(".reviews__btn").remove();
      }
    });

    const pricesCardsBtn = document.getElementById("pricesCardsBtn");
    pricesCardsBtn.addEventListener("click", (e) => {
      let pricesCardsItems = e.target
        .closest(".prices")
        .querySelectorAll(".prices__cards-item.hidden");
      pricesCardsItems.forEach((item) => {
        item.classList.remove("hidden");
      });
      if (pricesCardsItems.length >= 1) {
        e.target.closest("#pricesCardsBtn").remove();
      }
    });

    (function () {
      const btnUp = document.getElementById("btnUp");
      let windowScreenY = window.innerHeight / 2;

      window.onscroll = function () {
        if (pageYOffset > windowScreenY) {
          btnUp.classList.remove("btn-up--hidden");
        } else {
          btnUp.classList.add("btn-up--hidden");
        }
      };

      btnUp.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    })();

    (function () {
      const smoothLinks = document.querySelectorAll('a[href^="#"]');
      for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener("click", function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute("href");
    
          document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    })();
  },
});

const vm = app.mount("#page");
vm.reviewMain();
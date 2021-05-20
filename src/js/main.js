const App = {
  data() {
      return {
          logo: 'MOVEE',
          navLinks: ['Цены', 'Автопарк', 'Отзывы', 'Контакты'],
          number: '8(800)-080-12-13',
      }
  },
  methods: {
      fire() {
           console.log('fire!');
      }
  }
}

Vue.createApp(App).mount('#page');
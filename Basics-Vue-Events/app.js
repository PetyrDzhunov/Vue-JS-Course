const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    incrementCounter(number) {
      this.counter += number;
    },
    decrementCounter(number) {
      this.counter -= number;
    },
    setName(e) {
      this.name = e.target.value;
    },
    submitForm() {
      console.log('submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount('#events');

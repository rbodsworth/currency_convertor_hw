import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: [],
      amount: '',
      rateOne: '',
      rateTwo: '',
      base: '',
    },

    mounted() {
        this.getRates();
      },
      
    computed: {
      currencyExchange: function () {
          const converted = (result * this.rateTwo).toFixed(2);
          return converted;
        }
      },
    },

    methods: {
      getRates: function () {
        const result = fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(data => {
          this.base = data.base, this.rates = data.rates;
        });
      },

    },

  });
});

<style scoped>
  label {
    margin: 5px 0px 5px 0px;
  }
</style>
<template>
  <div>
    <b-container class="mb-3 justify-content-center" style="max-width: 740px;">
      <h4 style="margin: 0px;">
       Ciao sono manuel e dani!
      </h4>
      <h4>{{this.baby}}</h4>
      <b-alert show>Default Alert</b-alert>
      <b-button variant="danger">Button</b-button>
      <b-alert show>Default Alert</b-alert>
      <b-button variant="danger">Button</b-button>
    </b-container>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      baby: "hello",
    }
  },
  methods: {
    getDisclaimerText() {
      const text = `
      This Website is providing the Service of calculating the IOL power using the Hoffer® QST 
      Formula and the Naeser/Savini Toric Calculator.
      We, the authors of these formulas and this website assume no responsibility for the clinical
      outcomes of any given patient. The choice of IOL power for any patient is the sole responsibility
      of the individual surgeon's clinical judgment.`;
      return text;
    },
  }
}
</script>

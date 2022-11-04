import './bootstrap';
import '../css/app.css'
import { createApp } from 'vue'

import CompoundInterestCalculator from './components/CompoundInterestCalculator.vue'
import CurrencySwitch from "./components/CurrencySwitch.vue";
import CurrencyRadioButton from "./components/CurrencyRadioButton.vue";
import InitialBalance from "./components/InitialBalance.vue";
import InterestRate from "./components/InterestRate.vue";
import YearsAndMonths from "./components/YearsAndMonths.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPercent } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CompoundFrequency from "./components/CompoundFrequency.vue";
import DepositsAndWithdrawals from "./components/DepositsAndWithdrawals.vue";

library.add(faPercent)
const app = createApp(CompoundInterestCalculator);

app.component('currency-switch', CurrencySwitch);
app.component('currency-radio-button', CurrencyRadioButton);
app.component('initial-balance', InitialBalance);
app.component('interest-rate', InterestRate);
app.component('years-and-months', YearsAndMonths);
app.component('compound-frequency', CompoundFrequency);
app.component('deposits-and-withdrawals', DepositsAndWithdrawals);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');

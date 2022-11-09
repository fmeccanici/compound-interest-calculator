import './bootstrap';
import '../css/app.css'
import { createApp } from 'vue'
import { createStore } from 'vuex'

import CompoundInterestCalculator from './components/CompoundInterestCalculator.vue'
import CurrencySwitch from "./components/CurrencySwitch.vue";
import CurrencyRadioButton from "./components/CurrencyRadioButton.vue";
import MoneyField from "./components/MoneyField.vue";
import InterestRate from "./components/InterestRate.vue";
import YearsAndMonths from "./components/YearsAndMonths.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPercent } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CompoundFrequency from "./components/CompoundFrequency.vue";
import DepositsAndWithdrawals from "./components/DepositsAndWithdrawals.vue";
import InputField from "./components/InputField.vue";
import InputFieldLeadingAddOn from "./components/InputFieldLeadingAddOn.vue";
import OutputFieldLeadingAddOn from "./components/OutputFieldLeadingAddOn.vue";

library.add(faPercent)

const app = createApp(CompoundInterestCalculator);

app.component('currency-switch', CurrencySwitch);
app.component('currency-radio-button', CurrencyRadioButton);
app.component('money-field', MoneyField);
app.component('interest-rate', InterestRate);
app.component('years-and-months', YearsAndMonths);
app.component('compound-frequency', CompoundFrequency);
app.component('deposits-and-withdrawals', DepositsAndWithdrawals);
app.component('input-field', InputField);
app.component('input-field-leading-add-on', InputFieldLeadingAddOn);
app.component('output-field-leading-add-on', OutputFieldLeadingAddOn);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');

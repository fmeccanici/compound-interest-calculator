import calculator from './calculator';

document.addEventListener('alpine:init', () => {
    Alpine.data('calculator', () => calculator);
});

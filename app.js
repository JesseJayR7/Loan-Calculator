const principal = document.getElementById('principal');
const loan = document.getElementById('loan');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const calculate = document.getElementById('calculate');

const monthly = document.getElementById('monthlyvalue');
const reppay = document.getElementById('total-repay');
const inter = document.getElementById('total-inter');

let monthlyi = (((parseInt(interest.value)/100)/parseInt(years.value))*parseInt(loan.value));
let monthlyp = (monthlyi + principal.value);


calculate.addEventListener('click', onClick);
function onClick(e){
    e.preventDefault();
    console.log(loan.value);
    console.log(principal.value);

    function monthlyii(){
        let monthlyi = (((parseInt(interest.value)/100)/parseInt(years.value))*parseInt(loan.value))
        let sum =  (monthlyi);
        console.log(sum);
    }
    function monthlypp(){
        let monthlyi = (((parseInt(interest.value)/100)/parseInt(years.value))*parseInt(loan.value));
        let sum2 = (monthlyi + parseInt(principal.value));
        console.log(sum2);
        monthly.innerText = `$ ${sum2.toFixed(2)}`;
    }
    function totalpp(){
        let monthlyi = (((parseInt(interest.value)/100)/parseInt(years.value))*parseInt(loan.value));
        let monthlyp = (monthlyi + principal.value);
        let sum3 = (monthlyp * parseInt(years.value));
        console.log(sum3);
        reppay.innerText = `$ ${sum3.toFixed(2)}`;
    }
    function totalin(){
        let monthlyi = (((parseInt(interest.value)/100)/parseInt(years.value))*parseInt(loan.value));
        let sum4 = (monthlyi * parseInt(years.value));
        console.log(sum4);
        inter.innerText = `$ ${sum4.toFixed(2)}`;
    }

    monthlyii();
    monthlypp();
    totalpp();
    totalin();
};


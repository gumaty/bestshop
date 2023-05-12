const productPrice = 0.5;
const orderPrice = 0.25;
const accountingPrice = 35;
const terminalPrice = 5;
const basicPrice = 0;
const profiPrice = 25;
const premiumPrice = 60;


const form = document.querySelector('form');
const packageSelect = document.querySelector('#package');
const selectDescription = document.querySelector('#package .select__input');
const selectItems = document.querySelectorAll('.select__dropdown [data-value]');
const productsInput = document.querySelector('#products');
const productsValue = document.querySelector('li[data-id="products"] .item__calc');
const productsBox = document.querySelector('li[data-id="products"]');
const accountingBox = document.querySelector('li[data-id="accounting"]');
const accountingValue = document.querySelector('li[data-id="accounting"] .item__price');
const terminalBox = document.querySelector('li[data-id="terminal"]');
const terminalValue = document.querySelector('li[data-id="terminal"] .item__price');
const productsPrice = document.querySelector('li[data-id="products"] .item__price');
const ordersBox = document.querySelector('li[data-id="orders"]');
const summaryBox = document.querySelector('.summary__total');
const summaryPrice = document.querySelector('.total__price');
const ordersValue = document.querySelector('li[data-id="orders"] .item__calc');
const ordersPrice = document.querySelector('li[data-id="orders"] .item__price');
const ordersInput = document.querySelector('#orders');
const accountingCheckbox = document.querySelector('#accounting');
const terminalCheckbox = document.querySelector('#terminal');
const packageBox = document.querySelector('li[data-id="package"]');
const packageOption = document.querySelector('li[data-id="package"] .item__calc');
const packagePrice = document.querySelector('li[data-id="package"] .item__price');

let sum = 0;
let packageValue = 0;
let qtyProductValue = 0;
let qtyOrderValue = 0;
let productValue = 0;
let orderValue = 0;
let tempAccountingPrice = 0;
let tempTerminalPrice = 0;
packageSelect.addEventListener('click', function () {
    packageSelect.classList.toggle("open");
})

selectItems.forEach(function (element) {

    element.addEventListener('click', function () {


        packageBox.style.display = "flex";

        if (element.innerText === "Basic") {
            summaryBox.style.display = "flex";
            packageOption.innerText = element.innerText;
            selectDescription.innerHTML = element.innerHTML;
            packagePrice.innerText = `$${basicPrice}`;
            packageValue = basicPrice;
        } else if (element.innerText === "Professional") {
            summaryBox.style.display = "flex";
            packageOption.innerText = element.innerText;
            selectDescription.innerHTML = element.innerHTML;
            packagePrice.innerText = `$${profiPrice}`;
            packageValue = profiPrice;
        } else if (element.innerText === "Premium") {
            summaryBox.style.display = "flex";
            packageOption.innerText = element.innerText;
            selectDescription.innerHTML = element.innerHTML;
            packagePrice.innerText = `$${premiumPrice}`;
            packageValue = premiumPrice;
        }
        sum = productValue + orderValue + packageValue + tempTerminalPrice + tempAccountingPrice;

        if ((qtyOrderValue.length === 0) && (qtyProductValue.length === 0) && (accountingCheckbox.checked === false) && (terminalCheckbox.checked === false)) {
            summaryBox.style.display = "none";
        } else {
            summaryBox.style.display = "flex";
            summaryPrice.innerText = `$${sum}`;
        }
    })
})

form.addEventListener('input', function (event) {

    qtyProductValue = productsInput.value;
    qtyOrderValue = ordersInput.value;
    productValue = Math.ceil(qtyProductValue) * productPrice;
    productsValue.innerText = `${Math.ceil(qtyProductValue)} * $${productPrice}`;
    productsPrice.innerText = `$${productValue}`;

    orderValue = Math.ceil(qtyOrderValue) * orderPrice;
    ordersValue.innerText = `${Math.ceil(qtyOrderValue)} * $${orderPrice}`;
    ordersPrice.innerText = `$${orderValue}`;

    if (qtyProductValue.length == 0) {
        productsBox.style.display = "none";
    } else {
        productsBox.style.display = "flex";
    }


    if (qtyOrderValue.length == 0) {
        ordersBox.style.display = "none";
    } else {
        ordersBox.style.display = "flex";
    }

    if (!terminalCheckbox.checked) {
        tempTerminalPrice = 0;
        terminalValue.innerText = `$${tempTerminalPrice}`;
        terminalBox.style.display = 'none';
    } else {
        tempTerminalPrice = terminalPrice;
        terminalValue.innerText = `$${tempTerminalPrice}`;
        terminalBox.style.display = 'flex';
    }

    if (!accountingCheckbox.checked) {
        tempAccountingPrice = 0;
        accountingValue.innerText = `$${tempAccountingPrice}`;
        accountingBox.style.display = 'none';
    } else {
        tempAccountingPrice = accountingPrice;
        accountingValue.innerText = `$${tempAccountingPrice}`;
        accountingBox.style.display = 'flex';
    }

    sum = productValue + orderValue + packageValue + tempTerminalPrice + tempAccountingPrice;

    if ((qtyOrderValue.length === 0) && (qtyProductValue.length === 0) && (accountingCheckbox.checked === false) && (terminalCheckbox.checked === false)) {
        summaryBox.style.display = "none";
    } else {
        summaryBox.style.display = "flex";
        summaryPrice.innerText = `$${sum}`;
    }
})




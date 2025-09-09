
let currency = ["AUD", "BGN", "BRL", "CAD", "CHF", "CZK", "INR", "USD", "EUR"];

// accessing dropdown
let from = document.getElementById("currencyfrom");
let to = document.getElementById("currencyto");
let amount = document.getElementById("amount");
let button = document.getElementById("button");

// iterating currency codes to select option
currency.forEach(code => {
    let option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = code;
    from.appendChild(option1);
})

currency.forEach(code => {
    let option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = code;
    to.appendChild(option1);
})
button.addEventListener("click", (event) => {
    event.preventDefault();
    let from1 = from.value;
    let to1 = to.value;
    let amount1 = amount.value;
    if (!from1 || !to1 || !amount1) {
        let p = document.getElementById("result");
        p.innerText = "please enter valid numbers:";
        return;
    }
    if (from1 == to1) {
        document.getElementById("result").textContent = "enter code correctly";
        return;
    }
    // fetching API
    let url = `https://api.frankfurter.app/latest?amount=${amount1}&from=${from1}&to=${to1}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("result").textContent =
                `${amount1} ${from1}=${data.rates[to1]} ${to1}`;
        })
        .catch((err) => {
            console.log(err);
            p.textContent = "conversion failed, try again";

        })
});








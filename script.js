const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const tocurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');
const converterContainer = document.querySelector('.converter-container');

//Array to populate the select tags with these countries
const countries = [
    {code: "USD", name: "United States Dollar"},
    {code: "EUR", name: "Euro"},
    {code: "JPY", name: "Japanese Yen"},
    {code: "GBP", name: "British Pound Sterling"},
    {code: "AUD", name: "Australian Dollar"},
    {code: "CAD", name: "Canadian Dollar"},
    {code: "CHF", name: "Swiss Franc"},
    {code: "CNY", name: "Chinese Yuan"},
    {code: "HKD", name: "Hong Kong Dollar"},
    {code: "NZD", name: "New Zealand Dollar"},
    {code: "SEK", name: "Swedish Krona"},
    {code: "KRW", name: "South Korean Won"},
    {code: "SGD", name: "Singapore Dollar"},
    {code: "NOK", name: "Norwegian Krone"},
    {code: "MXN", name: "Mexican Peso"},
    {code: "INR", name: "Indian Rupee"},
    {code: "RUB", name: "Russian Ruble"},
    {code: "ZAR", name: "South African Rand"},
    {code: "TRY", name: "Turkish Lira"},
    {code: "BRL", name: "Brazilian Real"},
    {code: "TWD", name: "New Taiwan Dollar"},
    {code: "DKK", name: "Danish Krone"},
    {code: "PLN", name: "Polish Zloty"},
    {code: "THB", name: "Thai Baht"},
    {code: "IDR", name: "Indonesian Rupiah"},
    {code: "HUF", name: "Hungarian Forint"},
    {code: "CZK", name: "Czech Koruna"},
    {code: "ILS", name: "Israeli New Shekel"},
    {code: "CLP", name: "Chilean Peso"},
    {code: "PHP", name: "Philippine Peso"},
    {code: "AED", name: "UAE Dirham"},
    {code: "SAR", name: "Saudi Riyal"},
    {code: "MYR", name: "Malaysian Ringgit"},
    {code: "COP", name: "Colombian Peso"},
    {code: "PKR", name: "Pakistani Rupee"},
    {code: "EGP", name: "Egyptian Pound"},
    {code: "BDT", name: "Bangladeshi Taka"},
    {code: "NGN", name: "Nigerian Naira"},
    {code: "KWD", name: "Kuwaiti Dinar"},
    {code: "QAR", name: "Qatari Riyal"},
    {code: "VND", name: "Vietnamese Dong"},
    {code: "ARS", name: "Argentine Peso"},
    {code: "MAD", name: "Moroccan Dirham"},
    {code: "LKR", name: "Sri Lankan Rupee"},
    {code: "KES", name: "Kenyan Shilling"},
    {code: "GHS", name: "Ghanaian Cedi"},
    {code: "OMR", name: "Omani Rial"},
    {code: "BHD", name: "Bahraini Dinar"},
    {code: "JOD", name: "Jordanian Dinar"},
    {code: "MMK", name: "Myanmar Kyat"}
];

// showing countries from array to select tag
countries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent=`${country.code} (${country.name})`;

    fromCurrencyElement.appendChild(option1);
    tocurrencyElement.appendChild(option2);

    //setting defalt values
    fromCurrencyElement.value = "USD";
    tocurrencyElement.value = "INR";
});

const getExchangeRate = async () =>{
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const tocurrency = tocurrencyElement.value;

    try{
        //fetch data from API
        const response = await fetch(`https://v6.exchangerate-api.com/v6/cb1573022d349c5068fc6056/latest/${fromCurrency}`);
        const data = await response.json();
        console.log(data);
        const conversionRate = data.conversion_rates[tocurrency];
        const convertedAmount = (amount * conversionRate);

        convertedAmountElement.value = convertedAmount;
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${tocurrency}`;

    }
    catch(error){
        converterContainer.innerHTML = `<h1>error while fetching exchange rates!!</h1>`;
    }


}

// getExchangeRate();
//fetching exchange rate when user input 
fromAmountElement.addEventListener('input',getExchangeRate);
fromcurrencyElement.addEventListener('change',getExchangeRate);
tocurrencyElement.addEventListener('change',getExchangeRate);
window.addEventListener('load',getExchangeRate);

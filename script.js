// // Define currencies and cryptocurrencies
// const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'INR', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'KRW', 'SGD', 'NOK', 'MXN', 'HKD', 'DKK', 'TRY', 'RUB', 'ZAR', 'BRL', 'PLN', 'THB', 'IDR', 'HUF', 'CZK', 'ILS', 'CLP', 'PHP', 'AED', 'COP', 'SAR', 'MYR', 'RON', 'VND', 'NGN', 'ARS', 'EGP', 'KWD', 'QAR', 'PKR', 'BDT', 'OMR', 'IQD', 'TWD', 'HRK', 'DZD', 'MAD', 'UGX']; // Add more currencies if needed
// const cryptocurrencies = ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'bitcoin-cash', 'cardano', 'stellar', 'chainlink', 'polkadot', 'binancecoin', 'dogecoin', 'uniswap', 'bitcoin-cash-sv', 'eos', 'monero', 'tron', 'tezos', 'cosmos', 'vechain', 'iota', 'dash', 'ethereum-classic', 'aave', 'ftx-token', 'maker', 'neo', 'compound', 'theta-token', 'shiba-inu', 'pancakeswap', 'sushi', 'bittorrent-2', 'terra-luna', 'elrond-erd-2', 'zilliqa', 'holotoken', 'chiliz', 'the-graph', 'solana', 'matic-network', 'enjincoin', 'theta-fuel', 'basic-attention-token', 'yearn-finance', 'waves', 'zcash', 'decentraland', 'compound-governance-token']; // Add more cryptocurrencies if needed

// // Cache for exchange rates and cryptocurrency prices
// const exchangeRateCache = {};
// const cryptoPriceCache = {};

// // Populate currency select options
// const currencySelect = document.getElementById('currency');
// currencies.forEach(currency => {
//     const option = document.createElement('option');
//     option.textContent = currency;
//     currencySelect.appendChild(option);
// });

// // Populate cryptocurrency select options
// const cryptocurrencySelect = document.getElementById('cryptocurrency');
// cryptocurrencies.forEach(cryptocurrency => {
//     const option = document.createElement('option');
//     option.textContent = cryptocurrency;
//     cryptocurrencySelect.appendChild(option);
// });

// // Fetch cryptocurrency price in selected currency from CoinGecko API
// async function fetchPrice(cryptocurrency, currency) {
//     const cacheKey = `${cryptocurrency}_${currency}`;
//     if (cryptoPriceCache[cacheKey]) {
//         return cryptoPriceCache[cacheKey];
//     }

//     try {
//         const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptocurrency}&vs_currencies=${currency}`);
//         const data = await response.json();
//         const price = data[cryptocurrency][currency.toLowerCase()];
//         cryptoPriceCache[cacheKey] = price;
//         return price;
//     } catch (error) {
//         throw new Error('Error fetching cryptocurrency price');
//     }
// }

// // Fetch exchange rate for selected currency from CoinGecko API
// async function fetchExchangeRate(currency) {
//     if (exchangeRateCache[currency]) {
//         return exchangeRateCache[currency];
//     }

//     try {
//         const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=usd&vs_currencies=${currency}`);
//         const data = await response.json();
//         const rate = data.usd[currency.toLowerCase()];
//         exchangeRateCache[currency] = rate;
//         return rate;
//     } catch (error) {
//         throw new Error('Error fetching exchange rate');
//     }
// }

// // Conversion function
// async function convert() {
//     const amount = parseFloat(document.getElementById('amount').value);
//     const currency = document.getElementById('currency').value;
//     const cryptocurrency = document.getElementById('cryptocurrency').value;

//     try {
//         // Fetch cryptocurrency price in selected currency
//         const cryptoPriceInCurrency = await fetchPrice(cryptocurrency, currency);

//         // Fetch exchange rate for selected currency
//         const exchangeRate = await fetchExchangeRate(currency);

//         // Perform conversion
//         const convertedAmount = (amount / cryptoPriceInCurrency) * exchangeRate;

//         // Display result
//         const resultDiv = document.getElementById('result');
//         resultDiv.textContent = `${amount} ${currency} equals ${convertedAmount.toFixed(6)} ${cryptocurrency}`;
//     } catch (error) {
//         console.error('Error:', error.message);
//         alert('Error converting currencies. Please try again later.');
//     }
// }




// Define currencies and cryptocurrencies
const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'INR', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'KRW', 'SGD', 'NOK', 'MXN', 'HKD', 'DKK', 'TRY', 'RUB', 'ZAR', 'BRL', 'PLN', 'THB', 'IDR', 'HUF', 'CZK', 'ILS', 'CLP', 'PHP', 'AED', 'COP', 'SAR', 'MYR', 'RON', 'VND', 'NGN', 'ARS', 'EGP', 'KWD', 'QAR', 'PKR', 'BDT', 'OMR', 'IQD', 'TWD', 'HRK', 'DZD', 'MAD', 'UGX']; // Add more currencies if needed
const cryptocurrencies = ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'bitcoin-cash', 'cardano', 'stellar', 'chainlink', 'polkadot', 'binancecoin', 'dogecoin', 'uniswap', 'bitcoin-cash-sv', 'eos', 'monero', 'tron', 'tezos', 'cosmos', 'vechain', 'iota', 'dash', 'ethereum-classic', 'aave', 'ftx-token', 'maker', 'neo', 'compound', 'theta-token', 'shiba-inu', 'pancakeswap', 'sushi', 'bittorrent-2', 'terra-luna', 'elrond-erd-2', 'zilliqa', 'holotoken', 'chiliz', 'the-graph', 'solana', 'matic-network', 'enjincoin', 'theta-fuel', 'basic-attention-token', 'yearn-finance', 'waves', 'zcash', 'decentraland', 'compound-governance-token']; // Add more cryptocurrencies if needed

// Cache for exchange rates and cryptocurrency prices
const exchangeRateCache = {};
const cryptoPriceCache = {};

// Populate currency select options
const currencySelect = document.getElementById('currency');
currencies.forEach(currency => {
    const option = document.createElement('option');
    option.textContent = currency;
    currencySelect.appendChild(option);
});

// Populate cryptocurrency select options
const cryptocurrencySelect = document.getElementById('cryptocurrency');
cryptocurrencies.forEach(cryptocurrency => {
    const option = document.createElement('option');
    option.textContent = cryptocurrency;
    cryptocurrencySelect.appendChild(option);
});

// Fetch cryptocurrency price in selected currency from CoinGecko API
async function fetchPrice(cryptocurrency, currency) {
    const cacheKey = `${cryptocurrency}_${currency}`;
    if (cryptoPriceCache[cacheKey]) {
        return cryptoPriceCache[cacheKey];
    }

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptocurrency}&vs_currencies=${currency}`);
        const data = await response.json();
        const price = data[cryptocurrency][currency.toLowerCase()];
        cryptoPriceCache[cacheKey] = price;
        return price;
    } catch (error) {
        throw new Error('Error fetching cryptocurrency price');
    }
}

// Fetch exchange rate for selected currency from CoinGecko API
async function fetchExchangeRate(currency) {
    if (exchangeRateCache[currency]) {
        return exchangeRateCache[currency];
    }

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=usd&vs_currencies=${currency}`);
        const data = await response.json();
        const rate = data.usd[currency.toLowerCase()];
        exchangeRateCache[currency] = rate;
        return rate;
    } catch (error) {
        throw new Error('Error fetching exchange rate');
    }
}

// Conversion function
async function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    const cryptocurrency = document.getElementById('cryptocurrency').value;
    const convertTo = document.getElementById('convertTo').value;
    const resultDiv = document.getElementById('result');

    try {
        // Display 'Converting your data' message while processing
        resultDiv.textContent = 'Converting your data...';

        let resultText = '';

        if (convertTo === 'cryptocurrency') {
            // Fetch cryptocurrency price in selected currency
            const cryptoPriceInCurrency = await fetchPrice(cryptocurrency, currency);

            // Fetch exchange rate for selected currency
            const exchangeRate = await fetchExchangeRate(currency);

            // Perform conversion
            const convertedAmount = (amount / cryptoPriceInCurrency) * exchangeRate;

            // Construct result text
            resultText = `${amount} ${currency} equals ${convertedAmount.toFixed(6)} ${cryptocurrency}`;
        } else if (convertTo === 'currency') {
            // Fetch cryptocurrency price in selected currency
            const cryptoPriceInCurrency = await fetchPrice(cryptocurrency, currency);

            // Fetch exchange rate for selected currency
            const exchangeRate = await fetchExchangeRate(currency);

            // Perform conversion
            const convertedAmount = (amount * cryptoPriceInCurrency) / exchangeRate;

            // Construct result text
            resultText = `${amount} ${cryptocurrency} equals ${convertedAmount.toFixed(6)} ${currency}`;
        } else {
            throw new Error('Invalid conversion type');
        }

        // Display result
        resultDiv.textContent = resultText;
    } catch (error) {
        console.error('Error:', error.message);
        alert('Error converting currencies. Please try again later.');
    } finally {
        // Remove 'Converting your data' message after a short delay
        setTimeout(() => {
            resultDiv.textContent = resultDiv.textContent.replace('Converting your data...', '');
        }, 2000); // Adjust the timeout as needed
    }
}

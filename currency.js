

const currresult= async (amount,currencyfrom,currencyto) =>
{
    const r_single_result=document.querySelector('.single');
    const r_table_result=document.querySelector('.table');
    const r_entered_amount=document.querySelector('.entered-amount');
    const r_currency_from=document.querySelector('.currency-from');
    const r_equal_text=document.querySelector('.equal-text');
    const r_result_amount=document.querySelector('.result-amount');
    const r_currency_to=document.querySelector('.currency-to');

    url="https://api.currencyapi.com/v3/latest?apikey=cur_live_5fWa9UlOO7hRyqyZDpHFpOhdeK2RqXpsPyZ2J8TA&base_currency=" + currencyfrom;
    let response= await fetch(url);
    let r_json= await response.json();
    // let r_json=JSON.parse(`{
    //     "meta": {
    //       "last_updated_at": "2025-01-31T23:59:59Z"
    //     },
    //     "data": {
    //       "ADA": {
    //         "code": "ADA",
    //         "value": 1.0598530151
    //       },
    //       "AED": {
    //         "code": "AED",
    //         "value": 3.6725505846
    //       },
    //       "AFN": {
    //         "code": "AFN",
    //         "value": 75.5981294297
    //       },
    //       "ALL": {
    //         "code": "ALL",
    //         "value": 96.1782497255
    //       },
    //       "AMD": {
    //         "code": "AMD",
    //         "value": 397.129712854
    //       },
    //       "ANG": {
    //         "code": "ANG",
    //         "value": 1.7882802356
    //       },
    //       "AOA": {
    //         "code": "AOA",
    //         "value": 913.6797127395
    //       },
    //       "ARB": {
    //         "code": "ARB",
    //         "value": 1.5578050268
    //       },
    //       "ARS": {
    //         "code": "ARS",
    //         "value": 1051.5406552414
    //       },
    //       "AUD": {
    //         "code": "AUD",
    //         "value": 1.6098402959
    //       },
    //       "AVAX": {
    //         "code": "AVAX",
    //         "value": 0.0290315262
    //       },
    //       "AWG": {
    //         "code": "AWG",
    //         "value": 1.79
    //       },
    //       "AZN": {
    //         "code": "AZN",
    //         "value": 1.7
    //       },
    //       "BAM": {
    //         "code": "BAM",
    //         "value": 1.887020343
    //       },
    //       "BBD": {
    //         "code": "BBD",
    //         "value": 2
    //       },
    //       "BDT": {
    //         "code": "BDT",
    //         "value": 121.8613441685
    //       },
    //       "BGN": {
    //         "code": "BGN",
    //         "value": 1.8852003004
    //       },
    //       "BHD": {
    //         "code": "BHD",
    //         "value": 0.376
    //       },
    //       "BIF": {
    //         "code": "BIF",
    //         "value": 2915.5279943551
    //       },
    //       "BMD": {
    //         "code": "BMD",
    //         "value": 1
    //       },
    //       "BNB": {
    //         "code": "BNB",
    //         "value": 0.0014708831
    //       },
    //       "BND": {
    //         "code": "BND",
    //         "value": 1.3576101682
    //       },
    //       "BOB": {
    //         "code": "BOB",
    //         "value": 6.9110506993
    //       },
    //       "BRL": {
    //         "code": "BRL",
    //         "value": 5.8399006323
    //       },
    //       "BSD": {
    //         "code": "BSD",
    //         "value": 1
    //       },
    //       "BTC": {
    //         "code": "BTC",
    //         "value": 0.0000097584
    //       },
    //       "BTN": {
    //         "code": "BTN",
    //         "value": 85.959733344
    //       },
    //       "BWP": {
    //         "code": "BWP",
    //         "value": 13.931511855
    //       },
    //       "BYN": {
    //         "code": "BYN",
    //         "value": 3.2725608414
    //       },
    //       "BYR": {
    //         "code": "BYR",
    //         "value": 32725.603659158
    //       },
    //       "BZD": {
    //         "code": "BZD",
    //         "value": 2
    //       },
    //       "CAD": {
    //         "code": "CAD",
    //         "value": 1.4523902068
    //       },
    //       "CDF": {
    //         "code": "CDF",
    //         "value": 2842.8371125452
    //       },
    //       "CHF": {
    //         "code": "CHF",
    //         "value": 0.9108001143
    //       },
    //       "CLF": {
    //         "code": "CLF",
    //         "value": 0.025180004
    //       },
    //       "CLP": {
    //         "code": "CLP",
    //         "value": 981.9969105472
    //       },
    //       "CNY": {
    //         "code": "CNY",
    //         "value": 7.2578212936
    //       },
    //       "COP": {
    //         "code": "COP",
    //         "value": 4203.7495819201
    //       },
    //       "CRC": {
    //         "code": "CRC",
    //         "value": 505.0273922943
    //       },
    //       "CUC": {
    //         "code": "CUC",
    //         "value": 1
    //       },
    //       "CUP": {
    //         "code": "CUP",
    //         "value": 24
    //       },
    //       "CVE": {
    //         "code": "CVE",
    //         "value": 106.2248922717
    //       },
    //       "CZK": {
    //         "code": "CZK",
    //         "value": 24.3017434663
    //       },
    //       "DAI": {
    //         "code": "DAI",
    //         "value": 0.9983180235
    //       },
    //       "DJF": {
    //         "code": "DJF",
    //         "value": 177.721
    //       },
    //       "DKK": {
    //         "code": "DKK",
    //         "value": 7.2034609223
    //       },
    //       "DOP": {
    //         "code": "DOP",
    //         "value": 61.6324111177
    //       },
    //       "DOT": {
    //         "code": "DOT",
    //         "value": 0.1580934139
    //       },
    //       "DZD": {
    //         "code": "DZD",
    //         "value": 135.7224957545
    //       },
    //       "EGP": {
    //         "code": "EGP",
    //         "value": 50.2874499938
    //       },
    //       "ERN": {
    //         "code": "ERN",
    //         "value": 15
    //       },
    //       "ETB": {
    //         "code": "ETB",
    //         "value": 126.4884616111
    //       },
    //       "ETH": {
    //         "code": "ETH",
    //         "value": 0.0003031978
    //       },
    //       "EUR": {
    //         "code": "EUR",
    //         "value": 0.9650401152
    //       },
    //       "FJD": {
    //         "code": "FJD",
    //         "value": 2.3484902869
    //       },
    //       "FKP": {
    //         "code": "FKP",
    //         "value": 0.8065850224
    //       },
    //       "GBP": {
    //         "code": "GBP",
    //         "value": 0.8069600988
    //       },
    //       "GEL": {
    //         "code": "GEL",
    //         "value": 2.881560386
    //       },
    //       "GGP": {
    //         "code": "GGP",
    //         "value": 0.8065850317
    //       },
    //       "GHS": {
    //         "code": "GHS",
    //         "value": 15.2996228509
    //       },
    //       "GIP": {
    //         "code": "GIP",
    //         "value": 0.8065853505
    //       },
    //       "GMD": {
    //         "code": "GMD",
    //         "value": 72.9078126182
    //       },
    //       "GNF": {
    //         "code": "GNF",
    //         "value": 8649.4740575936
    //       },
    //       "GTQ": {
    //         "code": "GTQ",
    //         "value": 7.731511141
    //       },
    //       "GYD": {
    //         "code": "GYD",
    //         "value": 209.1267458754
    //       },
    //       "HKD": {
    //         "code": "HKD",
    //         "value": 7.7918912738
    //       },
    //       "HNL": {
    //         "code": "HNL",
    //         "value": 25.5460731058
    //       },
    //       "HRK": {
    //         "code": "HRK",
    //         "value": 6.8313113467
    //       },
    //       "HTG": {
    //         "code": "HTG",
    //         "value": 132.8190557265
    //       },
    //       "HUF": {
    //         "code": "HUF",
    //         "value": 393.3369960714
    //       },
    //       "IDR": {
    //         "code": "IDR",
    //         "value": 16297.431345661
    //       },
    //       "ILS": {
    //         "code": "ILS",
    //         "value": 3.5736504092
    //       },
    //       "IMP": {
    //         "code": "IMP",
    //         "value": 0.8065848375
    //       },
    //       "INR": {
    //         "code": "INR",
    //         "value": 86.5794751626
    //       },
    //       "IQD": {
    //         "code": "IQD",
    //         "value": 1309.2027935586
    //       },
    //       "IRR": {
    //         "code": "IRR",
    //         "value": 42040.644926912
    //       },
    //       "ISK": {
    //         "code": "ISK",
    //         "value": 141.6036084042
    //       },
    //       "JEP": {
    //         "code": "JEP",
    //         "value": 0.8065848876
    //       },
    //       "JMD": {
    //         "code": "JMD",
    //         "value": 157.0383190277
    //       },
    //       "JOD": {
    //         "code": "JOD",
    //         "value": 0.71
    //       },
    //       "JPY": {
    //         "code": "JPY",
    //         "value": 155.2024860833
    //       },
    //       "KES": {
    //         "code": "KES",
    //         "value": 129.1994548252
    //       },
    //       "KGS": {
    //         "code": "KGS",
    //         "value": 87.6866206939
    //       },
    //       "KHR": {
    //         "code": "KHR",
    //         "value": 4017.2453558529
    //       },
    //       "KMF": {
    //         "code": "KMF",
    //         "value": 474.1765846468
    //       },
    //       "KPW": {
    //         "code": "KPW",
    //         "value": 899.9771612473
    //       },
    //       "KRW": {
    //         "code": "KRW",
    //         "value": 1454.2779294185
    //       },
    //       "KWD": {
    //         "code": "KWD",
    //         "value": 0.3087000526
    //       },
    //       "KYD": {
    //         "code": "KYD",
    //         "value": 0.83333
    //       },
    //       "KZT": {
    //         "code": "KZT",
    //         "value": 518.6368091746
    //       },
    //       "LAK": {
    //         "code": "LAK",
    //         "value": 21655.561742525
    //       },
    //       "LBP": {
    //         "code": "LBP",
    //         "value": 89588.628292266
    //       },
    //       "LKR": {
    //         "code": "LKR",
    //         "value": 298.0528675226
    //       },
    //       "LRD": {
    //         "code": "LRD",
    //         "value": 197.0756104872
    //       },
    //       "LSL": {
    //         "code": "LSL",
    //         "value": 18.5899235998
    //       },
    //       "LTC": {
    //         "code": "LTC",
    //         "value": 0.0078075162
    //       },
    //       "LTL": {
    //         "code": "LTL",
    //         "value": 3.3318104499
    //       },
    //       "LVL": {
    //         "code": "LVL",
    //         "value": 0.6781732305
    //       },
    //       "LYD": {
    //         "code": "LYD",
    //         "value": 4.9114405978
    //       },
    //       "MAD": {
    //         "code": "MAD",
    //         "value": 10.0357515254
    //       },
    //       "MATIC": {
    //         "code": "MATIC",
    //         "value": 2.4529042201
    //       },
    //       "MDL": {
    //         "code": "MDL",
    //         "value": 18.5072919251
    //       },
    //       "MGA": {
    //         "code": "MGA",
    //         "value": 4691.0967451854
    //       },
    //       "MKD": {
    //         "code": "MKD",
    //         "value": 59.2992460697
    //       },
    //       "MMK": {
    //         "code": "MMK",
    //         "value": 2100.5876840041
    //       },
    //       "MNT": {
    //         "code": "MNT",
    //         "value": 3449.8149068027
    //       },
    //       "MOP": {
    //         "code": "MOP",
    //         "value": 8.0450608231
    //       },
    //       "MRO": {
    //         "code": "MRO",
    //         "value": 356.999828
    //       },
    //       "MRU": {
    //         "code": "MRU",
    //         "value": 39.9656881089
    //       },
    //       "MUR": {
    //         "code": "MUR",
    //         "value": 46.664197721
    //       },
    //       "MVR": {
    //         "code": "MVR",
    //         "value": 15.4494819872
    //       },
    //       "MWK": {
    //         "code": "MWK",
    //         "value": 1735.4709989365
    //       },
    //       "MXN": {
    //         "code": "MXN",
    //         "value": 20.6766432114
    //       },
    //       "MYR": {
    //         "code": "MYR",
    //         "value": 4.4591008346
    //       },
    //       "MZN": {
    //         "code": "MZN",
    //         "value": 63.582992624
    //       },
    //       "NAD": {
    //         "code": "NAD",
    //         "value": 18.6272022642
    //       },
    //       "NGN": {
    //         "code": "NGN",
    //         "value": 1482.1018545148
    //       },
    //       "NIO": {
    //         "code": "NIO",
    //         "value": 36.7970547243
    //       },
    //       "NOK": {
    //         "code": "NOK",
    //         "value": 11.3229321725
    //       },
    //       "NPR": {
    //         "code": "NPR",
    //         "value": 138.8357411213
    //       },
    //       "NZD": {
    //         "code": "NZD",
    //         "value": 1.7736202679
    //       },
    //       "OMR": {
    //         "code": "OMR",
    //         "value": 0.3844600595
    //       },
    //       "OP": {
    //         "code": "OP",
    //         "value": 0.7000116016
    //       },
    //       "PAB": {
    //         "code": "PAB",
    //         "value": 0.9991101453
    //       },
    //       "PEN": {
    //         "code": "PEN",
    //         "value": 3.7317006225
    //       },
    //       "PGK": {
    //         "code": "PGK",
    //         "value": 4.0196705475
    //       },
    //       "PHP": {
    //         "code": "PHP",
    //         "value": 58.4061778001
    //       },
    //       "PKR": {
    //         "code": "PKR",
    //         "value": 279.1562712414
    //       },
    //       "PLN": {
    //         "code": "PLN",
    //         "value": 4.0602205557
    //       },
    //       "PYG": {
    //         "code": "PYG",
    //         "value": 7920.1043034401
    //       },
    //       "QAR": {
    //         "code": "QAR",
    //         "value": 3.6427903938
    //       },
    //       "RON": {
    //         "code": "RON",
    //         "value": 4.7859008445
    //       },
    //       "RSD": {
    //         "code": "RSD",
    //         "value": 112.5482385133
    //       },
    //       "RUB": {
    //         "code": "RUB",
    //         "value": 98.7403563027
    //       },
    //       "RWF": {
    //         "code": "RWF",
    //         "value": 1390.1892258069
    //       },
    //       "SAR": {
    //         "code": "SAR",
    //         "value": 3.7425507041
    //       },
    //       "SBD": {
    //         "code": "SBD",
    //         "value": 8.4653456906
    //       },
    //       "SCR": {
    //         "code": "SCR",
    //         "value": 15.0242918165
    //       },
    //       "SDG": {
    //         "code": "SDG",
    //         "value": 601.5
    //       },
    //       "SEK": {
    //         "code": "SEK",
    //         "value": 11.0985913509
    //       },
    //       "SGD": {
    //         "code": "SGD",
    //         "value": 1.3576102598
    //       },
    //       "SHP": {
    //         "code": "SHP",
    //         "value": 0.8069600836
    //       },
    //       "SLE": {
    //         "code": "SLE",
    //         "value": 22.77201454
    //       },
    //       "SLL": {
    //         "code": "SLL",
    //         "value": 22679.915123095
    //       },
    //       "SOL": {
    //         "code": "SOL",
    //         "value": 0.0043164071
    //       },
    //       "SOS": {
    //         "code": "SOS",
    //         "value": 572.6611238475
    //       },
    //       "SRD": {
    //         "code": "SRD",
    //         "value": 34.8936436172
    //       },
    //       "STD": {
    //         "code": "STD",
    //         "value": 23850.813116525
    //       },
    //       "STN": {
    //         "code": "STN",
    //         "value": 23.8507977987
    //       },
    //       "SVC": {
    //         "code": "SVC",
    //         "value": 8.75
    //       },
    //       "SYP": {
    //         "code": "SYP",
    //         "value": 13002.446236537
    //       },
    //       "SZL": {
    //         "code": "SZL",
    //         "value": 18.6271229155
    //       },
    //       "THB": {
    //         "code": "THB",
    //         "value": 33.6213145825
    //       },
    //       "TJS": {
    //         "code": "TJS",
    //         "value": 10.945431841
    //       },
    //       "TMT": {
    //         "code": "TMT",
    //         "value": 3.5
    //       },
    //       "TND": {
    //         "code": "TND",
    //         "value": 3.188960557
    //       },
    //       "TOP": {
    //         "code": "TOP",
    //         "value": 2.3999903789
    //       },
    //       "TRY": {
    //         "code": "TRY",
    //         "value": 35.7493444856
    //       },
    //       "TTD": {
    //         "code": "TTD",
    //         "value": 6.7790911464
    //       },
    //       "TWD": {
    //         "code": "TWD",
    //         "value": 33.0098853247
    //       },
    //       "TZS": {
    //         "code": "TZS",
    //         "value": 2545.383725009
    //       },
    //       "UAH": {
    //         "code": "UAH",
    //         "value": 41.9963463168
    //       },
    //       "UGX": {
    //         "code": "UGX",
    //         "value": 3686.690505978
    //       },
    //       "USD": {
    //         "code": "USD",
    //         "value": 1
    //       },
    //       "USDC": {
    //         "code": "USDC",
    //         "value": 0.9978109023
    //       },
    //       "USDT": {
    //         "code": "USDT",
    //         "value": 0.9988272167
    //       },
    //       "UYU": {
    //         "code": "UYU",
    //         "value": 43.4143369856
    //       },
    //       "UZS": {
    //         "code": "UZS",
    //         "value": 12979.779050433
    //       },
    //       "VEF": {
    //         "code": "VEF",
    //         "value": 5837068.9147562
    //       },
    //       "VES": {
    //         "code": "VES",
    //         "value": 58.3706915245
    //       },
    //       "VND": {
    //         "code": "VND",
    //         "value": 25084.331099807
    //       },
    //       "VUV": {
    //         "code": "VUV",
    //         "value": 124.2901266836
    //       },
    //       "WST": {
    //         "code": "WST",
    //         "value": 2.8346135734
    //       },
    //       "XAF": {
    //         "code": "XAF",
    //         "value": 633.0353951774
    //       },
    //       "XAG": {
    //         "code": "XAG",
    //         "value": 0.031928826
    //       },
    //       "XAU": {
    //         "code": "XAU",
    //         "value": 0.0003571551
    //       },
    //       "XCD": {
    //         "code": "XCD",
    //         "value": 2.7
    //       },
    //       "XDR": {
    //         "code": "XDR",
    //         "value": 0.7662001449
    //       },
    //       "XOF": {
    //         "code": "XOF",
    //         "value": 633.0354047603
    //       },
    //       "XPD": {
    //         "code": "XPD",
    //         "value": 0.0010416681
    //       },
    //       "XPF": {
    //         "code": "XPF",
    //         "value": 115.1079108817
    //       },
    //       "XPT": {
    //         "code": "XPT",
    //         "value": 0.0010167555
    //       },
    //       "XRP": {
    //         "code": "XRP",
    //         "value": 0.3291081065
    //       },
    //       "YER": {
    //         "code": "YER",
    //         "value": 248.4264623748
    //       },
    //       "ZAR": {
    //         "code": "ZAR",
    //         "value": 18.6312433616
    //       },
    //       "ZMK": {
    //         "code": "ZMK",
    //         "value": 9001.2
    //       },
    //       "ZMW": {
    //         "code": "ZMW",
    //         "value": 28.1206736003
    //       },
    //       "ZWG": {
    //         "code": "ZWG",
    //         "value": 26.7493068967
    //       },
    //       "ZWL": {
    //         "code": "ZWL",
    //         "value": 66839.139258937
    //       }
    //     }
    //   }`);

    let result="";
    if(currencyto=="ALL-C")
    {
        r_single_result.style.display="none";
        result+=`<table>
                    <thead>
                        <tr>
                            <td>Amount</td>
                            <td>Country Code</td>
                        </tr>
                     </thead>
                     <tbody>`
        ;
        for(let key of Object.keys(r_json["data"]))
        {
           result+=`<tr>
                        <td>${(r_json["data"][key]["value"] * amount)}
                        <td>${r_json["data"][key]["code"]}
                    </tr>`;
        }
        result+=`</tbody> </table>`;
        r_table_result.style.display="block";
        r_table_result.innerHTML=result;   
    }
    else
    {    
        r_table_result.style.display="none"; 
        for(let key of Object.keys(r_json["data"]))
        {
            //console.log("data");
            if(r_json["data"][key]["code"]==currencyto)
            {
                result+=`${(r_json["data"][key]["value"] * amount)}`;
                //console.log(result);
            }
        }
        r_single_result.style.display="block";
        r_entered_amount.innerHTML=amount;
        r_currency_from.innerHTML= currencyfrom;
        r_equal_text.innerHTML="=";
        r_result_amount.innerHTML=result;
        r_currency_to.innerHTML= currencyto;
    }
}
const btn=document.querySelector('.btn');
btn.addEventListener('click',(event)=>
{
    document.querySelector('.end').style.display="block";
    event.preventDefault();
    const amount=parseFloat(document.querySelector('.amount').value);
    const currencyfrom=document.querySelector('.currencyfrom').value;
    const currencyto=document.querySelector('.currencyto').value;

    //console.log(currencyto);

    currresult(amount,currencyfrom,currencyto);

});
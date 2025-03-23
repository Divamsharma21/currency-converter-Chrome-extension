// import React, { useState } from 'react';
// import { useId } from 'react';

// function InputBox({
//   label,
//   amount,
//   onAmountChange,
//   onCurrencyChange,
//   currencyOptions = [],
//   selectCurrency = "usd",
//   amountDisable = false,
//   currencyDisable = false,
//   className = "",
// }) {
//   const amountInputId = useId();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredCurrencies, setFilteredCurrencies] = useState(currencyOptions);

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = currencyOptions.filter((currency) => {
//       return currency.toLowerCase().includes(query);
//     });
//     setFilteredCurrencies(filtered);
//   };

//   const handleAmountChange = (e) => {
//     const value = e.target.value;
//     const intValue = parseInt(value);
//     if (!isNaN(intValue)) {
//       onAmountChange && onAmountChange(intValue);
//     }
//   };

//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//       <div className="w-1/2">
//         <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
//           {label}
//         </label>
//         <input
//           id={amountInputId}
//           className="outline-none w-full bg-transparent py-1.5"
//           type="number"
//           placeholder="Amount"
//           disabled={amountDisable}
//           value={amount}
//           onChange={handleAmountChange}
//         />
//       </div>
//       <div className="w-1/2 flex flex-wrap justify-end text-right">
//         {/* <p className="text-black/40 mb-2 w-full">To</p> */}
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <input
//           type="search"
//           value={searchQuery}
//           onChange={handleSearch}
//           placeholder="Search for a currency"
//           className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none mb-2"
//         />
//         <select
//           className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//           value={selectCurrency}
//           onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//           disabled={currencyDisable}
//         >
//           {filteredCurrencies.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default InputBox;

import React from 'react'
import {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,


    
    className = "",
}) {
    const amountInputId = useId()


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    //   onClick={(e) => selectCurrency(e.target.value)}
                     onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                     disabled={currencyDisable}
                >
                    {currencyOptions.map((currency)=>(

                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

 
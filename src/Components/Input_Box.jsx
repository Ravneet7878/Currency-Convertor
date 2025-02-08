import React, { useId } from "react"

function InputBox({
    label, 
    amount, 
    on_amount_change, 
    on_currency_change, 
    currency_options = [], 
    selected_currency = "usd", 
    amount_disabled = false, 
    currency_disabled = false
}) {
    const amount_input_id = useId()

    return (
       <div className="bg-white p-5 rounded-xl text-lg flex border-2 border-gray-300 shadow-md">
            <div className="w-1/2">
                <label 
                    className="text-black/50 mb-2 inline-block text-lg font-semibold"
                    htmlFor={amount_input_id}
                >
                    {label}
                </label>
                <input 
                    className="outline-none w-full bg-transparent py-2.5 text-xl"
                    id={amount_input_id}
                    type="text" // Allow manual typing
                    placeholder="0" // Always show 0 as a placeholder
                    disabled={amount_disabled} 
                    value={amount === "" ? "" : amount} // Keep empty when typing
                    onChange={(event) => {
                        const value = event.target.value;
                        if (value === "" || /^\d*\.?\d*$/.test(value)) { // Allow only numbers and decimals
                            on_amount_change && on_amount_change(value)
                        }
                    }}
                    onBlur={() => {
                        if (amount === "") on_amount_change(0) // Reset to 0 if left empty
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/50 mb-2 w-full text-lg font-semibold">Currency</p>
                <select 
                    className="rounded-xl px-3 py-2 bg-gray-100 cursor-pointer outline-none text-lg"
                    disabled={currency_disabled}
                    value={selected_currency}
                    onChange={(event) => on_currency_change && on_currency_change(event.target.value)}
                >
                {currency_options.map((currency) => (
                    <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox
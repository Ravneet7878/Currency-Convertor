import { useState } from 'react'
import InputBox from './Components/Input_Box' // Default import
import useCurrency from './Custom_Hooks/Use_Currency' // Importing custom hook
import bgImage from "./Background_Image/pexels-pixabay-259249.jpg" // Importing background image

function App() {
    const [amount, set_amount] = useState(0)
    const [from, set_from] = useState("usd")
    const [to, set_to] = useState("inr")
    const [converted_amount, set_converted_amount] = useState(0)

    const from_currency = useCurrency(from)
    const options = Object.keys(from_currency)

    const swap = () => {
        const temp = from
        set_from(to)
        set_to(temp)
        set_converted_amount(amount)
        set_amount(converted_amount)
    };

    const convert = () => {
        if(from_currency && from_currency[to]) set_converted_amount(amount * from_currency[to])
        else set_converted_amount(0)
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full">
                <div className="w-full max-w-xl mx-auto border border-gray-600 rounded-xl p-8 backdrop-blur-sm bg-white/40 shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-6 text-black">Currency Converter</h1>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault()
                            convert()
                        }}
                    >
                        <div className="w-full mb-4">
                            <InputBox
                                label="From"
                                amount={amount}
                                currency_options={options}
                                on_currency_change={(currency) => set_from(currency)}
                                selected_currency={from}
                                on_amount_change={(amount) => set_amount(amount)}
                            />
                        </div>
                        <div className="relative w-full flex justify-center my-4">
                            <button
                                type="button"
                                className="text-lg font-bold absolute border-4 border-white rounded-full bg-blue-600 text-white px-4 py-2"
                                onClick={swap}
                            >
                                🔄 Swap
                            </button>
                        </div>
                        <div className="w-full mb-6">
                            <InputBox
                                label="To"
                                amount={converted_amount}
                                currency_options={options}
                                on_currency_change={(currency) => set_to(currency)}
                                amount_disabled={true}
                                selected_currency={to}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white px-6 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-800 transition"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
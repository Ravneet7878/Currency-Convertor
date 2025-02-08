import { useState, useEffect } from "react"

function useCurrency(currency) {
    const [data, set_data] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => set_data(response[currency]))
    }, [currency])

    return data
}

export default useCurrency
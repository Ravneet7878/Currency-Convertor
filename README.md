# **Currency Converter**

This is a simple **Currency Converter** built with **React**, which allows users to convert between different currencies in real-time. The application fetches the latest exchange rates using an API and provides a smooth and interactive user experience.

## Currency API

To fetch real-time exchange rates, use the following API endpoint:

```javascript
let api_link = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
```

## **Features:**
- **Real-time Currency Conversion**: Get accurate exchange rates instantly.
- **Swap Currencies**: Quickly switch between currencies with a single button click.
- **Responsive UI**: Built with Tailwind CSS for a modern and adaptive design.
- **Custom Hook for API Fetching**: Uses a custom hook to fetch currency data dynamically.
- **Input Validation**: Ensures proper values are entered for conversion.

## **Hooks Used in the Project:**

### **1. useState:**
`useState` is a React hook that allows you to add state to functional components. It returns an array with the state value and a function to update that value.

**Usage in this project:**
- `amount`: Stores the input amount to be converted.
- `from`: Stores the selected currency to convert **from**.
- `to`: Stores the selected currency to convert **to**.
- `converted_amount`: Stores the converted currency amount.

**Benefits:**
- Enables dynamic updates when the user changes values.
- Ensures the UI updates with the latest conversion results.

### **2. useEffect:**
`useEffect` is a React hook that runs side effects after a component renders. It is useful for handling API calls and other external interactions.

**Usage in this project:**
- Fetching the latest exchange rates whenever the `from` currency changes.

**Benefits:**
- Ensures data is updated dynamically without manual refresh.
- Reduces unnecessary API calls by only triggering when dependencies change.

### **3. useRef:**
`useRef` is a hook that returns a mutable object which persists across re-renders. It is commonly used for accessing DOM elements.

**Usage in this project:**
- Not used directly in this version but could be useful for managing focus on input fields.

## **Custom Hook: useCurrency**
A custom hook is created to fetch exchange rates dynamically.

```javascript
function useCurrency(currency) {
    const [data, set_data] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => set_data(response[currency]))
    }, [currency])

    return data;
}

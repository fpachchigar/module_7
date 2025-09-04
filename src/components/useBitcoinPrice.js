import { useReducer, useEffect } from "react";

// Define the initial state
const initialState = {
  price: null,
  loading: true,
  error: null,
};

// Define the reducer function
function bitcoinPriceReducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { price: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { price: null, loading: false, error: action.payload };
    case "FETCH_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}

// Custom hook to fetch Bitcoin price
export function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(bitcoinPriceReducer, initialState);

  useEffect(() => {
    let isMounted = true;

    const fetchBitcoinPrice = async () => {
      dispatch({ type: "FETCH_LOADING" });
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", payload: data.bitcoin[currency.toLowerCase()] });
        }
      } catch (error) {
        if (isMounted) {
          dispatch({ type: "FETCH_ERROR", payload: "Failed to fetch price" });
        }
      }
    };

    fetchBitcoinPrice();

    return () => {
      isMounted = false; // Cleanup to prevent state updates on unmounted components
    };
  }, [currency]);

  return state;
}
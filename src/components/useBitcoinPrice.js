import { useState, useEffect } from "react";

export function useBitcoinPrice(currency) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        if (isMounted) {
          setPrice(data.bitcoin[currency.toLowerCase()]);
        }
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchBitcoinPrice();

    return () => {
      isMounted = false;
    };
  }, [currency]);

  return price;
}

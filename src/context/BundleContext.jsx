import { createContext, useContext, useReducer, useEffect } from "react";
import data from "../data/data.json";

function bundleReducer(state, action) {
  switch (action.type) {
    case "LOAD_SAVED_SYSTEM":
      return { ...state, items: action.payload };

    case "UPDATE_QUANTITY": {
      const { product, variant, delta, category } = action.payload;

      const variantLabel = variant && variant.label ? variant.label : "default";
      const key = `${product.title}_${variantLabel}`;

      const currentItem = state.items[key];
      const currentQty = currentItem ? currentItem.quantity : 0;
      const newQty = Math.max(0, currentQty + delta);

      const newItems = { ...state.items };

      if (newQty === 0) {
        delete newItems[key];
      } else {
        newItems[key] = {
          id: product.title,
          variant: variantLabel === "default" ? null : variantLabel,
          title: product.title,
          price: product.price,
          oldPrice: product.oldPrice,
          image: product.image,
          isFree: product.isFree || false,
          category: category,
          quantity: newQty,
        };
      }

      return { ...state, items: newItems };
    }

    default:
      return state;
  }
}

const BundleContext = createContext();

export function BundleProvider({ children }) {
  const [state, dispatch] = useReducer(bundleReducer, { items: {} });

  useEffect(() => {
    const savedSystem = localStorage.getItem("wyze_saved_system");
    if (savedSystem) {
      dispatch({ type: "LOAD_SAVED_SYSTEM", payload: JSON.parse(savedSystem) });
    } else {
      dispatch({ type: "LOAD_SAVED_SYSTEM", payload: data.initialState });
    }
  }, []);

  const updateQuantity = (product, variant, delta, category) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { product, variant, delta, category },
    });
  };

  const saveForLater = () => {
    localStorage.setItem("wyze_saved_system", JSON.stringify(state.items));
    alert("Your system has been saved!");
  };

  const totals = Object.values(state.items).reduce(
    (acc, item) => {
      const currentTotal = item.isFree ? 0 : item.price * item.quantity;
      const originalPrice = item.oldPrice ? item.oldPrice : item.price;
      const originalTotal = originalPrice * item.quantity;

      acc.current += currentTotal;

      if (item.category !== "Shipping") {
        acc.original += originalTotal;
      }

      return acc;
    },
    { current: 0, original: 0, savings: 0 },
  );

  totals.savings = totals.original - totals.current;

  return (
    <BundleContext.Provider
      value={{
        items: state.items,
        updateQuantity,
        saveForLater,
        totals,
      }}
    >
      {children}
    </BundleContext.Provider>
  );
}

export function useBundle() {
  return useContext(BundleContext);
}

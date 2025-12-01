import React, { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckoutCart: () => {},
  hideCheckoutCart: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }
  function hideCart() {
    setUserProgress("");
  }
  function showCheckoutCart() {
    setUserProgress("checkout");
  }
  function hideCheckoutCart() {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckoutCart,
    hideCheckoutCart,
  };
  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContext;

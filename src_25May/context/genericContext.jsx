import React, { createContext, useState } from "react";

// Creating context objects using createContext().
export const ClientContext = createContext();

// The ContextProvider component wraps its children with the provider components in the component tree.
// It uses local state variables created with useState.
export function ContextProvider({ children }) {
  // Initializing state variables
  const [clientDetails, setClientDetails] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
  });

  return (
    // The component returns the context object which holds the state variables.
    // Nesting provider component to provide context values to nested components.
    <ClientContext.Provider value={{ clientDetails, setClientDetails }}>
      {children}
    </ClientContext.Provider>
  );
}

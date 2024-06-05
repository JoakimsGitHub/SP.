import React, { createContext, useState } from "react";

// Using the contest API for managing and sharing dynamic states across multiple components.
// An alternative to exporting importing variables from a module or passing down props through props drilling.

// Creating context objects using createContext().
// A context is 
export const ClientContext = createContext();

// The ContextProvider component wraps its children with the provider components in the component tree.
// It uses local state variables created with useState.
// Defining the context.
export function ContextProvider({ children }) {
  // Initializing local state variables.
  const [clientDetails, setClientDetails] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
  });

  return (
    // Accessing the provider property of the ClientContext object, which is a component.
    // So the ContextProvider component, that holds the state variable and updater function, returns another component.
    // The consumer components are nested within the provide component.
    // The ContextProvider is an object with the attached Provider component that has a props object containing the state and updater function.
    // Wrapping the consumer components within the provider component, as property of the context object, that use the provider component's state variable and updater function as props, passed as an object.
    <ClientContext.Provider value={{ clientDetails, setClientDetails }}>
      {children}
    </ClientContext.Provider>
  );
}

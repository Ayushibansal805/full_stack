// creator
// provider
// consumer

// Creator: createContext() creates a Context object to store/share data.
// Provider: <Context.Provider> provides the data/value to all child components. called when a service is called
// Consumer: A component that accesses/uses the Context value, usually with useContext().


// this is creator file

import { createContext } from 'react';

const UserContext = createContext();   // createContext() is a function that creates a new context object. It takes an optional default value as an argument and returns a context object with two properties: Provider and Consumer.

export default UserContext;
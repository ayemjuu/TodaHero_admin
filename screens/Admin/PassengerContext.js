import React, { createContext, useState } from 'react';

export const PassengerContext = createContext();

export const PassengerProvider = ({ children }) => {
  const [registeredPassengers, setRegisteredPassengers] = useState([]);

  const addRegisteredPassenger = (passenger) => {
    setRegisteredPassengers([...registeredPassengers, passenger]);
  };

  return (
    <PassengerContext.Provider value={{ registeredPassengers, addRegisteredPassenger }}>
      {children}
    </PassengerContext.Provider>
  );
};

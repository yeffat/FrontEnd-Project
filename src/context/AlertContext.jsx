import React, { createContext, useContext, useState, useCallback } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: "", visible: false });

  const showAlert = useCallback((message) => {
    setAlert({ message, visible: true });
    setTimeout(() => {
      setAlert({ message: "", visible: false });
    }, 3000);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert.visible && (
        <div
          style={{
            position: "fixed",
            top: 100,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#48bb78", // green-500
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            zIndex: 1000,
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {alert.message}
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

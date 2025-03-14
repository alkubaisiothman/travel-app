// UserContext.js
import { createContext, useState, useEffect } from 'react';

// Luo UserContext
export const UserContext = createContext();

// Luo UserProvider komponentti
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Esimerkki: Jos käytät Firebase-authia, voit asettaa käyttäjän täältä
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        setUser(firebaseUser);  // Käyttäjä on kirjautunut sisään
      } else {
        setUser(null);  // Käyttäjä ei ole kirjautunut sisään
      }
    });

    return () => unsubscribe();  // Siivoa kuuntelija komponentin purkautuessa
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

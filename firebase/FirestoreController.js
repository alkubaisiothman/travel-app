import { useEffect, useState } from "react";
import { db, LOC_REF } from "./Config";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";

export function useLocations() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const locationQuery = query(collection(db, LOC_REF));

        const unsubscribe = onSnapshot(locationQuery, querySnapshot => {
            setLocations(querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
        });

        return () => unsubscribe(); 
    }, []);

    return locations;
}

export function addNewLocation(name, description, rating) {
    addDoc(collection(db, LOC_REF), { name, description, rating })
        .catch(error => console.error("Error adding location: ", error.message));
}

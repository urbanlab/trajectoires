import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const pathName= useLocation()
    useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]); // Se déclenche à chaque fois que l'URL change

    return null;
}


import { useState, useEffect, useRef } from "react";

export default function useClickAway() {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null);
    const toggle = () => setIsOpen(!isOpen);
    const handleClickAway = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickAway);
        return () => {
            document.removeEventListener("mousedown", handleClickAway);
        };
    }, []);
}
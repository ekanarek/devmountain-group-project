import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectButton({ routePath, buttonText }) {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(routePath);
    }

    return (
        <button onClick={handleRedirect}>
            {buttonText}
        </button>
    )
}
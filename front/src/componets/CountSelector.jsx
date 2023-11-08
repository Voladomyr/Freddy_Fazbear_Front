import React, { useState, useEffect } from 'react';
import '../styles/CountSelector.css'

function CountSelector({ initialValue, onQuantityChange, dishId }) {
    const storageKey = `quantity_${dishId}`;
    const [quantity, setQuantity] = useState(initialValue);

    useEffect(() => {
        // Зчитуємо значення з локального сховища
        const storedQuantity = localStorage.getItem(storageKey);
        // Встановлюємо значення з локального сховища або initialValue як початкове значення
        setQuantity(storedQuantity ? parseInt(storedQuantity, 10) : initialValue);
  }, [initialValue, storageKey]);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.selectedOptions[0].value, 10);
    setQuantity(newQuantity);
    // Зберігаємо нове значення в локальному сховищі з ідентифікатором страви
    localStorage.setItem(storageKey, newQuantity.toString());
    onQuantityChange(newQuantity);
    };

    return (  
        <div className="select-container">

            <select className="select-element" value={quantity} onChange={handleQuantityChange}>
                <option className="value" value={1}>1</option>
                <option className="value" value={2}>2</option>
                <option className="value" value={3}>3</option>
                <option className="value" value={4}>4</option>
                <option className="value" value={5}>5</option>
                <option className="value" value={6}>6</option>
                <option className="value" value={7}>7</option>
                <option className="value" value={8}>8</option>
                <option className="value" value={9}>9</option>
                <option className="value" value={10}>10</option>
                {/* Додайте інші значення, які вам потрібні */}
            </select>
            <label className="select-label">
                <svg className="galochka" width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0736 16.4199L0.59503 5.22919C-0.198343 4.45571 -0.198343 3.20498 0.59503 2.43974L2.5025 0.580106C3.29587 -0.193369 4.57877 -0.193369 5.36371 0.580106L13.5 8.51234L21.6363 0.580106C22.4297 -0.193369 23.7126 -0.193369 24.4975 0.580106L26.405 2.43974C27.1983 3.21321 27.1983 4.46394 26.405 5.22919L14.9264 16.4199C14.1499 17.1934 12.867 17.1934 12.0736 16.4199Z" fill="#797575" />
                </svg>

            </label>

        </div>
    );
}

export default CountSelector;

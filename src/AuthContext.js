import React, { createContext, useState } from 'react';

// Створюємо хмару даних
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Зберігаємо токен у стані та в пам'яті браузера
    const [token, setToken] = useState(localStorage.getItem('token'));

    const login = (newToken) => {
        localStorage.setItem('token', newToken); // Запам'ятовуємо
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token'); // Забуваємо
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
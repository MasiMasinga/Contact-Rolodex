import { useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const register = async (email, password) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setUser({ email });
        } catch (error) {
            setError('Registration failed. Please try again.');
        }
    };

    const login = async (email, password) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setUser({ email });
        } catch (error) {
            setError('Login failed. Please try again.');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return { user, error, register, login, logout };
};

export default useAuth;

// src/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setIsLoading(true);

        // --- CORREÇÃO AQUI: Aponte para a porta 3000 do seu backend ---
        const BACKEND_URL = 'http://localhost:8080'; // <-- Mude de 8080 para 3000
        const LOGIN_ENDPOINT = '/auth/login'; // <-- Confirme este endpoint (você usa '/auth' para authRoutes)

        try {
            const response = await fetch(`${BACKEND_URL}${LOGIN_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login bem-sucedido:', data);
                if (data.token) {
                    localStorage.setItem('authToken', data.token);
                    setMessage({ type: 'success', text: 'Login realizado com sucesso!' });
                    navigate('/minha-conta');
                } else {
                    setMessage({ type: 'error', text: 'Login bem-sucedido, mas token não recebido.' });
                }
            } else {
                console.error('Erro no login:', data);
                setMessage({ type: 'error', text: data.message || 'Erro no login. Verifique suas credenciais.' });
            }
        } catch (error) {
            console.error('Erro de conexão ao tentar fazer login:', error);
            setMessage({ type: 'error', text: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegisterClick = () => {
        navigate('/cadastro');
    };

    return (
        <div className='container_principal_login'>
            <div className='container_login'>
                <h1 className='texto_login'>Seja bem vindo!</h1>
                {message && (
                    <div className={`message ${message.type}`}>
                        {message.text}
                    </div>
                )}
                <form onSubmit={handleLoginSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input
                        className='username'
                        type='text'
                        placeholder='Usuário ou E-mail'
                        value={username}
                        onChange={handleUsernameChange}
                        required
                        disabled={isLoading}
                    />
                    <input
                        className='password'
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        disabled={isLoading}
                    />
                    <button type='submit' className='btn_login' disabled={isLoading}>
                        {isLoading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
                <a className='link_login_cadastro' href='#'>Esqueceu a senha?</a>
                <a className='link_login_cadastro' onClick={handleRegisterClick} style={{ cursor: 'pointer' }}>
                    Cadastre-se
                </a>
            </div>
        </div>
    );
}

export default Login;

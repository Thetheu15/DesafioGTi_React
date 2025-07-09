// src/Cadastro.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastro.css';

function Cadastro() {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const BACKEND_URL = 'http://localhost:8080'; 
    const REGISTER_ENDPOINT = '/auth/register'; 

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setIsLoading(true);

        if (!nomeCompleto || !email || !senha || !confirmarSenha) {
            setMessage({ type: 'error', text: 'Por favor, preencha todos os campos.' });
            setIsLoading(false);
            return;
        }
        if (senha !== confirmarSenha) {
            setMessage({ type: 'error', text: 'As senhas não coincidem.' });
            setIsLoading(false);
            return;
        }
        if (senha.length < 6) {
            setMessage({ type: 'error', text: 'A senha deve ter no mínimo 6 caracteres.' });
            setIsLoading(false);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage({ type: 'error', text: 'Formato de e-mail inválido.' });
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}${REGISTER_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nomeCompleto, email, password: senha }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Cadastro bem-sucedido:', data);
                setMessage({ type: 'success', text: data.message || 'Cadastro realizado com sucesso! Agora você pode fazer login.' });
                setNomeCompleto('');
                setEmail('');
                setSenha('');
                setConfirmarSenha('');
                navigate('/login');
            } else {
                console.error('Erro no cadastro:', data);
                setMessage({ type: 'error', text: data.message || 'Erro no cadastro. Tente novamente.' });
            }
        } catch (error) {
            console.error('Erro de conexão ao tentar cadastrar:', error);
            setMessage({ type: 'error', text: 'Erro de conexão. Tente novamente mais tarde.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleLoginLinkClick = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className='cadastro-page'>
            <div className='cadastro-container'>
                <h1 className='cadastro-title'>Crie Sua Conta GameForge!</h1>
                {message && (
                    <div className={`message ${message.type}`}>
                        {message.text}
                    </div>
                )}
                <form onSubmit={handleRegisterSubmit}>
                    <div className='cadastro-input-group'>
                        <label htmlFor='nomeCompleto' className='cadastro-label'>Nome Completo</label>
                        <input
                            type='text'
                            id='nomeCompleto'
                            name='nomeCompleto'
                            className='cadastro-input'
                            placeholder='Seu nome e sobrenome'
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.target.value)}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className='cadastro-input-group'>
                        <label htmlFor='email' className='cadastro-label'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='cadastro-input'
                            placeholder='seuemail@exemplo.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className='cadastro-input-group'>
                        <label htmlFor='senha' className='cadastro-label'>Senha</label>
                        <input
                            type='password'
                            id='senha'
                            name='senha'
                            className='cadastro-input'
                            placeholder='Mínimo 6 caracteres'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className='cadastro-input-group'>
                        <label htmlFor='confirmarSenha' className='cadastro-label'>Confirmar Senha</label>
                        <input
                            type='password'
                            id='confirmarSenha'
                            name='confirmarSenha'
                            className='cadastro-input'
                            placeholder='Repita sua senha'
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <button type='submit' className='cadastro-button' disabled={isLoading}>
                        {isLoading ? 'Cadastrando...' : 'Cadastrar Agora'}
                    </button>
                </form>
                <a href='/login' className='cadastro-link' onClick={handleLoginLinkClick}>
                    Já tem uma conta? Faça Login
                </a>
            </div>
        </div>
    );
}

export default Cadastro;

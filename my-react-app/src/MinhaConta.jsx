// src/MinhaConta.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './minhaconta.css';

function MinhaConta() {
    const [userData, setUserData] = useState({
        nome: '',
        email: '',
        bio: '',
        dataEntrada: '',
        cursosConcluidos: [],
        cursosEmProgresso: [],
    });

    const [isEditing, setIsEditing] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    // --- CORREÇÃO AQUI: Aponte para a porta 3000 do seu backend ---
    const BACKEND_URL = 'http://localhost:8080'; // <-- Mude de 8080 para 3000
    const USER_ME_ENDPOINT = '/users/me'; // <-- Confirme este endpoint
    const CHANGE_PASSWORD_ENDPOINT = '/users/me/password'; // <-- Confirme este endpoint

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('authToken');
                if (!token) {
                    setMessage({ type: 'error', text: 'Sessão expirada. Faça login novamente.' });
                    navigate('/login');
                    return;
                }

                const response = await fetch(`${BACKEND_URL}${USER_ME_ENDPOINT}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData({
                        nome: data.name || '',
                        email: data.email || '',
                        bio: data.bio || '',
                        dataEntrada: data.dataCriacao ? new Date(data.dataCriacao).toLocaleDateString('pt-BR') : 'N/A',
                        cursosConcluidos: data.cursosConcluidos || [],
                        cursosEmProgresso: data.cursosEmProgresso || [],
                    });
                    setMessage(null);
                } else {
                    const errorData = await response.json();
                    setMessage({ type: 'error', text: errorData.message || 'Erro ao carregar dados do usuário.' });
                    if (response.status === 401 || response.status === 403) {
                         localStorage.removeItem('authToken');
                         navigate('/login');
                    }
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setMessage({ type: 'error', text: 'Erro de conexão. Tente novamente mais tarde.' });
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        if (name === 'currentPassword') setCurrentPassword(value);
        if (name === 'newPassword') setNewPassword(value);
        if (name === 'confirmNewPassword') setConfirmNewPassword(value);
    };

    const validateUserData = () => {
        if (!userData.nome.trim() || !userData.email.trim()) {
            setMessage({ type: 'error', text: 'Nome e Email são obrigatórios.' });
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userData.email)) {
            setMessage({ type: 'error', text: 'Formato de e-mail inválido.' });
            return false;
        }
        return true;
    };

    const validatePasswordChange = () => {
        if (!currentPassword || !newPassword || !confirmNewPassword) {
            setMessage({ type: 'error', text: 'Preencha todos os campos de senha.' });
            return false;
        }
        if (newPassword.length < 6) {
            setMessage({ type: 'error', text: 'A nova senha deve ter no mínimo 6 caracteres.' });
            return false;
        }
        if (newPassword !== confirmNewPassword) {
            setMessage({ type: 'error', text: 'A nova senha e a confirmação não coincidem.' });
            return false;
        }
        return true;
    };

    const handleSaveUserData = async () => {
        if (!validateUserData()) return;

        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                setMessage({ type: 'error', text: 'Sessão expirada. Faça login novamente.' });
                navigate('/login');
                return;
            }

            const { dataEntrada, cursosConcluidos, cursosEmProgresso, ...dataToUpdate } = userData;

            const response = await fetch(`${BACKEND_URL}${USER_ME_ENDPOINT}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(dataToUpdate),
            });

            if (response.ok) {
                setMessage({ type: 'success', text: 'Informações atualizadas com sucesso!' });
                setIsEditing(false);
            } else {
                const errorData = await response.json();
                setMessage({ type: 'error', text: errorData.message || 'Erro ao atualizar informações.' });
                 if (response.status === 401 || response.status === 403) {
                     localStorage.removeItem('authToken');
                     navigate('/login');
                }
            }
        } catch (error) {
            console.error('Erro ao salvar dados:', error);
            setMessage({ type: 'error', text: 'Erro de conexão. Tente novamente mais tarde.' });
        }
    };

    const handleSavePassword = async () => {
        if (!validatePasswordChange()) return;

        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                setMessage({ type: 'error', text: 'Sessão expirada. Faça login novamente.' });
                navigate('/login');
                return;
            }

            const response = await fetch(`${BACKEND_URL}${CHANGE_PASSWORD_ENDPOINT}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ currentPassword, newPassword }),
            });

            if (response.ok) {
                setMessage({ type: 'success', text: 'Senha alterada com sucesso!' });
                setCurrentPassword('');
                setNewPassword('');
                setConfirmNewPassword('');
            } else {
                const errorData = await response.json();
                setMessage({ type: 'error', text: errorData.message || 'Erro ao alterar senha.' });
                 if (response.status === 401 || response.status === 403) {
                     localStorage.removeItem('authToken');
                     navigate('/login');
                }
            }
        } catch (error) {
            console.error('Erro ao alterar senha:', error);
            setMessage({ type: 'error', text: 'Erro de conexão. Tente novamente mais tarde.' });
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setMessage(null);
    };

    return (
        <div className='minha-conta-page'>
            <div className='minha-conta-container'>
                <h1 className='minha-conta-title'>Minha Conta</h1>

                {message && (
                    <div className={`message ${message.type}`}>
                        {message.text}
                    </div>
                )}

                <div className='form-section'>
                    <h2 className='section-title'>Informações Pessoais</h2>
                    <div className='input-group'>
                        <label htmlFor='nome' className='label-conta'>Nome:</label>
                        <input
                            type='text'
                            id='nome'
                            name='nome'
                            className='input-conta'
                            value={userData.nome}
                            onChange={handleChange}
                            readOnly={!isEditing}
                            placeholder='Nome completo'
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email' className='label-conta'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='input-conta'
                            value={userData.email}
                            onChange={handleChange}
                            readOnly={!isEditing}
                            placeholder='Seu endereço de e-mail'
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='bio' className='label-conta'>Bio:</label>
                        <textarea
                            id='bio'
                            name='bio'
                            className='input-conta'
                            value={userData.bio}
                            onChange={handleChange}
                            readOnly={!isEditing}
                            placeholder='Fale um pouco sobre você...'
                            rows='3'
                        ></textarea>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='dataEntrada' className='label-conta'>Membro desde:</label>
                        <input
                            type='text'
                            id='dataEntrada'
                            name='dataEntrada'
                            className='input-conta'
                            value={userData.dataEntrada}
                            readOnly
                        />
                    </div>

                    <div className='button-group'>
                        {!isEditing ? (
                            <button className='btn-conta' onClick={() => setIsEditing(true)}>
                                Editar Informações
                            </button>
                        ) : (
                            <>
                                <button className='btn-conta' onClick={handleSaveUserData}>
                                    Salvar Alterações
                                </button>
                                <button className='btn-conta cancel' onClick={handleCancelEdit}>
                                    Cancelar
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className='form-section'>
                    <h2 className='section-title'>Cursos</h2>
                    <div className='input-group'>
                        <label className='label-conta'>Cursos em Progresso:</label>
                        {userData.cursosEmProgresso && userData.cursosEmProgresso.length > 0 ? (
                            <ul className='course-list'>
                                {userData.cursosEmProgresso.map((curso, index) => (
                                    <li key={index} className='course-item'>
                                        {curso.nome} - {curso.progresso}%
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className='no-courses-message'>Nenhum curso em progresso no momento.</p>
                        )}
                    </div>
                    <div className='input-group'>
                        <label className='label-conta'>Cursos Concluídos:</label>
                        {userData.cursosConcluidos && userData.cursosConcluidos.length > 0 ? (
                            <ul className='course-list'>
                                {userData.cursosConcluidos.map((curso, index) => (
                                    <li key={index} className='course-item'>
                                        {curso.nome} (Concluído em: {curso.dataConclusao ? new Date(curso.dataConclusao).toLocaleDateString('pt-BR') : 'N/A'})
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className='no-courses-message'>Nenhum curso concluído ainda.</p>
                        )}
                    </div>
                </div>

                <div className='form-section'>
                    <h2 className='section-title'>Alterar Senha</h2>
                    <div className='input-group'>
                        <label htmlFor='currentPassword' className='label-conta'>Senha Atual:</label>
                        <input
                            type='password'
                            id='currentPassword'
                            name='currentPassword'
                            className='input-conta'
                            value={currentPassword}
                            onChange={handlePasswordChange}
                            placeholder='Sua senha atual'
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='newPassword' className='label-conta'>Nova Senha:</label>
                        <input
                            type='password'
                            id='newPassword'
                            name='newPassword'
                            className='input-conta'
                            value={newPassword}
                            onChange={handlePasswordChange}
                            placeholder='Mínimo 6 caracteres'
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='confirmNewPassword' className='label-conta'>Confirmar Nova Senha:</label>
                        <input
                            type='password'
                            id='confirmNewPassword'
                            name='confirmNewPassword'
                            className='input-conta'
                            value={confirmNewPassword}
                            onChange={handlePasswordChange}
                            placeholder='Repita a nova senha'
                        />
                    </div>
                    <div className='button-group'>
                        <button className='btn-conta' onClick={handleSavePassword}>
                            Alterar Senha
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MinhaConta;

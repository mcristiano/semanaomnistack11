import React from 'react';
import useMultiState from 'react-multi-state';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    const [{title, description, value}, , setters ] = useMultiState({
        title: '',
        description: '',
        value: ''
    })

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');


        } catch (error) {
            alert('Erro ao cadatrar, tente novamente !');
        }

    }

  return (
      <div className="new-incident-container">
        <div className="content">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastro</h1>
                <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e => setters.setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setters.setDescription(e.target.value)}
                />

                <input
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => setters.setValue(e.target.value)}
                />



                <button
                    className='button'
                    type='submit'>Cadastrar</button>




            </form>




        
        </div>
      </div>
    )
}

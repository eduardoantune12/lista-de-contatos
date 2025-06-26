import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/contactsSlice';

const Form = styled.form`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 8px;
`;

const Button = styled.button`
    padding: 8px 16px;
    background: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
`;

const ContactForm = ({ editData, onFinishEdit }) => {
    const [contact, setContact] = useState({ nome: '', email: '', telefone: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        if (editData) setContact(editData);
    }, [editData]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editData) {
            dispatch(editContact({ id: editData.id, updatedContact: contact }));
            onFinishEdit();
        } else {
            dispatch(addContact(contact));
        }
        setContact({ nome: '', email: '', telefone: '' });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                name="nome"
                placeholder="Nome completo"
                value={contact.nome}
                onChange={handleChange}
                required
            />
            <Input
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
                required
            />
            <Input
                name="telefone"
                placeholder="Telefone"
                value={contact.telefone}
                onChange={handleChange}
                required
            />
            <Button type="submit">{editData ? 'Salvar' : 'Adicionar'}</Button>
        </Form>
    );
};

export default ContactForm;
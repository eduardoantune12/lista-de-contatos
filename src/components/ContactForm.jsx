import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/contactsSlice';
import { Form, Input, Button } from '../styles/FormStyle';

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatPhone(value) {
    value = value.replace(/\D/g, '');
    value = value.slice(0, 11);

    if (value.length > 6) {
        return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
        return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
        return `(${value}`;
    }
    return value;
}

const ContactForm = ({ editData, onFinishEdit }) => {
    const [contact, setContact] = useState({ nome: '', email: '', telefone: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        if (editData) setContact(editData);
    }, [editData]);

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "telefone") {
            value = formatPhone(value);
        }
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(contact.email)) {
            alert('Digite um email válido!');
            return;
        }

        const cleanPhone = contact.telefone.replace(/\D/g, '');
        if (cleanPhone.length !== 11) {
            alert('O telefone deve conter 11 números (incluindo DDD).');
            return;
        }

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
                type="email"
            />
            <Input
                name="telefone"
                placeholder="Telefone"
                value={contact.telefone}
                onChange={handleChange}
                required
                maxLength={15}
            />
            <Button type="submit">{editData ? 'Salvar' : 'Adicionar'}</Button>
        </Form>
    );
};

export default ContactForm;
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeContact } from '../redux/contactsSlice';
import ContactForm from './ContactForm';

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const Item = styled.li`
    background: #fff;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.button`
    margin-left: 10px;
`;

const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    const [editData, setEditData] = useState(null);

    return (
        <div>
            <ContactForm editData={editData} onFinishEdit={() => setEditData(null)} />
            <List>
                {contacts.map(contact => (
                    <Item key={contact.id}>
                        <span>
                            <strong>{contact.nome}</strong> | {contact.email} | {contact.telefone}
                        </span>
                        <span>
                            <Button onClick={() => setEditData(contact)}>Editar</Button>
                            <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
                        </span>
                    </Item>
                ))}
            </List>
        </div>
    );
};

export default ContactList;
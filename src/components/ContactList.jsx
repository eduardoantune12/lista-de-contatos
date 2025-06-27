import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import ContactForm from './ContactForm';
import {
    List,
    Item,
    ContactInfo,
    ButtonGroup,
    Button
} from '../styles/ListStyle';

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
                        <ContactInfo><strong>{contact.nome}</strong></ContactInfo>
                        <ContactInfo>{contact.email}</ContactInfo>
                        <ContactInfo>{contact.telefone}</ContactInfo>
                        <ButtonGroup>
                            <Button variant="edit" onClick={() => setEditData(contact)}>Editar</Button>
                            <Button variant="remove" onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
                        </ButtonGroup>
                    </Item>
                ))}
            </List>
        </div>
    );
};

export default ContactList;
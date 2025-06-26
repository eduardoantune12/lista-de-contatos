import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './styles/GlobalStyle';
import ContactList from './components/ContactList';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div style={{ maxWidth: 600, margin: '40px auto', background: '#fff', padding: '30px', borderRadius: 8 }}>
        <h2>Lista de Contatos</h2>
        <ContactList />
      </div>
    </Provider>
  );
}

export default App;
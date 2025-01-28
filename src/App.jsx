import { useState } from 'react';
import './App.css';
import importedContacts from './assets/contacts.json';
import Phonebook from './Phonebook';

const sortedContacts = importedContacts.sort((a, b) =>
  a.lastName.localeCompare(b.lastName)
);

function App() {
  const [contacts] = useState(sortedContacts);
  return (
    <>
      <main>
        <h1>CTD Phone Book</h1>
        <Phonebook contacts={contacts} />
      </main>
    </>
  );
}

export default App;

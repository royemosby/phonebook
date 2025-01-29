import { useState } from 'react';
import Page from './Page';
import Pagination from './Pagination';
import { useEffect } from 'react';

const baseUrl = 'http://localhost:3000/contacts';
const entriesPerPage = 20;

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `${baseUrl}?_page=${currentPage}&_per_page=${entriesPerPage}`
        );
        const data = await response.json();
        setContacts(data.data);
        setTotalPages(data.pages);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Page contacts={contacts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
};

export default Phonebook;

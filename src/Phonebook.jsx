import { useState } from 'react';
import Page from './Page';
import Pagination from './Pagination';

const Phonebook = ({ contacts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 20;

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = contacts.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(contacts.length / entriesPerPage);

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
      <Page contacts={currentEntries} />
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

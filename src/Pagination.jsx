import styles from './Pagination.module.css';

const Pagination = ({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}) => {
  return (
    <nav className={styles.pagination}>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={styles.buttons}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={styles.buttons}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;

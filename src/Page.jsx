import styles from './Page.module.css';

const Page = ({ contacts }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((entry) => (
          <tr className={styles.tr} key={entry.id}>
            <td className={styles.td}>{entry.firstName}</td>
            <td className={styles.td}>{entry.lastName}</td>
            <td className={styles.td}>{entry.email}</td>
            <td className={styles.td}>{entry.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Page;

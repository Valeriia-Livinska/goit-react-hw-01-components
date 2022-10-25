import css from './TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
      <tr className={css.tr}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
};

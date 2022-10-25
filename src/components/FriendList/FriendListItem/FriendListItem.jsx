import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={css.status}>
        <div className={isOnline ? css.online : css.offline}></div>
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <li className="element">
      <img
        className="element__img"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className="element__btn-like"
            type="button"
            aria-label="Нравится"
          ></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>

        <button
          className="element__btn-delete"
          type="button"
          aria-label="Удалить"
        ></button>
      </div>
    </li>
  )
}

export default Card

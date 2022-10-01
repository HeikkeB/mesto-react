function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__edit-avatar" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src="#" alt="аватар" />
        </button>
        <div className="profile__info">
          <h1 className="profile__username">Jac Iv</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__btn-edit"
            type="button"
            aria-label="Редактирование"
          ></button>
          <p className="profile__description">FF</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__btn-add"
          type="button"
          aria-label="Добавить фото"
        ></button>
      </section>

      <section className="elements" aria-label="Фотографии">
        <ul className="elements__list"></ul>
      </section>
    </main>
  )
}

export default Main

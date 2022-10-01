import api from '../utils/Api'
import React from 'react'

function Main(props) {
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((evt) => {
        setUserName(evt.name)
        setUserDescription(evt.about)
        setUserAvatar(evt.avatar)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__edit-avatar" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
        </button>
        <div className="profile__info">
          <h1 className="profile__username">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__btn-edit"
            type="button"
            aria-label="Редактирование"
          ></button>
          <p className="profile__description">{userDescription}</p>
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

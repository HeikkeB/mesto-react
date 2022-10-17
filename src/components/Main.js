import api from '../utils/Api'
import React from 'react'
import Card from './Card'
import { currentUserContext } from '../contexts/CurrentUserContext'

function Main(props) {
  //const [userName, setUserName] = React.useState('')
  //const [userDescription, setUserDescription] = React.useState('')
  //const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])
  const currentUser = React.useContext(currentUserContext)

  React.useEffect(() => {
    // api
    // .getUserInfo()
    // .then((evt) => {
    //   setUserName(evt.name)
    //   setUserDescription(evt.about)
    //   setUserAvatar(evt.avatar)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
    api
      .getInitialCards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id)

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((c) => (c._id === card._id ? false : true))
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__edit-avatar" onClick={props.onEditAvatar}>
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="аватар"
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__username">{currentUser.name}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__btn-edit"
            type="button"
            aria-label="Редактирование"
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__btn-add"
          type="button"
          aria-label="Добавить фото"
        ></button>
      </section>

      <section className="elements" aria-label="Фотографии">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main

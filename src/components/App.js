import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import AvatarPopup from './AvatarPopup'
import EditProfilePopup from './EditProfilePopup'
import AddPlacePopup from './AddPlacePopup'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState('')
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState('')
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState('')
  const [selectedCard, setSelectedCard] = React.useState('')

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen('')
    setEditProfilePopupOpen('')
    setAddPlacePopupOpen('')
    setSelectedCard('')
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <AvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  )
}

export default App

import PopupWithForm from './PopupWithForm'

function AvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      container="popup__container"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      children={
        <section className="popup__section-avatar" aria-label="строка ввода">
          <input
            id="avatar"
            type="url"
            className="popup__input popup__input_link"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error" id="avatar-error"></span>
        </section>
      }
    />
  )
}

export default AvatarPopup

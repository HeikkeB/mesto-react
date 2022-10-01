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
        <section class="popup__section-avatar" aria-label="строка ввода">
          <input
            id="avatar"
            type="url"
            class="popup__input popup__input_link"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span class="popup__input-error" id="avatar-error"></span>
        </section>
      }
    />
  )
}

export default AvatarPopup

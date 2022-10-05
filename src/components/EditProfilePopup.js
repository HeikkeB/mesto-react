import PopupWithForm from './PopupWithForm'

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="add"
      container="popup__container"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <>
        <section className="popup__section" aria-label="строка ввода">
          <input
            type="text"
            id="username"
            className="popup__input popup__input_name"
            name="user"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error" id="username-error"></span>
        </section>
        <section className="popup__section" aria-label="строка ввода">
          <input
            type="text"
            id="userinfo"
            className="popup__input popup__input_profession"
            name="profession"
            placeholder="Занятие"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error" id="userinfo-error"></span>
        </section>
      </>
    </PopupWithForm>
  )
}

export default EditProfilePopup

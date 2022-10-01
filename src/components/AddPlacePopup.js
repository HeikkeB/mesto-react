import PopupWithForm from './PopupWithForm'

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      container="popup__container"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      children={
        <>
          <section className="popup__section" aria-label="строка ввода">
            <input
              type="text"
              id="name"
              className="popup__input popup__input_place"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error" id="name-error"></span>
          </section>
          <section className="popup__section" aria-label="строка ввода">
            <input
              id="link"
              type="url"
              className="popup__input popup__input_link"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error" id="link-error"></span>
          </section>
        </>
      }
    />
  )
}

export default AddPlacePopup

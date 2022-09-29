import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />

        <Main />

        <Footer />

        <div className="popup popup_type_image-add">
          <div className="popup__container">
            <button
              className="popup__closed popup__closed_add"
              type="button"
              aria-label="Закрыть"
            ></button>
            <h2 className="popup__title">Новое место</h2>
            <form
              className="popup__form popup__form_add"
              name="form"
              novalidate
            >
              <section className="popup__section" aria-label="строка ввода">
                <input
                  type="text"
                  id="name"
                  className="popup__input popup__input_place"
                  name="name"
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
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
              <button className="popup__submit-btn" type="submit" disabled>
                Создать
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_profile-edit">
          <div className="popup__container">
            <button
              className="popup__closed popup__closed_edit"
              type="button"
              aria-label="Закрыть"
            ></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form
              className="popup__form popup__form_edit"
              action="#"
              name="form"
              method="post"
              novalidate
            >
              <section className="popup__section" aria-label="строка ввода">
                <input
                  type="text"
                  id="username"
                  className="popup__input popup__input_name"
                  name="user"
                  placeholder="Имя"
                  minlength="2"
                  maxlength="40"
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
                  minlength="2"
                  maxlength="200"
                  required
                />
                <span className="popup__input-error" id="userinfo-error"></span>
              </section>
              <button className="popup__submit-btn" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_gallery-background popup_type_image-gallery">
          <div className="popup__gallery">
            <button
              className="popup__closed popup__closed_gallery"
              type="button"
              aria-label="Закрыть"
            ></button>
            <img className="popup__gallery-img" />
            <p className="popup__gallery-description"></p>
          </div>
        </div>

        <div className="popup popup_type_confirm">
          <div className="popup__container">
            <button
              className="popup__closed popup__closed_confirm"
              type="button"
              aria-label="Закрыть"
            ></button>
            <h2 className="popup__title popup__title-confirm">Вы уверены?</h2>
            <form className="popup__form">
              <button
                className="popup__submit-btn popup__submit-btn_type_confirm"
                type="submit"
              >
                Да
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_avatar">
          <div class="popup__container">
            <button
              class="popup__closed popup__closed_avatar"
              type="button"
              aria-label="Закрыть"
            ></button>
            <h2 class="popup__title">Обновить аватар</h2>
            <form
              class="popup__form popup__form_avatar"
              name="form"
              method="post"
              novalidate
            >
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
              <button
                class="popup__submit-btn popup__submit-btn_type_avatar"
                type="submit"
                disabled
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <template class="template">
          <li class="element">
            <img class="element__img" />
            <div class="element__description">
              <h2 class="element__title"></h2>
              <div class="element__like-container">
                <button
                  class="element__btn-like"
                  type="button"
                  aria-label="Нравится"
                ></button>
                <p class="element__like-counter">0</p>
              </div>

              <button
                class="element__btn-delete"
                type="button"
                aria-label="Удалить"
              ></button>
            </div>
          </li>
        </template>
      </div>
    </div>
  )
}

export default App
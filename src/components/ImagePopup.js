function ImagePopup() {
  return (
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
  )
}

export default ImagePopup

export default function ImagePopup({card, isOpen, onClose}) {
    return(
    <div className="popup__contanier">
        <div className={`popup image-popup ${isOpen && 'popup_opened'}`}>
        <div className="image-popup__contanier">
          <button
            className="popup__cls-btn"
            type="button"
            onClick={onClose}
          />
          <figure className="image-popup__box-image">
            <img
              src={card.link}
              alt={card.name}
              className="image-popup__picture"
            />
            <figcaption className="image-popup__caption">{card.name}</figcaption>
          </figure>
        </div>
      </div>
      </div>
    )
}
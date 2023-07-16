export default function PopupWithForm({name, title, buttonName, children, isOpen, onClose}) {
    return(
<div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
    <div className="popup__contanier">
      <button
        className="popup__cls-btn"
        type="button"
        aria-label="Закрыть окно"
        onClick={onClose}/>
      <h2 className="popup__title">{title}</h2>
      <form
        className="popup__form"
        name={name}
        noValidate="">
    {children}
       <button className="popup__sbt-btn" type="submit" aria-label="Сохранить">
        {buttonName||'Сохранить'}
        </button>
      </form>
    </div>
  </div>
    )
}
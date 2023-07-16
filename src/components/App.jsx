import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "./ImagePopup/ImagePopup.jsx";
import { useState } from "react";



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isRunImagePopupOpen, setIsRunImagePopupOpen] = useState(false)
  // console.log(selectedCard)

  function handleEditProfileClick () {
          setIsEditProfilePopupOpen(true)
    }

  function handleAddPlaceClick () {
          setIsAddPlacePopupOpen(true)
    }

  function handleEditAvatarClick () {
          setIsEditAvatarPopupOpen(true)
    }

  // function handleDeleteCardClick () {
          
  //   }

  function handleCardClick (card) {
    setSelectedCard(card)
    setIsRunImagePopupOpen(true)
    }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsRunImagePopupOpen(false)
  }


  return (
    <div className="page__contanier">

      <Header/>

      <Main
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onCardClick = {handleCardClick}
      />

      <Footer/>

      <PopupWithForm 
          name='profile-popup'
          title='Редактировать профиль'
          isOpen ={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        > 
          <input
            type="text"
            className="popup__input popup__input_chg_nickname"
            placeholder="Никнейм"
            defaultValue=""
            name="nickname"
            id="name"
            minLength={2}
            maxLength={40}
            required=""
          />
          <span className="popup__err popup__err_type_name" />
          <input
            type="text"
            className="popup__input popup__input_chg_activity"
            placeholder="Деятельность"
            defaultValue=""
            name="activity"
            id="activity"
            minLength={2}
            maxLength={200}
            required=""
          />
          <span className="popup__err popup__err_type_activity" />
      </PopupWithForm>

      <PopupWithForm 
          name='place-popup'
          title='Новое место'
          buttonName='Создать'
          isOpen ={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        > 
          <input
            type="text"
            name="caption"
            id="caption"
            className="popup__input popup__input_chg_caption"
            placeholder="Название"
            defaultValue=""
            minLength={2}
            maxLength={30}
            required=""
          />
          <span className="popup__err popup__err_type_caption" />
          <input
            type="url"
            name="link"
            id="link"
            className="popup__input popup__input_chg_url"
            placeholder="Ссылка на картинку"
            defaultValue=""
            required=""
          />
          <span className="popup__err popup__err_type_link" />
      </PopupWithForm>

      <PopupWithForm 
          name='edit-avatar'
          title='Обновить аватар'
          isOpen ={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        > 
          <input
            type="url"
            name="avatar"
            id="avatar"
            className="popup__input popup__input_el_avatar"
            placeholder="Ссылка на картинку"
            defaultValue=""
            required=""
          />
          <span className="popup__err popup__err_type_avatar" />
      </PopupWithForm>

      <PopupWithForm 
          name='card-delete'
          title='Вы уверены?'
          buttonName='Да'
      > </PopupWithForm>

      <ImagePopup
          card={selectedCard}
          isOpen={isRunImagePopupOpen}
          onClose={closeAllPopups}
      />
</div>
  );
}

export default App;

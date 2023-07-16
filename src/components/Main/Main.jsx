import { useEffect, useState} from "react"
import api from "../../utils/api"
import Card from "../Card/Card.jsx"


export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = useState('')
    const [userDescription , setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])
   

    useEffect(() => {
            /*массив асинхронных методов создания карточек при загрузке страницы*/
        Promise.all([api.getInfo(),api.getCards()])
        /*деструкруризация */ /*полученную с сервера информауцию положить на страницу */
        .then(([dataUser, dataCard]) => { 
            setUserName(dataUser.name)
            setUserDescription(dataUser.about)
            setUserAvatar(dataUser.avatar)
            dataCard.forEach(element => element.mineId = dataUser._id) 
            setCards(dataCard)
            })
            },[])


    return(
    <main className="content">
        <section className="profile" aria-label="Данные владельца страницы">
        <div className="profile__container">
            <button
                className="profile__avatar-overlay" 
                type="button"
                onClick={onEditAvatar}
            >
            <img src={userAvatar} alt="#" className="profile__avatar" />
            </button>
            <div className="profile__info">
                <h1 className="profile__title">{userName}</h1>
                <button className="profile__edit-btn" type="button" onClick={onEditProfile} />
            <p className="profile__subtitle" >{userDescription}</p>
            </div>
        </div>
            <button className="profile__add-btn" type="button" onClick={onAddPlace} />
        </section>
        <section className="elements">
        
            {cards.map(data => {
                return (
                    <div className="elements__list" key={data._id}> 
                        <Card card={data} onCardClick={onCardClick}/>
                    </div>
                )
            })}
        </section>
    </main>
    )

    

}
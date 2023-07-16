export default function Card({card, onCardClick}) {
    return(
        <article className="element">
                <button className="element__trh-btn" type="button" aria-label="Удалить" />
            <img src={card.link} alt={card.name} className="element__image" 
            onClick= {() => onCardClick({link:card.link, name:card.name})}/>
            <div className="element__description">
                <h2 className="element__title">{card.name}</h2>
                <button className="element__like" type="button"/>
                <span className="element__counter" />
            </div>
        </article>
    )
}
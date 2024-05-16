import './card.css'

function Card({
    card_image,
    card_text
}){
    return(
        <>
            <div className="card">
                <div className="card-image-inner">
                    <img src={card_image} alt="" className='card-image' />
                </div>

                <div className="card-text">{card_text}</div>
            </div>
        </>
    )
}

export default Card
import './sectionFour.css'

function SectionFour({
    line1,
    line2,
    line3
}){
    return(
        <>
            <div className="section-four">
                <div className="container">
                    <div className="section-four-inner">
                        <div className="section-four-title">Наши работы</div>
                        <div className="section-four-nav">
                            <a href="" className="section-four-link">Показать все</a>
                            <a href="" className="section-four-link">Парикмахерские услуги</a>
                            <a href="" className="section-four-link">Маникюр</a>
                            <a href="" className="section-four-link">Педикюр</a>
                        </div>
                    </div>

                    <div className="section-four-images">
                        {line1}
                        {line2}
                        {line3}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionFour
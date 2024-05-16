import './sectionTwo.css'

function SectionTwo({
    cardOne,
    cardTwo,
    cardThree
}) {
    return(
        <>
            <div className="sectionTwo">
                <div className="container">
                    <div className="sectionTwo-inner">
                        {cardOne}
                        {cardTwo}
                        {cardThree}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionTwo
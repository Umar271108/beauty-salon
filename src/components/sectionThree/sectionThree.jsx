import './sectionThree.css'

function SectionThree({
    img_one,
    img2,
    img3,
    img4
}){
    return(
        <>
            <div className="sectionThree">
                <div className="container">
                    <div className="sectionThree-inner">
                        <img src={img_one} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionThree
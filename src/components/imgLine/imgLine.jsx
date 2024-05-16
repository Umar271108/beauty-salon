import './imgLine.css'

function ImgLine ({
    img_1,
    img_2,
    img_3
}){
    return(
        <>
            <div className="img-line-inner">
                <img src={img_1} alt="" />
                <img src={img_2} alt="" />
                <img src={img_3} alt="" />
            </div>
        </>
    )
}

export default ImgLine
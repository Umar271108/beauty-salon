import './sectionOne.css'
import Sign from '../assets/images/Sign.png'

function SectionOne(){
    return(
        <>
            <div className="section-one">
                <div className="container">
                    <div className="section-one-inner">
                        <img src={Sign} alt="" className="section-one-logo" />
                        <div className="section-one-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque <div className='text-center'>quam tortor, malesuada iaculis.</div> <br />
                        Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionOne
import './header_text.css'
import Group5 from '../assets/images/Group 5.png'

function HeaderText(){
    return(
        <>
            <div className="header-text">
                <div className="text">Салон красоты <br />«Delote-Beauty» <br />на Крестовском</div>
                <div className="scroll">
                    <img src={Group5} alt="" className="scroll-img" />
                    <div className="scroll-text">Прокрутите вниз</div>
                </div>
            </div>
        </>
    )
}

export default HeaderText
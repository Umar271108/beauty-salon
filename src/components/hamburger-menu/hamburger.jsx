import React, {useState} from 'react'
import './hamburger.css'



function Hamburger({
    contacts,
    schedule
}){

  const [bar, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)


  const update_menu = () => {
    if(!isMenuClicked){
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu vivsible')
    }
    else {
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }
  return (
        <>
            <div className="burger-menu"  onClick={update_menu}>
                <div className={bar}></div>
                <div className={bar}></div>
                <div className={bar}></div>
            </div>

            <div className={menu_class}>
                <div className="menu-inner">
                    <p className="menu-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, adipiscing amet in egestas sem dui, arcu faucibus scelerisque. Nisl est felis id volutpat. Sed dolor fermentum amet lectus nibh quis. Tortor donec pellentesque leo ac placerat. Morbi.
                    </p>

                    {contacts}
                    
                    {schedule}
                </div>
            </div>

        </>
  );
};


export default Hamburger
import './App.css';
import Header from './components/header/header';
import HeaderNav from './components/header-nav/header-nav'
import Hamburger from './components/hamburger-menu/hamburger'
import Contacts from './components/contacts/contacts'
import Schedule from './components/schedule/schudule'
import HeaderText from './components/header-text/header_text'
import SectionOne from './components/sectionOne/sectionOne'
import SectionTwo from './components/sectionTwo/sectionTwo'
import Card from './components/card/card'
import SectionThree from './components/sectionThree/sectionThree'
import SectionFour from './components/sectionFour/sectionFour';
import ImgLine from './components/imgLine/imgLine'

import Insta from './components/assets/images/Group 2.png'
import Loo from './components/assets/images/logo.png'
import box1 from './components/assets/images/box1 (1).png'
import box2 from './components/assets/images/box1 (2).png'
import box3 from './components/assets/images/box1 (3).png'
import box4 from './components/assets/images/box1 (4).png'
import box5 from './components/assets/images/box1 (5).png'
import box6 from './components/assets/images/box1 (6).png'
import Img1 from './components/assets/images/image 3 (Traced).png'
import Img2 from './components/assets/images/image 4 (Traced).png'
import Img3 from './components/assets/images/image 5 (Traced).png'
import Img4 from './components/assets/images/image 6 (Traced).png'
import Image1 from './components/assets/images/work-1.png'
import Image2 from './components/assets/images/work-2.png'
import Image3 from './components/assets/images/work-3.png'
import Image4 from './components/assets/images/work-4.png'
import Image5 from './components/assets/images/work-5.png'
import Image6 from './components/assets/images/work-6.png'
import Image7 from './components/assets/images/work-7.png'
import Image8 from './components/assets/images/work-8.png'
import Image9 from './components/assets/images/work-9.png'

function App() {
    return (
        <>
            <Header
            nav={<HeaderNav
                InstLogo={Insta}
                Logo={Loo}
                hamburger={<Hamburger contacts = {<Contacts/>} schedule={<Schedule/>}/>} />}
            text={<HeaderText/>}
            />

            <SectionOne/>

            <SectionTwo
            cardOne={<Card card_image={box1} card_text='Парикмахерские услуги'/>}
            cardTwo={<Card card_image={box2} card_text='Маникюр'/>}
            cardThree={<Card card_image={box3} card_text='Педикюр'/>}/>

            <SectionTwo
            cardOne={<Card card_image={box4} card_text='Косметология'/>}
            cardTwo={<Card card_image={box5} card_text='Эстетист по телу'/>}
            cardThree={<Card card_image={box6} card_text='Визаж'/>}/>

            <SectionThree img_one={Img1} img2={Img2} img3={Img3} img4={Img4}/>

            <SectionFour
            line1={<ImgLine img_1={Image1} img_2={Image2} img_3={Image3}/>}
            line2={<ImgLine img_1={Image4} img_2={Image5} img_3={Image6}/>}
            line3={<ImgLine img_1={Image7} img_2={Image8} img_3={Image9}/>}/>

        </>
    );
}

export default App;

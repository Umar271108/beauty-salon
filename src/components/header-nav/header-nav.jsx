import './header-nav.css'

function HeaderNav ({
    InstLogo,
    Logo,
    hamburger
}){
    return(
        <>
                <div className="header-nav">
                    <a href="" className="header-nav-logo">
                        <img src={InstLogo} alt="" />
                    </a>

                    <div className="links-inner">
                        <a href="" className="header-nav-link">Главная</a>
                        <a href="" className="header-nav-link">Мастера</a>
                        <a href="" className="header-nav-link">Косметика</a>
                    </div>

                    <a href="" className="header-nav-logo">
                        <img src={Logo} alt="" />
                    </a>

                    <div className="links-inner">
                        <a href="" className="header-nav-link">Акции</a>
                        <a href="" className="header-nav-link">Отзывы</a>
                        <a href="" className="header-nav-link">Контакты</a>
                    </div>

                    {hamburger}
                </div>
        </>
    )
}

export default HeaderNav
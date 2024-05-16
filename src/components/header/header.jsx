import './header.css'

function Header({
    nav,
    text
}){
    return(
        <>
            <header className="header">
                <div className="container">
                        {nav}
                        {text}
                </div>
            </header>
        </>
    )
}

export default Header
import  './style.css';


function Header() {

    return(
        <div id="header">
            <div id="logo">
                Toy Story
            </div>
            <nav>
                <a class="menu" href="foo">Home</a> 
                <a class="menu" href="foo">Menu</a> 
                <a class="menu" href="foo">Fale Conosco</a>
            </nav> 
        </div>
    )
}

export default Header;
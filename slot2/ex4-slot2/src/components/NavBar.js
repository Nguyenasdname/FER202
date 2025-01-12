
const NavBar = () => {
    const navBar = {
        display: "flex",
        backgroundColor: "rgb(85, 85, 85)",
        color: "white",

    }

    const navBarItems = {
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "20px",
        padding: "10px",
        cursor: "pointer",
        borderRadius: "3px",
        transition: "0.6s ease"
    }
    const loginItem = {
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "20px",
        padding: "10px",
        cursor: "pointer",
        borderRadius: "3px",
        transition: "0.6s ease",
        backgroundColor: "rgb(0, 0, 0)"
    }

    

    return (
        <div>
            <div className="nav-bar" style={navBar}>
                <div className="nav-bar-items" id="home" style={navBarItems} onClick={(e) => changeBackground(e.target)}>Home</div>
                <div className="nav-bar-items" style={navBarItems} onClick={(e) => changeBackground(e.target)}>Search</div>
                <div className="nav-bar-items" style={navBarItems} onClick={(e) => changeBackground(e.target)}>Contact</div>
                <div className="nav-bar-items" style={loginItem} onClick={(e) => changeBackground(e.target)}>Login</div>
            </div>
        </div>
    )
}

const changeBackground = (element) => {
    const navItems = document.querySelectorAll('.nav-bar-items')
    navItems.forEach(navItem => {
        navItem.style.backgroundColor = "";
    })
    element.style.backgroundColor = 'green';

}





export default NavBar
import logo from '../logo.svg';
const ReactLogo = () => {
    const styleDiv = {
        width: "500px",
        height: "500px",
        marginBottom: "50px"
    }
    const styleImg = {
        width: "100%"
    }
    const styleP1 = {
        display: "flex",
        justifyContent: "center",
        color: "rgb(41, 91, 109)",
        fontSize: "30px",
        marginBottom: "5px",
        fontFamily: "cursive, sans-serif"
    }
    const styleP2 = {
        display: "flex",
        justifyContent: "center",
        fontSize: "18px",
        marginTop: "0px",
        fontFamily: "cursive, sans-serif",
        color: "rgb(179, 179, 179)"
    }
    const styleP3 = {
        display: "flex",
        justifyContent: "center",
        fontSize: "22px"
    }
    return (
        <div>
            <div style={styleDiv}>
                <img style={styleImg} src={logo} alt="React Logo" />
                <div>
                    <p style={styleP1}>This is the React logo</p>
                    <p style={styleP2}>(I don't know why it is here either)</p>
                    <p style={styleP3}>The library for web and native user interfaces</p>
                </div>
                
            </div>
        </div>
    )
}
export default ReactLogo;
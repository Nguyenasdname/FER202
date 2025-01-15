const HelloReact = () => {
    const styleDiv = {
        display: "flex",
        fontSize: "50px",
        textAline: "center",
        fontFamily: "Roboto, sans-serif"
    }
    const styleSpan = {
        fontSize: "70px",
        fontWeight: "bold", 
        color: "blue",  
        marginTop: "32px",    
        marginLeft: "10px"
    
    }
    return(
        <div style={{
            display: "flex",
            
        }}>
            <p>Hello </p>
            <p style={styleSpan}>React</p>
        </div>
    )
}


export default HelloReact
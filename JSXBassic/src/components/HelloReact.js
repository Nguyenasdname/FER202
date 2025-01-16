const HelloReact = () => {
    const styleDiv = {
        display: "flex",
        justifyContent: "left",
        fontSize: "50px",
        textAline: "center",
        fontFamily: "Roboto, sans-serif",
        color: "blue",
        
    }
    
    return(
        <div style={styleDiv}>
            <p>Hello World!</p>
          
        </div>
    )
}


export default HelloReact
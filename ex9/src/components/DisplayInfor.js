import 'bootstrap/dist/css/bootstrap.min.css';

let human = {
    name: "nguyen",
    message: "Student in FPT University"
}

const Infor = ({human}) => {
    return(
        <div>
            <h1>Display Infor</h1>
            <div>My name is: {human.name}</div>
            <div>Message: {human.message}</div>
        </div>
    )
}

const DisplayInfor = () => {
    return(
        <div>
            <Infor human={human}/>
        </div>
    )
}
export default DisplayInfor;
import CountdownTimer from "./CountdownTimer"
import UserPosts from "./UserPosts"
import ValidatedInput from "./ValidatedInput"
import WindowSize from "./WindowSize"
import { Card, Container } from "react-bootstrap";
const Ex13 = () => {
    const validateInput = (value) => value.length >= 3;

    return (
        <Container>
            <Card>
                <UserPosts userId={1} />

                <CountdownTimer initialValue={10} />

                <WindowSize />

                <ValidatedInput validationFunction={validateInput}
                    errorMessage="Input phải có ít nhất 3 ký tự." />

            </Card>
        </Container>
    )
}

export default Ex13
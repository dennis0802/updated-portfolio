import { Spinner } from "react-bootstrap";

function Loading({msg}) {
    return (
        <>
            <Spinner animation="border" variant="info" className="mt-3">
                <span className="visually-hidden">{msg}</span>
            </Spinner>
            <p>{msg}</p>
        </>
    )
}

export default Loading;
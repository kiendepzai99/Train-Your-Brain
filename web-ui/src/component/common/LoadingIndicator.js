import {Spinner} from "react-bootstrap";

export default function LoadingIndicator() {
    return (
        <div className="d-flex align-items-center justify-content-center position-fixed bg-dark w-100 h-100">
            <Spinner animation={"border"}/>
        </div>

    )
}
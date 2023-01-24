import { useRouteError } from "react-router-dom"

const Error = () => {
    const { status, statusText} = useRouteError()
    console.log(useRouteError() )
    return (
        <>
            <div className="container main">
                <h1>{status} OOps Error!</h1>
                <p>{statusText}</p>
            </div>
        </>
    )
}
export default Error
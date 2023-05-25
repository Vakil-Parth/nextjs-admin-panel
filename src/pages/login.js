export default function Login() {
    return <div>
        <h1>Login Page</h1>
    </div>
}
Login.getLayout = function getLayout(page) {
    return (
        <>{page}</>
    )
}
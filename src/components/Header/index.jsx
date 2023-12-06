import Generation from "./Generation"
import Logo from "./Logo"

const Header = ({title}) => {
    return (
        <>
            <h1>{title}</h1>
            <Generation title="Generations" />
            <Logo title="Logo" />
        </>
    )
}

export default Header
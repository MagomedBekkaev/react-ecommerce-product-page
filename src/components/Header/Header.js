import classes from "./Header.module.css"

const Header = () => {
    return (
        <nav className={classes.header}>
            <h1>Pizzeria</h1>
            <p>Les meilleures pizzas artisanales</p>
            <img src="/images/logo.svg" alt="SNEAKERS Logo" className={classes.logo} />
        </nav>
    )
}

export default Header
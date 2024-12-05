import classes from "./Header.module.css"

const Header = () => {
    return (
        <nav className={classes.header}>
            <div className={classes.topnav}>
                <img src="/images/logo.svg" alt="SNEAKERS Logo" className={classes.logo} />
                <img src="/images/icon-cart.svg" alt="Cart Icon" className={classes.cart} />
                <img src="/images/image-avatar.png" alt="Avatar" className={classes.avatar} />
                
                <div className={classes.links}>
                    <a href="#" className={classes.navLink}>Collections</a>
                    <a href="#" className={classes.navLink}>Men</a>
                    <a href="#" className={classes.navLink}>Women</a>
                    <a href="#" className={classes.navLink}>About</a>
                    <a href="#" className={classes.navLink}>Contact</a>
                </div>

                <a href="#" className={classes.menuIcon}>
                    <img src="/images/icon-menu.svg" alt="Menu Icon" />
                </a>

            </div>
        </nav>
    )
}

export default Header
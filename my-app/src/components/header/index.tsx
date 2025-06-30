import { CartDrawer } from "../cart-drawer"
import { NavMenu } from "./nav-menu"

export const Header = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 h-[64px] flex items-center bg-white shadow-xs px-5">
            <NavMenu />
            <div className="ms-auto">
                <CartDrawer />
            </div>
        </header>
    )
}

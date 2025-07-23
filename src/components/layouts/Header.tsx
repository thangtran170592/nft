import NavBarUI from '@components/ui/NavbarUI';
import { menus } from '@lib/constants/menus';

export default function Header() {
    return (
        <header className='sticky top-0 z-50 bg-neutral-accent'>
            <NavBarUI menus={menus} />
        </header>
    );
}

'use client';
import Link from 'next/link';
import { Menu } from '@src/types/Menu';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { mergeClass } from '@lib/utils/mergeClass';
import Icon from '@components/shared/Icon';
import ButtonUI from '@components/ui/ButtonUI';

export default function NavBarUI({ menus }: { menus: Menu[] }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isLoadingSignUp, setIsLoadingSignUp] = useState<boolean>(false);
  const [isLoadingLogin, setIsLoadingLogIn] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusable = useRef<HTMLButtonElement>(null);

  // Trap focus within the mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mobileMenuOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileMenuOpen(false);
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll('a, button');
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (mobileMenuOpen) {
      document.body.classList.add('no-scroll');
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        firstFocusable.current?.focus();
      }, 0);
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const onClickSignUpHandler = () => {
    setIsLoadingSignUp(true);
    setTimeout(() => {
      setIsLoadingSignUp(false);
    }, 2000); // Simulate loading for 2 seconds
  };
  const onClickLogInHandler = () => {
    setIsLoadingLogIn(true);
    setTimeout(() => {
      setIsLoadingLogIn(false);
    }, 2000); // Simulate loading for 2 seconds
  };

  return (
    <div className='relative'>
      <div className='md:px-[2.5em] md:py-[1.25em] px-[1.25em] py-[0.75em] z-50'>
        <div className='w-full flex flex-row items-center justify-between gap-[1em]'>
          <div className='flex items-center justify-start gap-[1.5em]'>
            <div className='flex items-center justify-between gap-[1em]'>
              {/* Menu button (for mobile) */}
              <div className='flex md:hidden'>
                <button
                  aria-label='Mobile menu'
                  className='inline-flex items-center justify-center'
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  ref={firstFocusable}
                >
                  <Icon name={mobileMenuOpen ? 'close' : 'menu'} width={24} height={24} />
                </button>
              </div>
              <Link href='/' className='flex items-center'>
                <Icon name='logo' width={72} height={39} className='hidden md:block' />
                <Icon name='mobileLogo' width={71} height={36} className='block md:hidden' />
              </Link>
            </div>

            {/* Menu (desktop) */}
            <nav id='desktopMenu' className='hidden md:flex md:flex-row md:items-center'>
              {menus.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url}
                  className={mergeClass(
                    'block uppercase text-neutral-accent-light text-sm py-[0.5em] px-[1.125em] font-medium font-neue rounded-[6.25em] hover:bg-neutral-subdued hover:text-primary-normal',
                    pathname === item.url && 'text-primary-normal bg-neutral-subdued',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className='flex items-center justify-start gap-[0.5em]'>
            <ButtonUI
              type='button'
              className='uppercase rounded-[6.25em] italic font-black'
              onClick={onClickSignUpHandler}
              disabled={isLoadingSignUp}
              label={isLoadingSignUp ? 'Signing up...' : 'Sign up'}
            ></ButtonUI>
            <ButtonUI
              type='button'
              variant='secondary'
              className='uppercase rounded-[6.25em] italic font-black'
              onClick={onClickLogInHandler}
              disabled={isLoadingLogin}
              label={isLoadingLogin ? 'Logging in...' : 'Log in'}
            ></ButtonUI>
          </div>
        </div>
      </div>

      {/* Menu (mobile) */}
      {mobileMenuOpen && (
        <nav
          id='mobileMenu'
          ref={menuRef}
          className={mergeClass(
            'md:hidden absolute z-10 w-full bg-neutral-normal flex flex-col items-center gap-[1em] p-[1.25em] h-[calc(100vh-3.75em)] overflow-auto',
            mobileMenuOpen ? 'animate-slide-down' : 'animate-slide-up',
          )}
        >
          {menus.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={mergeClass(
                'block w-full uppercase text-center py-[0.875em] text-neutral-accent-light text-sm font-medium font-neue rounded-[6.25em] hover:bg-neutral-subdued hover:text-primary-normal',
                pathname === item.url && 'text-primary-normal bg-neutral-subdued',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}

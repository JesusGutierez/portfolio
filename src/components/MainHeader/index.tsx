'use client';

import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import styles from './index.module.scss';

const navigation = [
  { name: 'Acerca de', href: '/#about' },
  { name: 'Tecnologías', href: '/#skills' },
  { name: 'Certificados', href: '/#certificates' },
  { name: 'Proyectos', href: '/#projects' },
  { name: 'Contacto', href: '/#contact' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const MainHeader = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-none w-screen">
            <div
              className={`flex items-center justify-center`}
            >
              {/* Phone menu */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center self-start justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop menu */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item, index) => {
                    const isCurrent: boolean = index == currentTabIndex;

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentTabIndex(index);
                          window.location.replace(item.href);
                        }}
                        className={classNames(
                          isCurrent
                            ? 'text-third'
                            : 'hover:text-third hover:text-primary',
                          'rounded-md px-3 py-2 text-sm font-bold text-center flex items-center h-[80px]'
                        )}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Displayed menu on phone*/}
          <Disclosure.Panel className="sm:hidden bg-primary">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index: number) => {
                const isCurrent: boolean = index == currentTabIndex;

                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentTabIndex(index);
                      window.location.replace(item.href);
                    }}
                    className={classNames(
                      isCurrent
                        ? 'text-third'
                        : 'hover:text-third hover:text-primary',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={isCurrent ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MainHeader;

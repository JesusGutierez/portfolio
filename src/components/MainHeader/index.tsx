'use client';

import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Who I am', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const MainHeader = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  return (
    <Disclosure as="nav" className="sticky">
      {({ open }) => (
        <>
          <div className="max-w-none w-screen">
            <div className="relative heightHeader px-7 flex items-center justify-between bg-primary">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-shrink-0 items-center">
                <p className="font-bold text-third">
                  Jesús Antonio
                  <br />
                  Gutierrez Yancán
                </p>
              </div>
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
                            ? 'bg-gray-900 text-third'
                            : 'hover:bg-secondary hover:text-third',
                          'rounded-md px-3 py-2 text-sm font-bold'
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
                        ? 'bg-gray-900 text-third'
                        : 'hover:bg-gray-700 hover:text-third',
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

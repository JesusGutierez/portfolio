import Title from '@/components/Title';
import React from 'react';
import styles from './index.module.scss';

const fields: Object[] = [
  {
    name: 'name',
    nroLines: null,
  },
  {
    name: 'e-mail',
    nroLines: null,
  },
  {
    name: 'subject',
    nroLines: null,
  },
  {
    name: 'message',
    nroLines: 6,
  },
];

function Contact() {
  return (
    <div className="flex flex-col heightWithHeader" id="contact">
      <Title title="Contact me" />
      <div id={styles.infoContainer}>
        <form>
          {fields.map((field, index) => {
            return (
              <div
                key={index}
                className="flex mb-4 items-center justify-between"
              >
                <label className="block text-sm font-bold" htmlFor="username">
                  <p className="capitalize">{field.name}</p>
                </label>
                <div className="bg-third p-1 rounded">
                  <input
                    className="appearance-none rounded py-2 px-3 bg-secondary"
                    id="username"
                    type="text"
                  />
                </div>
              </div>
            );
          })}
          <div className="flex">
            <button
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 text-white px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>

        <div></div>
      </div>
    </div>
  );
}

export default Contact;

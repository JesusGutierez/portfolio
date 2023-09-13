import Title from '@/components/Title';
import React, { useState } from 'react';
import styles from './index.module.scss';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { SocialNetwork } from '@/models/SocialNetwork';
import { Field } from '@/models/FIeld';
import { sendEmail } from '@/services/email';

const fields: Field[] = [
  new Field('name', null),
  new Field('e-mail', null),
  new Field('subject', null),
  new Field('message', 6),
];
const networks: SocialNetwork[] = [
  new SocialNetwork(
    <AiOutlineGithub />,
    'Github',
    'JesusGutierez',
    'https://github.com/JesusGutierez'
  ),
  new SocialNetwork(
    <AiFillLinkedin />,
    'Linkedin',
    'GutierrezYancan',
    'https://www.linkedin.com/in/gutierrezyancan/'
  ),
  new SocialNetwork(
    <AiOutlineMail />,
    'Email',
    'gtrrzyancan@outlook.com',
    'gtrrzyancan@outlook.com'
  ),
];

const objFields = (formFields: Field[]) => {
  const obj: Map<string, string> = new Map();
  formFields.forEach((field, index) => obj.set(field.name, ''));
  console.log('pbj', obj);
  return obj;
};

function Contact() {
  const [formData, setFormData] = useState(objFields(fields));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(formData);
  };

  return (
    <div className="flex flex-col heightWithHeader" id="contact">
      <Title title="Contact me" />
      <div id={styles.infoContainer}>
        <div>
          <p className="mb-5 text-xl">Leave ne a messgage</p>
          <form method="post" onSubmit={handleSubmit}>
            {fields.map((field, index) => {
              return (
                <div
                  key={index}
                  className="flex mb-4 items-center justify-between"
                >
                  <label
                    className="block text-sm font-bold w-[100px] whitespace-pre"
                    htmlFor="username"
                  >
                    <p className="capitalize">{field.name}</p>
                  </label>
                  <div className="bg-secondary p-1 rounded w-full">
                    {field.nroLines != null ? (
                      <textarea
                        className="appearance-none rounded py-2 px-3 bg-third w-full text-secondary"
                        rows={field.nroLines}
                      ></textarea>
                    ) : (
                      <input
                        className="appearance-none rounded py-2 px-3 bg-third w-full text-secondary"
                        id={field.name}
                        type="text"
                      />
                    )}
                  </div>
                </div>
              );
            })}
            <div className="flex justify-end">
              <button
                className="bg-third text-secondary hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => {
                  sendEmail(
                    ['gtrrzyancan@outlook.com'],
                    'New message - Portfolio - Jesús',
                    'I want to invite you for an interview'
                  );
                }}
              >
                Send!
              </button>
            </div>
          </form>
        </div>

        <div id={styles.networksContainer}>
          {networks.map((network, index) => (
            <div key={index} className={styles.networkContainer}>
              {network.icon}
              <a id={network.name} href={network.urlNetwork}>
                {network.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;

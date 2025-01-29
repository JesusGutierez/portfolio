import React from 'react';
import styles from './index.module.scss';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { SocialNetwork } from '@/models/SocialNetwork';
import { Field } from '@/models/FIeld';
import ContactForm from '@/components/ContactForm';

const fields: Field[] = [
  new Field('name', null, 'nombre completo', 'text'),
  new Field('email', null, 'correo', 'email'),
  new Field('message', 6, 'mensaje', 'text'),
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
    'mailto:gtrrzyancan@outlook.com'
  ),
];

function Contact() {
  return (
    <div className="flex flex-col w-full gap-[50px]" id="contact">
      <div className='section-title'><span>Contactame</span></div>
      <div
        id={styles.infoContainer}
        className="flex-auto flex flex-col mx-10 mb-20 gap-10"
      >
        <div className="w-full max-w-screen-md">
          <p className="mb-5 text-xl">Dejame un mensaje</p>

          <ContactForm fields={fields}></ContactForm>

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

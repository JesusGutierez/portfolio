import React from 'react';
import Image from 'next/image';
import profileImg from '/src/assets/profile.jpg';
import { calculateAge } from '@/services/utils';
import VerticalParagraph from '@/components/VerticalParagraph';

function AboutMe() {
  // const age: number = calculateAge(new Date('2001-11-23'));
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]" id="about">

      <div className='text-3xl text-center'>Soy <span className='text-third'>Jesús Gutierrez</span>, desarrollador Frontend</div>

      <div className="flex items-start flex-wrap gap-[30px] justify-center">

        <VerticalParagraph title='Perfil Profesional'>
          <div className='text-center'>
            Soy Desarrollador Frontend Especializado en Angular e Ionic, me enfoco en desarrollo y mantenimiento de aplicaciones móviles híbridas. Siempre estoy en constante uso de servicios en la nube como Azure, GCP y AWS.
          </div>
        </VerticalParagraph>

        <VerticalParagraph title='Datos personales'>
          <ul className='text-center'>
            <li>Correo: gtrrzyancan@outlook.com</li>
            <li>Teléfono: +51 923698014</li>
            <li>Ubicación: Lima, Perú</li>
            <li>Linkedin: <span className='text-third'>gutierrezyancan</span></li>
            <li>Github: <span className='text-third'>gutierrezyancan</span></li>
          </ul>
        </VerticalParagraph>


      </div>
    </div>
  );
}

export default AboutMe;

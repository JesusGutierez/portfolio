import React from 'react'
import PropTypes from 'prop-types'
import Certificate from '@/models/Certificate'
import Image from 'next/image'
import { IoIosLink } from "react-icons/io";
import styles from './index.module.scss'
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function CertificateLayout(props: {
  certificate: Certificate
}) {
  const actualCertificate = props.certificate
  const formattedIssueDate = `${months[actualCertificate.issueDate.getMonth()]} / ${actualCertificate.issueDate.getFullYear()}`;
  return (
    <div className='flex justify-between max-w-[280px] gap-[10px]'>
      <div>
        <div>{formattedIssueDate}</div>
        <div >
          <span className='font-black text-wrap break-words'>{actualCertificate.title}</span>
          {`, ${actualCertificate.issuingOrganization}`}
        </div>
      </div>

      <div>
        <button type='button' className='
        flex justify-between items-center gap-[10px] border-[2px] border-third text-third rounded-xl p-[12px] cursor-pointer text-nowrap
        transition duration-200 active:bg-white/25'>
          <div className={styles['text-nowrap']}>Check it</div>
          <IoIosLink></IoIosLink>
        </button>
      </div>
    </div>

  )
}

CertificateLayout.propTypes = {
  certificate: PropTypes.instanceOf(Certificate)
}

export default CertificateLayout

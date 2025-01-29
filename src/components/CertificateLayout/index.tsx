import React from 'react'
import PropTypes from 'prop-types'
import Certificate from '@/models/Certificate'
import { IoIosLink } from "react-icons/io";
import styles from './index.module.scss'
import CustomButton from '../CustomButton';
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
        <CustomButton text='Check it' showIcon={true}></CustomButton>
      </div>
    </div>

  )
}

CertificateLayout.propTypes = {
  certificate: PropTypes.instanceOf(Certificate)
}

export default CertificateLayout

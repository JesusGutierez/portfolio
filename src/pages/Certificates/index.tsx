import React from 'react'
import Certificate from '@/models/Certificate'
import CertificateLayout from '@/components/CertificateLayout'
import styles from './index.module.scss'

const certificates: Array<Certificate> = [
  {
    issueDate: new Date(2024, 6),
    issuingOrganization: 'Google',
    title: 'Crash Course on Python',
    url: 'https://www.coursera.org/account/accomplishments/verify/723N26C64B7U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    issueDate: new Date(2024, 6),
    issuingOrganization: 'Google',
    title: 'Crash Course on Python',
    url: 'https://www.coursera.org/account/accomplishments/verify/723N26C64B7U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    issueDate: new Date(2024, 6),
    issuingOrganization: 'Google',
    title: 'Crash Course on Python',
    url: 'https://www.coursera.org/account/accomplishments/verify/723N26C64B7U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    issueDate: new Date(2024, 6),
    issuingOrganization: 'Google',
    title: 'Crash Course on Python',
    url: 'https://www.coursera.org/account/accomplishments/verify/723N26C64B7U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    issueDate: new Date(2024, 6),
    issuingOrganization: 'Google',
    title: 'Crash Course on Python',
    url: 'https://www.coursera.org/account/accomplishments/verify/723N26C64B7U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
]

function Certificates() {
  return (
    <div className='flex flex-col gap-[50px]'>
      <div className='section-title'>Mis <span>Certificados</span></div>
      <div className='relative flex justify-center'>
        <div className={styles.separator}></div>
        <div className={`flex justify-center ${styles['grid-certs']}`}>
          {certificates.map(certificate => {
            return (
              <CertificateLayout key={certificate.title} certificate={certificate}></CertificateLayout>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Certificates

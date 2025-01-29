import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { IoIosLink } from 'react-icons/io'

function CustomButton(props: { type?: string, text: string }) {
  return (
    <button type='button' className='
    flex justify-between items-center gap-[10px] border-[2px] border-third text-third rounded-xl p-[12px] cursor-pointer text-nowrap
    transition duration-200 active:bg-white/25'>
      <div className={styles['text-nowrap']}>{props.text}</div>
      {props.type === 'link' ? <IoIosLink></IoIosLink> : null}
    </button>
  )
}

CustomButton.defaultProps = {
  text: 'Submit'
}

CustomButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}

export default CustomButton

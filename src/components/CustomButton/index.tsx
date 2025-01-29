import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { IoIosLink } from 'react-icons/io'

function CustomButton(props: {
  type?: "submit" | "button" | "reset" | undefined,
  text: string,
  onClick: Function,
  showIcon: boolean,
}) {
  return (
    <button type={props.type} className='
    flex justify-between items-center gap-[10px] border-[2px] border-third text-third rounded-xl p-[12px] cursor-pointer text-nowrap
    transition duration-200 active:bg-white/25'
      onClick={props.onClick()}
    >
      <div className={styles['text-nowrap']}>{props.text}</div>
      {props.showIcon === true ? <IoIosLink></IoIosLink> : null}
    </button>
  )
}

CustomButton.defaultProps = {
  text: 'Submit',
  type: 'submit',
  onClick: () => { },
  showIcon: false
}

CustomButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  showIcon: PropTypes.bool
}

export default CustomButton

import styles from './index.module.scss'

function Presentaton() {
  return (
    <div
      className={`grid text-[70px] text-center justify-center items-center h-full w-full bg-primary`}
      id="Presentation"
    >
      <div className={`${styles['typed-out']}`}>Saludos ✌</div>
    </div>
  )
}

Presentaton.propTypes = {}

export default Presentaton

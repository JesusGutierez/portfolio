import React from 'react'
import PropTypes from 'prop-types'

type SnackbarProps = {
  message: string;
  type: "success" | "error" | "warning" | "info";
};

const Snackbar = (props: SnackbarProps = { message: '', type: 'info' }) => {
  const getTypeStyles = () => {
    switch (props.type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white rounded shadow-lg ${getTypeStyles()}`}>
      {props.message}
    </div>
  )
}

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default Snackbar

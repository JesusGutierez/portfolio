import React from 'react'
import PropTypes from 'prop-types'

function VerticalParagraph(
  props: {
    title: string,
    children: React.ReactElement
  }
) {
  return (
    <div className='flex flex-col w-[300px] gap-[5px]'>
      <div className='text-center'>{props.title}</div>
      <div className='h-[1px] w-full bg-secondary'></div>
      <div>{props.children}</div>
    </div>
  )
}

VerticalParagraph.propTypes = {
  title: PropTypes.string
}

export default VerticalParagraph

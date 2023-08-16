import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Bank = ({title,onAdd}) => {
  return (
    
    <header className='header'>
      <h1>{title}</h1>
      <Button color='dark' text='Add' onClick={onAdd} className='btn' />
    </header>
    
  )
}
Bank.defaultProps = {
    title:'Bank',
}
Bank.prototype={
    title: PropTypes.string.isRequired,
}
export default Bank;


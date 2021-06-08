import React from 'react'
import style from './Menutoggle.module.css'

const Menutoggle=props=>{
  const cls=[
    style.Menutoggle,
    'fa',
  ]

  if(props.isOpen){
    cls.push('fa-times')
    cls.push(style.open)
  }else{
    cls.push('fa-bars')
  }

  return(
    <i
    className={cls.join(' ')}
    onClick={props.onToggle}
    />
  )
}

export default Menutoggle
import React, {Component} from 'react'
import style from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

class Drawer extends Component{
  renderLinks(links){
    return links.map((link,index)=>{
      return (
        <li key={index}>
         <NavLink
         to={link.to}
         exact={link.exact}
         activeClassName={style.active}
         onClick={this.props.onClose}
         > 
         {link.lable}</NavLink>
        </li>
      )
    })
  }

  render(){
    const cls=[style.Drawer]

    if(!this.props.isOpen){
      cls.push(style.close)
    } 

    const links=[
      {to:'/', lable:'Список кексов', exact:true},
      
    ]

    if(this.props.isAuthenticated){
      links.push(
         {to:'/quiz-creator', lable:'Создать тест', exact:false},
         {to:'/logout', lable:'Выйти', exact:false},
      )
    }else{
      links.push({to:'/auth', lable:'Авторизация', exact:false},)
    }

    return (
    <>
      <nav className={cls.join(' ')}>
        <ul>
          {this.renderLinks(links)}
        </ul>
      </nav>
      {this.props.isOpen?<Backdrop onClick={this.props.onClose}/> :null}
    </>
    )
  }
}

export default Drawer
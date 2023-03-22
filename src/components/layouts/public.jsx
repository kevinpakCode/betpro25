import React  from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom"
import classNames from 'classnames'
import userStyles from './styles'
import Container from '../ui/container/Container'
import logo from './../../assets/images/logo.svg'
import { Button } from '../ui/Button/Button'
import { primaryColor } from '../../assets/js/modules/colors/colors.module'



const colorWhite = primaryColor.white


const Public = () => {
  const classes = userStyles()
  //const navigate = useNavigate()

  const  GoToInscription = () => window.open('https://bvlwzc.top/1Tif?s1=BETPRO25', '_blank')
  const  GoToPronostic = () => window.open('https://t.me/+HNOl8dNWHv5iM2Uy', '_blank')

  return (
    <div className={classNames(classes.wrapper)}>
      <header className={classNames(classes.header)}>
        <Container>
          <div className={classNames(classes.headerInner)}>
            <div className={classNames(classes.headerLeft)}>
              <Link to="/">
                <img src={logo}/>
              </Link>
            </div>
            <div className={classNames(classes.headerRight)}>ENSEMBLE & CASINO</div>
          </div>
        </Container>
      </header>
      <Outlet/>
      <footer className={classNames(classes.footer)}>
        <Container>
          <div className={classNames(classes.footerInner)}>
            <Button className={classNames(classes.footerBtn)} theme="primary" size="big" onClick={GoToInscription}>Inscription</Button>
            <Button className={classNames(classes.footerBtn)} theme="primary" size="big" onClick={GoToPronostic}>Pronostiques</Button>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default Public
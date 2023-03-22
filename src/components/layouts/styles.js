import { createUseStyles } from 'react-jss'
import { primaryColor, othersColors } from '../../assets/js/modules/colors/colors.module'
import bannerBg from '../../assets/images/bannerBg.png'

const colorWhite = primaryColor.white
const bannerBgColor = othersColors.x1
const footerBgColor = othersColors.x4

const userStyles = createUseStyles({
  wrapper: {
    position: 'relative',
    background: bannerBgColor,
    width: '100vw',
    height:'100vh',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '100vh',
      backgroundImage:  `url(${bannerBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  },

  header: {
    height: '63px',
    display: 'flex',
    alignItems: 'center',
  },

  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: colorWhite
  },
  footer: {
    height: '93px',
    backgroundColor: footerBgColor,
  },
  
  footerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px 0'
  },

  footerBtn: {
    margin: '0 20px'
  },
  '@media(max-width:640px)': {
    footerBtn: {
      maxWidth: '120px !important',
      fontSize: '0.8rem !important',
      padding: '5px 10px !important'
    }
  }
  
})

export default userStyles
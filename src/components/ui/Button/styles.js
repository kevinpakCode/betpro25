import { createUseStyles } from 'react-jss'
import { primaryColor } from '../../../assets/js/modules/colors/colors.module';

const orangeColor = primaryColor.orange
const whiteColor = primaryColor.white

const userStyles = createUseStyles({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: (props) => props?.btn_opt?.textSize??'0.813rem',
    lineHeight: (props) => props?.btn_opt?.size??'0.813rem',
    color: (props) => props?.btn_opt?.color??'initial',
    backgroundColor: (props) => props?.btn_opt?.bg??'initial',
    fontFamily: '"Exo-SemiBoldItalic", sans-serif',
    padding: '4px 8px',
    cursor: 'pointer',
    borderRadius: '35px',
    border: 'solid 2px  transparent'
  },
  theme__primary: {
    backgroundColor:`${orangeColor} !important`,
    borderColor:orangeColor,
    color: `${whiteColor} !important`,
  },

  size__big: {
    width: '100%',
    maxWidth: '265px',
    padding: '5px 70px',
    fontSize: '1.563rem  !important',
    '@media(max-width:640px)': {
      fontSize: '0.8rem  !important',
    }
    
  },
  
})

export default userStyles
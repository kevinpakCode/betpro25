import { createUseStyles } from 'react-jss'
import { primaryColor, othersColors } from '../../../assets/js/modules/colors/colors.module'


const colorWhite = primaryColor.white
const bgClub = othersColors.x2
const borderDateTime = othersColors.x3

const userStyles = createUseStyles({
  homeInner: {
    height: 'calc(100vh - 156px)'
  },
  slider: {
    height: '100%',
  },
  sliderItem: {
    height: '100%',
  },
  sliderItemInner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  championshipLogo: {
    marginBottom:'20px',  
  },
  championshipName: {
    fontSize: '2.1rem',
    lineHeight: '2.9rem',
    textAlign: 'center',
    color: colorWhite,
    fontFamily: '"Exo-SemiBoldItalic", sans-serif'
  },
  championshipItem: {
    width: '35%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: '"Exo-MediumItalic", sans-serif',
    '&:nth-child(2)': {
      order: '3'
    }
  },
  championship: {
    width: '30%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    order: '2'
  },
  championshipItemLogo: {
    width: '220px',
    height: '220px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '18px'
  },
  championshipItemName: {
    fontSize: '1.313rem',
    color: colorWhite,
    backgroundColor: bgClub,
    borderRadius: '36px',
    padding: '8px 38px',
    marginBottom: '1px'
  },
  championshipItemOdds: {
    fontSize: '1.2rem',
    color: colorWhite,
    backgroundColor: bgClub,
    borderRadius: '50%',
    padding: '8px',
    marginBottom: '8px',
    backgroundColor: '#ff6f00'
  },
  championshipItemBestPlayerImg: {
    position:'absolute',
    top: '0',
    left: '0',
    width: 'auto',
    height: '101%',
    opacity: '0.15',
    pointerEvents: 'none'
  },
  championshipMatch: {
   // marginTop: '60%',
    top: '50%',
    marginTop: '-100px',
    color: colorWhite,
    textAlign: 'center'
  },
  championshipMatchDateTime: {
    fontSize: '1.94rem',
    lineHeight: '1.94rem',
    color: colorWhite,
    marginBottom: '40px',
    padding: '20px',
    border: `solid 1px ${borderDateTime}`
  },
  championshipMatchOdds: {
    fontSize: '1.2rem',
    color: colorWhite,
    backgroundColor: '#ff6f00',
    padding: '6px 20px',
    borderRadius: '35px'
  },
  '@media (max-width: 990px)': {
    championshipName: {
      fontSize: '2rem',
      lineHeight: '2rem'
    },
    championshipItemLogo: {
      width: '150px',
      height: '150px'
    },
    championshipMatchDateTime: {
      fontSize: '1.1rem',
      lineHeight: '1.1rem',
      padding: '8px 10px'
    }
  },
  '@media (max-width: 640px)': {
    championshipMatch: {
      top: '47%'
    },
    championshipItemLogo: {
      width: '120px',
      height: '120px'
    },
    championshipItemBestPlayerImg: {
      display: 'none !important'
    }
  }
})
export default userStyles
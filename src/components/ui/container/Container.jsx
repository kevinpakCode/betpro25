import userStyles from './styles'
import classNames from 'classnames'

const Container = ({children}) => {
  const classes = userStyles()
  
  return (
    <div className={classes.container}>{children}</div>
  )
}
export default Container
import classNames from 'classnames'
import userStyles from './styles'

export const Button = ({children, className, size, textSize, bg, color, theme, disabled, onClick, ...props}) => {
  const btnOpt = {}
  if(size) btnOpt.size = size
  if(textSize) btnOpt.textSize = textSize
  if(bg) btnOpt.bg = bg
  if(color) btnOpt.color = color
  
  props.btnOpt = btnOpt
  const classes = userStyles(props)
  //console.log('disabled-->', disabled)
  //==>>size:('small', 'normal', 'big')
  return (
    <button className={classNames(classes.btn, classes.button, classes[`theme__${theme}`], classes[`size__${size}`], className, {[classes.btnDisabled]:disabled})} onClick={onClick} {...props}>{children}</button>
  )
}
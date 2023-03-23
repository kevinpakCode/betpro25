import classNames from 'classnames'
import userStyles from './styles'

export const Button = ({children, className, size, textSize, bg, color, theme, disabled, onClick, ...props}) => {
  const btn_opt = {}
  if(size) btn_opt.size = size
  if(textSize) btn_opt.textSize = textSize
  if(bg) btn_opt.bg = bg
  if(color) btn_opt.color = color
  
  props.btn_opt = btn_opt
  const classes = userStyles(props)
  //console.log('disabled-->', disabled)
  //==>>size:('small', 'normal', 'big')
  return (
    <button className={classNames(classes.btn, classes.button, classes[`theme__${theme}`], classes[`size__${size}`], className, {[classes.btnDisabled]:disabled})} onClick={onClick} {...props}>{children}</button>
  )
}
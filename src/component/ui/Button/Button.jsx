import style from './Button.module.css'

const Button = ({ value, clas, ...props }) => {
  return (
      <>
          {clas === 'edit' ? 
            <button className={`${style.btn} ${style.edit}`} {...props}>{value}</button> : <button className={`${style.btn} ${style.create}`} {...props}>{value}</button>
          }
      </>
  )
}

export default Button
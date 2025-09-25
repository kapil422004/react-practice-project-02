import {MdMessage} from 'react-icons/md'
import styles from "./Button.module.css"

function Button({isOutline, icon, text}){

    return(
        <button className={ isOutline ? styles.isOutline_btn : styles.primary_btn}>
            {icon}
            {text}
        </button>
    ) 
}

export default Button;
import style from './header.module.css'
import vkontakte from '../../assets/vk.png'
import google from '../../assets/google.png'
import telegram from '../../assets/tg.png'
import { useState } from 'react'

const Header = () =>{

    let [isModalActive, setIsModalActive] = useState(false)


    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.logo}>
                <p>TestHub</p>
            </div>
            <div className={style.navbar}>
                <p>About us</p>
                <p>Contacts</p>
                <p className={style.login_button} onClick={() =>{
                    setIsModalActive(!isModalActive)
                }}>Sign in</p>
            </div>
        </div>
        {isModalActive && <div className={style.signin_modal}>
            <div className={style.signIn_wrapper}>
                <h1>Вход на сайт</h1>
                <div className={style.inputField}>
                    <p>Логин</p>
                    <input type="text" />
                </div>
                <div className={style.inputField}>
                    <p>Пароль</p>
                    <input type="text" />
                </div>
                <button className={style.signIn_button}>Войти</button>
                <p className={style.text}>Если Вы впервые на нашем сайте, предлагаем создать учетные данные и войти на сайт</p>
                <button className={style.signIn_button_signUp}>Зарегистироваться</button>
                <p className={style.text}>или войдите через</p>
                <div>
                    <img src={vkontakte} alt="" />
                    <img src={google} alt="" />
                    <img src={telegram} alt="" />
                </div>
            </div>
        </div>
        }
    </section>
    
}



export default Header
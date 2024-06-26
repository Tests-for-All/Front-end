import style from './banner.module.css'
import pic from '../../../assets/main.png'

const Banner = () => {
    return <section className={style.section}>
        <div className={style.wrapper}>
            <h1>Решай и создавай свои тесты</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, 
                vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, 
                justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                <button>Начать</button>
            <div className={style.absolute}>
                <div>
                    <img src={pic} alt="priv" />
                </div>
            </div>
        </div>
    </section>
}

export default Banner
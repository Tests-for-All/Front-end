import style from './tests.module.css'

const Tests = () => {
    return <section className={style.section}>
    <div className={style.categories}>
      <h2>Категории тестов:</h2>
      <ul>
        <li>Категория 1</li>
        <li>Категория 2</li>
        <li>Категория 3</li>
      </ul>
    </div>
    </section>
}

export default Tests
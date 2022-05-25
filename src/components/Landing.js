import styles from "../styles.module.scss"

export default function LandingSection() {
    return (
        <div className={styles.Landing}>
            <div className='card'>
                <div className='content'>
                    <h1 className={styles.title}>Markup-Convert <div className="rotate">&#129422;</div></h1>
                    <h4 className={styles.subtitle}>Unidirectional Conversion: AsciiDoc || Markdown -{">"} HTML </h4>
                    <p className={styles.description}>Experience the magic of a lightweight markup text editor!</p>
                </div>
            </div>
        </div>
    )
}
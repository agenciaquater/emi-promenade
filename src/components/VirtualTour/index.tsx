import styles from './styles.module.scss'

export function VirtualTour(){
    return (
        <div className={styles.container}>
            <h1>TOUR VIRTUAL</h1>
            <p>Apartamentos final 02:</p>


            <iframe src="https://www.portal.iteleport.com.br/tour3d/decorado-promenade-emi-empreendimentos/fullscreen/">

            </iframe>
        </div>
    )
}
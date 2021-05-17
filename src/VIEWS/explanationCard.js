import './ViewCSS/explanationCard.css'

const ExplanationCard = ({continueBtn})=>{






    return(

        <div className={'explanation-card-container'}>

            <div className="text-container">
                <h2>Explicación</h2>
                <p>
                    Esta página simula ser un softwer dentro del universo de Rick and Morty. Con la que podemos encontrar gente y ver si van a morir en el futuro.
                </p>
                <p>
                    Puntualmente nos encontramos en el comienzo del episodio 3 de la temporada 1.
                    A partir de este punto, tenemos dos opciones de búsqueda.

                </p>
                <p>
                    Si buscamos por <span className={'bold'}>Locación</span>, el software <span className={'italics'}> "buscaría" </span> todo lo mas adelante posible, y encontrarémos todas las personas que residan en ese lugar con su descripción y si están vivos o muertos.
                </p>
                <p>
                    Si buscamos por <span className={'bold'}>Nombre</span>, el software  <span className={'italics'}> "buscaría" </span> a la persona indicada y responde que tan pronto podría morir.
                </p>

                <p className={'disclaimer'}>
                    Este mensaje solo se va a mostrar la primera vez que se use la página después de cerrar el navegador
                </p>
                <button onClick={continueBtn}>Continue</button>
            </div>





        </div>




    )
}

export default ExplanationCard
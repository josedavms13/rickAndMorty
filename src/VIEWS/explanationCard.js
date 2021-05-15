import './ViewCSS/explanationCard.css'

const ExplanationCard = ({continueBtn})=>{






    return(

        <div className={'explanation-card-container'}>

            <div className="text-container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsam molestias omnis optio quis reprehenderit tenetur voluptas. Eius eveniet illum ipsa, minus officiis suscipit unde! Animi harum laudantium nisi reprehenderit?
                </p>
            </div>

            <button onClick={continueBtn}>Continue</button>




        </div>




    )
}

export default ExplanationCard
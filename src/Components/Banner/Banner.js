import './style.css'

function Banner({clique}) {

    return(

        <div id="banner" >
            <p class= "centro"> Woody, Buzz Lightyear e o resto da turma embarcam em uma viagem com Bonnie e um novo brinquedo chamado Forky. </p>
            <button><a href='https://www.youtube.com/watch?v=76CslX-q5C4'> {clique}</a></button>
        </div>
    )

}

export default Banner;
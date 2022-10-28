function Evento({ numero }) {

    function meuEvento() {
        console.log('Oops, I was activated!')
    }

    return(
        <div>
            <p>Click to trigger an event:</p>
            <button onClick={meuEvento}>Activate!</button>
        </div>
    )

}

export default Evento
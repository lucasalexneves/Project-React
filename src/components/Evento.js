import Button from './Event/Button'

function Evento() {

    function meuEvento() {
        console.log(`Activating first event!`)
    }

    function segundoEvento(){
        console.log('Activating the second event!')
    }

    return(
        <div>
            <p>Click to trigger an event:</p>
            <Button event={meuEvento} text="First Event" />
            <Button event={segundoEvento} text="Second Event" />

        </div>
    )

}

export default Evento
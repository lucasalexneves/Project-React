import {useState} from 'react'

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Register your email:</h2>
            <form>
                <input 
                type="email" 
                placeholder="Enter your email..." 
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Send email</button>
                {userEmail && (
                    <div>
                       <p> User email is: {userEmail}</p>
                       <button onClick={limparEmail}>Clear email</button>
                    </div>
                )}
            </form>
            
            
        </div>
    )

}

export default Condicional
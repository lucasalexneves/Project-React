function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Registered the User")
    }

    return(
        <div>
            <h1>My cadastre:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div>
                    <input type="submit" value="Cadastre" />
                </div>
            </form>
        </div>

    )

}

export default Form
function Pessoa({nome, idade, profissao, foto}) {

    return(
        <div>
            <img src={foto} alt={nome} />
            <h2>Name: {nome} </h2>
            <p>Age: {idade}</p>
            <p>Profession: {profissao}</p>
        </div>
    )

}

export default Pessoa
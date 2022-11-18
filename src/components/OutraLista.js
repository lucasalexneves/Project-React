function OutraLista ({ itens }) {

    return(
        <>
            <h3>List of Good Things</h3>
            {itens.lenght > 0 ? (
            itens.map((item, index) => <p key={index}>{item}</p>)
            ) : (
                <p>There are no items in the list!</p>
            )}
        </>
    )

}

export default OutraLista
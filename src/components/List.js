import Item from "./Item"

function List() {

    return(
        <>
            <h1>My List</h1>
            <ul>
                <Item marca = "Ferrari" />
                <Item marca = "Fiat" />
                <Item marca = "Renault" />
            </ul>
        </>
    )
}

export default List
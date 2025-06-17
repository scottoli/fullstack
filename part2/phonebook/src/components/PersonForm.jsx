const PersonForm = ({ handleChangeName, handleChangeNumber, handleSubmit, newName, newNumber }) => {
    return (
        <form onSubmit={handleSubmit} >
            <div>
            name: <input value={newName} onChange={handleChangeName} />
            </div>
            <div>
            number: <input value={newNumber} onChange={handleChangeNumber} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
const Filter = ({ nameFilter, handleChangeFilter }) => {
    return (
        <div>filter shown with <input value={nameFilter} onChange={handleChangeFilter}/></div>
    )
}

export default Filter
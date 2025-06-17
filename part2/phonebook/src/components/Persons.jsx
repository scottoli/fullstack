import Person from './Person'

const Persons = ({ persons, nameFilter, handleDelete }) => {
    return (
        <div>
            {
            persons
            .filter(person => person.name.toLowerCase().search(nameFilter) !== -1)
            .map((person) => <Person key={person.id} person={person} handleDelete={() => handleDelete(person)}/>)
            }
        </div>
    )
}

export default Persons
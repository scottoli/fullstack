import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(data => setPersons(data))
  }, [])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let newPerson = { name: newName, number: newNumber }
    const index = persons.findIndex(elem => elem.name === newPerson.name)
    if (index === -1) {
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          setNotification(`Added ${newPerson.name}`)
          setTimeout(() => setNotification(null), 5000)
        })
    }
    else {
      if (confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
        const id = persons[index].id
        personService
          .update(id, newPerson)
          .then((response) => {
            setPersons(persons.map(person => person.id === response.id ? response : person))
          })
          .catch((error) => {
            setErrorMessage(`${newName} was already removed from server`)
            setTimeout(() => setErrorMessage(null), 5000)
            setPersons(persons.filter(person => person.id !== id))
          })
      }
    }

    setNewName('')
    setNewNumber('')
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChangeFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const handleDelete = (person) => {
    const id = person.id
    if (confirm(`Delete ${person.name}?`)) {
      personService
        .deleteEntry(id)
        .catch((error) => {
          setErrorMessage(`${person.name} already deleted from server`)
          setTimeout(() => setErrorMessage(null), 5000)
        })
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} color='green'/>
      <Notification message={errorMessage} color='red' />
      <Filter nameFilter={nameFilter} handleChangeFilter={handleChangeFilter} />
      <h2>Add New</h2>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber}
      newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
import axios from 'axios'

const base = 'http://localhost:3001/persons'

const getAll = () => {
    return axios
        .get(base)
        .then(response => response.data)
}

const create = (person) => {
    return axios
        .post(base, person)
        .then(response => response.data)
}

const deleteEntry = (id) => {
    return axios.delete(`${base}/${id}`)
}

const update = (id, person) => {
    return axios.put(`${base}/${id}`, person)
        .then(response => response.data)
}

export default { create, getAll, deleteEntry, update }
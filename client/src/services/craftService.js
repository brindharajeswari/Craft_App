import { customAxiosWithAuth } from './api'

export async function getAllCrafts() {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.get('/craft')
        console.log(response)
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}

export async function getCraft(id) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.get(`/craft/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function deleteCraft(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/craft/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createCraft(craft) {
    const axios = customAxiosWithAuth()
    try {
        console.log(craft)
        const response = await axios.post('/craft', craft)
        console.log(response)
        return response.data
    } catch(err) {
        console.log(err.message)
        return err
    }
}

export async function updateCraft(id, craft) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/craft/${id}`, craft)
    } catch(err) {
        console.log(err.message)
        return err
    }
}
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
})

export const getBackendMessage = async () => {
  const response = await api.get('/')
  return response.data
}

export const getPosts = async () => {
  const response = await api.get('/api/posts')
  return response.data
}

export const createPost = async (post) => {
  const response = await api.post('/api/posts', post)
  return response.data
}

export const deletePost = async (id) => {
  const response = await api.delete(`/api/posts/${id}`)
  return response.data
}

export const askAI = async ({ messages, systemPrompt, provider }) => {
  const response = await api.post('/ai/ask', {
    messages,
    systemPrompt,
    provider,
  })
  return response.data
}

export default api

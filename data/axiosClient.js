import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://ps-api-rbja4.ondigitalocean.app' // 'http://localhost:3021' //  
})

export default axiosClient

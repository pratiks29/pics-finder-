import axios from 'axios'

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization :'Client-ID ZJvEdsV1vWfikwFUmL9Sw5EfQk0wx0FkZnAQfDyg_RY'
    }
})

import axios from 'axios'

export default axios.create({
  baseURL:'https://lxvproject-8f574-default-rtdb.firebaseio.com'
})
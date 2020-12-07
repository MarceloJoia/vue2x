import axios from 'axios'
import { URI_BASE_API } from '../configs/api'//como não foi exportado os valores Default, precisa especificar o que deseja exportar {URI_BASE_API}

axios.defaults.baseURL = URI_BASE_API

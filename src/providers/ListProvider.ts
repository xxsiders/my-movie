import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import { Configs } from '../constants/Configs'

function ListProvider() {
    const [loading, setloading] = useState(false)
    const [data, setData] = useState([])

    const fetchList = async (filter: string) => {
        try {
            setloading(true)
            const request = await axios.get(`${Configs.baseUrl}/discover/movie?api_key=${Configs.apiKey}&region=US&sort_by=${filter}&include_adult=false&page=1`)
            setData(request.data.results)
            setloading(false)
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Something went wrong!!')
        }
    }

    return {
        loading,
        fetchList,
        data
    } as const
}

export default ListProvider

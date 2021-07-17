import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import { Configs } from '../constants/Configs';


function MovieProvider() {
    const [loading, setloading] = useState(false)
    const [data, setData] = useState({
        overview: '',
        credits: []
    })

    const fetchDetails = async (id: string) => {
        try {
            setloading(true)

            const creditsRequest = await axios.get(`${Configs.baseUrl}/movie/${id}/credits?api_key=${Configs.apiKey}&language=en-US`)

            const detailsRequest = await axios.get(`${Configs.baseUrl}/movie/${id}?api_key=${Configs.apiKey}&language=en-US`)
            
            setData({ overview: detailsRequest.data.overview, credits: creditsRequest.data.cast })

            setloading(false)
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Something went wrong!!')
        }
    }

    return {
        loading,
        fetchDetails,
        data,
    } as const
}

export default MovieProvider

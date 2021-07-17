import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import { Movie } from "../../types";
import { Configs } from '../constants/Configs';
import { getGenres } from "../utils/getGenres";


function ListProvider() {
    const [loading, setloading] = useState(false)
    const [data, setData] = useState([])


    const fetchGenres = async () => {
        try {
            const request = await axios.get(`${Configs.baseUrl}/genre/movie/list?api_key=${Configs.apiKey}&language=en-US`)
            return request.data.genres
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Something went wrong!!')
        }
    }

    const fetchList = async (filter: string) => {
        try {
            setloading(true)
            const request = await axios.get(`${Configs.baseUrl}/discover/movie?api_key=${Configs.apiKey}&region=US&sort_by=${filter}&include_adult=false&page=1`)
            const genres = await fetchGenres()
            const updateGenres = await request.data.results.map(async (item: Movie) => {
                if (item.genre_ids.length != 0) {
                    const newGenres = await getGenres(item.genre_ids, genres)
                    return { ...item, genres: newGenres }
                }
                return { ...item, genres: [] }
            })
            const newData = await Promise.all(updateGenres)
            setData(newData)
            setloading(false)
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Something went wrong!!')
        }
    }

    return {
        loading,
        fetchList,
        data,
    } as const
}

export default ListProvider

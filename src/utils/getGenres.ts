import { Genre } from "../../types"

export const getGenres = async (ids: Array<number>, genres: Array<Genre>) => {
    const genresList = []
    ids.forEach((id) => {
        genresList.push(genres.find(a => a.id === id))
    })
    return genresList
}

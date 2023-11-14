import { useQuery } from "react-query";
import axios from "axios";

const fetchTopAnimeById = async (animeId) => {
    try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}/full`);
        return response.data;
    } catch (error) {
        console.error(error);
        console.log("Gagal mengambil data!");
    }
};

export const useDetailTopAnime = (animeId) => {
    return useQuery(["detail-anime", animeId], () => fetchTopAnimeById(animeId));
};

// fetch anime
const url = 'https://api.jikan.moe/v4/top/anime'

export const useFetchDataAnime = () => {
     const wery = useQuery('dataTopAnime', async () => {
        try {
            const responAnime = await axios.get(url)
            return responAnime.data
        } catch (error) {
            console.log(error)
        }
    })

     return wery;
    
}
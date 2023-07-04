import axios from "axios"
import {
    defineStore
} from "pinia"
import {
    apiKey
} from "../static"

export const useItemId = defineStore('ItemId', {
    id: 'popular',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movie: null,
        tv: null,

    }),
    actions: {
        async getItemId({
            type,
            id
        }) {
            try {
                let responce = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=ru-RU`)
                type == "movie" ? this.movie = response.data : this.tv = response.data
                console.log( type, response.data);
            } catch (error) {
                console.log('ошибка при получении id' + type, error);
            }
        }
    }
})
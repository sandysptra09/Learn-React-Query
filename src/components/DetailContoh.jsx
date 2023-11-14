import { useParams } from "react-router-dom";
import { useDetailTopAnime } from "../hooks/detailTopAnime";

export default function DetailContoh() {
    const { animeId } = useParams();
    const { isLoading, isError, error, data } = useDetailTopAnime(animeId);

    if (isLoading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                <h2>{error.message}</h2>
            </div>
        );
    }

    return (
        <div>
            {data.data.title}
        </div>
    );
}

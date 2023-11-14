import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Contoh.css";
import { useFetchDataAnime } from "../hooks/detailTopAnime";

const urlAPI = "https://api.jikan.moe/v4/top/anime";

export default function Contoh() {
    const bebas = useFetchDataAnime()

    const { isLoading, isError, data } = useQuery("dataTopAnime", async () => {
        try {
            const responseTopAnime = await axios.get(urlAPI);
            return responseTopAnime.data;
        } catch (error) {
            console.error(error);
            console.log("Error fetching data...");
        }
    });

    console.log(bebas);

    return (
        <div>
            {isLoading &&
                <div className="loading">
                    <img src="https://media.tenor.com/dx5sdhciKS8AAAAM/atsushi-nakajima-confused.gif" alt="Loading data..." />
                    <h1>Loading data...</h1>
                </div>}

            {isError &&
                <div className="error">
                    Error fetching data...
                </div>}

            {!isLoading && !isError && (
                <div className="container">
                    <h1>React Query</h1>
                    <div className="card-anime">
                        {data.data.map((anime) => (
                            <div key={anime.mal_id} className="card">
                                <img src={anime.images.jpg.image_url} alt={anime.title} />
                                <Link to={`/anime/${anime.mal_id}`}>
                                    <h3>{anime.title}</h3>
                                </Link>
                                <div className="rating">
                                    <svg
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                                            fillRule="nonzero"
                                        />
                                    </svg>
                                    <h5>{anime.score}</h5>
                                </div>
                                <span>
                                    {anime.episodes} Episodes ( {anime.duration} )
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

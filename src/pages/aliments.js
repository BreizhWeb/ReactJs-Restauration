import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3001/";

export default function Aliment() {
    const [aliments, setAliments] = React.useState(null);

    React.useEffect(() => {
        async function fetchAliments(){
            return await axios.get(baseURL+`aliments/`);
        }
        
        (async () => {
            const aliments = await fetchAliments();
            setAliments(aliments.data);
            console.log(aliments)
        })();
    }, []);
  if (!aliments) return null;

  return (
    <div class='global'>
        {aliments.map((aliment) => (
            <div class='plat'>
                <h1>{aliment.nom}</h1>
                <h2>{aliment.type}</h2>
                <h2>{aliment.quantite}</h2>
                <p>{aliment.date}</p>
            </div>
        ))}
      </div>
  );
}
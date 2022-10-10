import { url } from "inspector";
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


interface PokemonProps {
    pokemon: {
        name: string;
        url: string;

    }

    infos: {
        front_default: string;
        types: string[];
        stats: string[];
    }

}

export function Card(props: PokemonProps) {

    useEffect(() => {
        api.get('name')
            .then(reponse => console.log(reponse.data))
    }, []);

    return (
        <Container>
            <div>
                <img src="{front_default}" alt=""/>
                <div className="box-title">
                    <strong> </strong>
                    <div>
                        <strong> Grass </strong>
                    </div>
                </div>
            </div>
        </Container>
    );
} 
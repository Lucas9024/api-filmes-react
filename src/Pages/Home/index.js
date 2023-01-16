import React from 'react';
import { Container, Li, List} from './styles';

function Home() {


    {/*Criando array para listar os animes*/}
    const animes = [
        
        {
            title: 'Naruto Shipuden',
            image_url: 'https://cf.geekdo-images.com/gf25Q2fun2X5WnjwmQIOvA__opengraph/img/mgvE1sMniljGIgXK9caUTJobpWA=/fit-in/1200x630/filters:strip_icc()/pic2928408.jpg'
        },
        {
            title: 'Bleach',
            image_url: 'https://m.media-amazon.com/images/I/418IN1nlzRL._AC_.jpg'
        },
        {
            title: 'Death Note',
            image_url: 'https://upload.wikimedia.org/wikipedia/pt/c/c0/Death_Note_vol._01.jpg'
        },
        {
            title: 'Yu Yu Hakusho',
            image_url: 'https://www.justwatch.com/images/poster/250677199/s332/temporada-4'
        },
        {
            title: 'Rainbow',
            image_url: 'https://animefire.net/img/animes/rainbow-nisha-rokubou-no-shichinin-large.webp?v=1'
        },

        {
            title: 'One Piece',
            image_url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpe'
        }
    ];
    {/* Criando array para listar os meus filmes */}

    const movies = [
        {
            title: "Matrix Revolutions",
            img_url: "https://upload.wikimedia.org/wikipedia/pt/9/94/Matrix_revolutions.jpg",

        },

        {
            title: "Blade Runner 2049",
            img_url: "https://upload.wikimedia.org/wikipedia/pt/a/af/Blade_Runner_2049.png"
        }
    ]

    return (

        <Container>
            
        <h1>Aqui esta a lista dos melhores filmes e animes disponíveis para você!</h1>

        <List>
        {animes.map(anime => {
            return (   
                    <Li>
                      <a href='https://google.com'>
                      <img src={anime.image_url}/>
                        <h2>{anime.title}</h2>
                        </a>  
                    </Li>
            );
        })}

        {movies.map (movie => {
            return (
                
                    <Li>
                        <a href='https://google.com'>
                        <img src={movie.img_url}/>
                        <h2>{movie.title}</h2>
                        </a>
                    </Li>
                
            );
        })}

        </List>
        </Container>
    );
}


export default Home;
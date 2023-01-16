import React from 'react';
import { Container, List } from './styles';

function Home() {

    const animes = [
        
        {
            title: 'Naruto Shipuden',
            image_url: 'https://m.media-amazon.com/images/I/815ojmQiBgL._AC_SX466_.jpg'
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
            image_url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e60626c56bf7437857e0caf7cbc4bf4a.jpe'
        },
        {
            title: 'Rainbow',
            image_url: 'https://animefire.net/img/animes/rainbow-nisha-rokubou-no-shichinin-large.webp?v=1'
        },

        {
            title: 'One Piece',
            img_url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpe'
        }
    ];

    return (

       

        <Container>
            
        <h1>Aqui esta a lista dos seus melhores filmes!</h1>

        <List>
        {animes.map(anime => {
            return (
                <ul>
                    <a href='https://google.com'>
                    <li>
                        
                    <img src={anime.image_url}/>
                    <h2>{anime.title}</h2>

                    </li>
                    </a>
                   
                </ul>
            );
        })}
        </List>
            
        </Container>
    );
}


export default Home;
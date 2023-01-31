import {useEffect, useState} from 'react';
import { Container, Li, List} from './styles';
import { Apikey } from '../../config/key';
import { Link } from 'react-router-dom';

function Home() {


    /**Criando um array para listar o pdf */

    const pdf = {

        /** titulo de cada tela*/

        titleData: 'Dados da Obra',
        /** ********************  */

        data: '30/06/2023',
        tipoRevest: 'tecnico',
        metragemData: '100 x 100',
        razaoSocial: 'Ns', 
        endereco: 'rua das missas',
        cep: '39805-540',
        cnpjCpf: '039.815.340-45/1000',
        incricaoEstadual: '085469737',
        enderecoDaObra: 'rua acemar neto',
        contato: 'Alcides moreira',
        setor: 'Hidraulico',
        email: 'lucasferrer@gmail.com',
        telefone: '55 994512768',
        aplicador: 'gomercindo',
        representante: 'Jose bonifacio',
        PV: '999',

         /** titulo de cada tela */

         titleCheck: 'Check List',
         /** ********************  */
         cliente: 'Edson Dutra',
         dadosLevantados: 'Vistoria in Loco',
         tipoDeUso: 'Residencial',

         /** subTitulo  */

         subTitlePrincipal: 'Sistema principal / Aplicador / Especificador',
           /** ********************  */
         sistemaPrincipal: 'Obra',
         MetragemCheck: '45 x 45',

          /** subTitulo  */

          subTitleRevest: 'Solicitacao de revestimento',
          /** ********************  */

          cor: 'Cinza',
          Espessura: '3cm',
          AreaTotal: '2mt',
          rodape: 'Nao',
          altura: '1,90mt',
          juntos: 'sim',
          canaleta: 'nao',
          faixasDemarcatorias: 'sim',
          refBordas: 'nao',
          Sinalizacoes: 'Hidrantes',
          acabamento: 'fosco',

           /** subTitulo  */
         subTitleSubstrato: 'Tipo de Substrato',
         /** ********************  */

        idadeDoConcreto: '7 anos',
        mpa: 'rna',
        baixaResistencia: 'nao',
        revestimentoExistente:'contra-piso',

         /** subTitulo  */

         subTitleMecanica: 'Solicitacao mecanica',
           /** ********************  */

           veiculos: 'leves',
           carrinhoDeRodas: 'removivel',
           empilhadeiras: 'Eletrica',
           peso: '2 toneladas',

           /** subTitulo  */

         subTitleQuimica: 'Solicitacao quimica',

         /** ********************  */

         substanciasQuimica: ['Acetato de glicogenio', 'Ar liquido', 'Biocombustivel'],
         concentracao: '15%',
         temperatura: '41 graus',
         Intensidade: 'leve',
         ambiente: 'interno',
        
        /** subtitulo */

        subTitleReparo: 'Reparo de base / Reparo',
        /** ********************  */

        preparo: 'Fresamento',
        material: 'Silicio',

         /** subtitulo */

         subTitleLimpeza: 'Limpeza',
         /** ********************  */

         limpeza: 'Manual',

          /** subtitulo */

        subTitleExpectativa: 'Expectativa de liberacao',

        /** ********************  */

        tempo: '24 horas 48 horas'


        }


    /*Criando array para listar os animes*/

    /*
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

    /* Criando array para listar os meus filmes */
    /*
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
    */


   //criando um estado para puxar meus filmes e animes

   const [tvs, setTvs] = useState([]);
   const [anime, setAnimes] = useState([]);
   const imgpath = "https://image.tmdb.org/t/p/w500/";


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${Apikey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setTvs(data.results)
        })
    }, []);



    return (

        <Container>
            
        <h1>Aqui esta a lista dos melhores filmes e animes disponíveis para você!</h1>

        <List>
      
        {anime.map(animes => {

            return (   
                <Li>
                    <a href='https://google.com'>
                    <img src={animes.image_url}/>
                    </a>  
                    <h2>{animes.title}</h2>
                   
                </Li>
            );
        })}
        

        {tvs.map(tv => {

            return (

                <Li key={tv.id}>
                   <Link to={`/details/${tv.id}`}>
                   <img src={`${imgpath}${tv.poster_path}`}/>
                   </Link>
                   
                    <a href='https://google.com'>
                    <h2>
                    {tv.name}
                    </h2>
                    </a>
                </Li> 
                
            );
        })}

        </List>
        </Container>
        
    );
}

export default Home;




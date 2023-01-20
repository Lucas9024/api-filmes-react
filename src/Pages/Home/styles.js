import styled from "styled-components";


export const Container = styled.div`
    h1 {
        text-align: center;
        padding: 4rem 0;
}

`;

export const List = styled.ul`
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    column-gap: 50px;
    row-gap: 20px;
`;




export const Li = styled.li`
     display: flex;
     flex-direction: column;
     justify-content: space-around;

     img {
        width: 300px;
        object-fit: cover;
     }
     h2{
        text-align: center;
     }

     a {
    list-style: none;
    text-decoration: none;
    color: #f5f5f5;
    padding: 2rem;
     }

    `;


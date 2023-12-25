import styled from "styled-components";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

const MovieBox = styled.div`
    width: 300px;
    border : 1px solid black;
    background-color: darkblue;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .movie-poster {
        width: 100%;
    }

    
`;

const MovieInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const InfoBox = styled.div`
    position: absolute;
    top:0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color:white;

    display: flex;
    flex-direction: column;
    align-items: center;

    opacity: 0;
    transition: opacity 0.3s;

    .infoTitle {
        margin-top: 50px;
    }
    
    .overview {
        margin-top: 30px;
    }

    &:hover {
        opacity:1;
    }
    
`;

export {AppContainer,MovieBox,MovieInfo,InfoBox};
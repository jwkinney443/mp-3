import {styled} from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #ffffff;
    color: #390765;

    @media screen and (max-width: 900px){  
        align-items:center;
    };
`;


export default function Header(){
    return (
        <StyledHeader>
            <h1>John (Jack) Kinney</h1>
            <p>Online Resume</p>
        </StyledHeader>

    );
}
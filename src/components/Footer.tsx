import {styled} from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #ffffff;
    color: #390765;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;


export default function Footer(){
    return (
        <StyledFooter>
            <p>All rights reserved by John Kinney: <a href="">Credits</a> &#169;</p>
        </StyledFooter>

    );
}
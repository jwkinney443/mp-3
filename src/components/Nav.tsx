import {styled} from 'styled-components';
import {Link} from "react-router-dom";

const StyledNav = styled.footer`
    width: 30%;

    @media screen and (max-width: 900px){
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #bd81ed;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;

    @media screen and (max-width: 900px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #bd81ed;
        list-style: none;
        padding: 1vh;
        gap: 10px;
    }
`;

const StyledLi= styled.li`
    font-size: calc(3px + 3vw);
    width: 90%;
    background-color: #f2ecf4;
    padding: 2vh 0;
    margin: 5vh auto;
    border-radius: 10px;
    box-shadow: 2px 2px 6px #7a38ae;

    @media screen and (max-width: 900px) {
        font-size: calc(2px + 2vw);
        background-color: #f2ecf4;
        padding: 1vh 0;
        margin: 1vh 0;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #390765;
`;



export default function Nav(){
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/about`}>About</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/employment`}>Employment</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/skills`}>Skills</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/contact`}>Contact</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>

    );
}
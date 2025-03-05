import {styled} from 'styled-components';

const StyledMain = styled.main`

    display: flex;
    flex-direction: column;
    width:70%; /*For screens bigger than 1000-px: should not exceed 70% of the width of its parent*/
    background-color: #e0c3f3;

    @media screen and (max-width: 900px){
        width: 100%;
        height: auto; /*increase height of main to 100vh to avoid white space at bottom*/
        display: flex;
        flex-direction: column;
        background-color: #e0c3f3;
    };

`;

const StyledTitle = styled.div`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: #390765;

    @media screen and (max-width: 900px){
        text-align: center;
    }

`;

const MainDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;

`;

const MainText = styled.div`
    align-self: center;
    width: 70%;
    margin: 1vh 1vw;

    @media screen and (max-width: 900px){
        align-self: center;
        width: 100%;
        margin: 1vh 1vw;
    }

`;

const StyledH = styled.h3`
    font-size: calc(3px + 3vw);
    color: #853ebd;
    margin: 2vh 0;
    
    @media screen and (max-width: 900px){
        font-size: calc(3px + 3vw);
    }
`;

export default function Skills(){
    return (
        <StyledMain>
            <StyledTitle>
                <h2>Skills</h2>
            </StyledTitle>
            <MainDiv>
                <MainText>
                    <StyledH>Languages</StyledH>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>C</li>
                        <li>Latex</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>XML</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>VHDL</li>
                        <li>Assembly</li>
                    </ul>
                    <StyledH>Frameworks and Libraries</StyledH>
                    <ul>
                        <li>React</li>
                        <li>Flask</li>
                        <li>NumPy</li>
                        <li>pandas</li>
                        <li>Matplotlib</li>
                        <li>Scikit-learn</li>
                    </ul>

                    <StyledH>Technologies and Tools</StyledH>
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Visual Studio</li>
                        <li>PyCharm</li>
                        <li>IntelliJ</li>
                    </ul>
                    <StyledH>Spoken Languages</StyledH>
                    <ul>
                        <li>English (Native)</li>
                        <li>Korean (Intermediate)</li>
                    </ul>
                </MainText>

            </MainDiv>

        </StyledMain>
    );
}
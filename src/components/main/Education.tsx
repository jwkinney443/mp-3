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

const MainP = styled.p`
    margin: 0 1vw;
    font-size: calc(2px + 2vw);

    @media screen and (max-width: 900px){
        margin: 0 1vw;
        font-size: calc(2px + 2vw);
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


const Bu = styled.img`
    max-width: 85%;
    height:auto;
    margin: 2vh auto;

    @media screen and (max-width: 900px){
        max-width: 55%;
        
    }
`;

const Rit = styled.img`
    max-width: 65%;
    height:auto;
    margin: 2vh auto;

    @media screen and (max-width: 900px){
        max-width: 45%;
        
    }
`;


export default function Education(){
    return (
        <StyledMain>
            <StyledTitle>
                <h2>Education</h2>
            </StyledTitle>
            <MainDiv>
                <MainText>
                    <Bu src={"/images/bu.png"} alt={"Boston University Logo"}/>
                    <StyledH>Boston University</StyledH>

                    <MainP><strong>Degree:</strong> Bachelor of Arts in Computer Science</MainP>
                    <MainP><strong>Duration:</strong> September 2022 – May 2025 (Expected)</MainP>
                    <MainP><strong>Description:</strong> At Boston University, I have pivoted towards focusing on algorithms, data structures, and software engineering while also exploring areas like artificial intelligence and machine learning.</MainP>

                    <Rit src={"/images/rit.png"} alt={"Rochester Institute of Technology Logo"}/>
                    <StyledH>Rochester Institute of Technology</StyledH>
                    <MainP><strong>Degree:</strong> Bachelor of Science in Computer Engineering</MainP>
                    <MainP><strong>Duration:</strong> August 2021 – May 2022 (Transferred)</MainP>
                    <MainP><strong>Description:</strong> During my time at RIT, I gained hands-on experience in circuit design. This foundational knowledge in engineering has enriched my understanding of hardware-software integration in computing.</MainP>

                    <StyledH>Relevant Coursework</StyledH>
                    <ul>
                        <li>Data Structures and Algorithms</li>
                        <li>Data Science Tools and Applications</li>
                        <li>Software Engineering</li>
                        <li>Fullstack Development</li>
                        <li>Digital System Design</li>
                        <li>Databases</li>
                    </ul>


                </MainText>

            </MainDiv>

        </StyledMain>
    );
}
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
    width: 65%;
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

const MainProfile = styled.div`
    width: 60%;
    margin: 1vh 1vw;
    
`;

const ProfilePic = styled.img`
    max-width: 100%;

    @media screen and (max-width: 900px){
        max-width: 100%;
        
    }
`;

const CatPic = styled.img`
    max-width: 65%;
    height:auto;
    margin: 2vh auto;

    @media screen and (max-width: 900px){
        max-width: 70%;
        
    }
`;


export default function About(){
    return (
        <StyledMain>
            <StyledTitle>
                <h2>About</h2>
            </StyledTitle>
            <MainDiv>
                <MainProfile>
                    <ProfilePic src={"/images/profile.jpeg"} alt={"Profile picture of Jack"}/>
                </MainProfile>

                <MainText>
                    <MainP>Hi again! I'm Jack Kinney, a senior at Boston University pursuing a Bachelor of Arts in
                        Computer Science with a passion for software development and data science. I'm dedicated to
                        applying my skills in problem-solving, machine learning, and full-stack development to create
                        impactful solutions.</MainP>
                </MainText>

            </MainDiv>
            <MainP>Throughout my academic journey, I’ve gained hands-on experience through various projects, including
                building predictive models, optimizing algorithms, and developing full-stack applications.</MainP>
            <MainP>I thrive in collaborative environments where I can learn from others while contributing my skills to
                drive projects forward. I’m particularly interested in software engineering, data analysis, and machine
                learning, and I am excited to pursue opportunities that allow me to apply my knowledge and grow as a
                developer.</MainP>

            <CatPic src={"/images/cat.png"} alt={"Picture of a cat"}/>
            <MainP>Here is a pic of my family cat Winston!</MainP>
        </StyledMain>
    );
}
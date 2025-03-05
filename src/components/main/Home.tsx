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

const WelcomePic = styled.img`
    max-width: 85%;
    height:auto;
    margin: 2vh auto;

    @media screen and (max-width: 900px){
        max-width: 90%;
        
    }
`;


export default function Home(){
    return (
        <StyledMain>
            <StyledTitle>
                <h2>Home</h2>
            </StyledTitle>
            <MainP> Thanks for coming to my corner of the internet!</MainP>
            <MainDiv>
                <MainProfile>
                    <ProfilePic src={"/images/profile.jpeg"} alt={"Profile picture of Jack"}/>
                </MainProfile>

                <MainText>
                    <MainP>Hello, I'm Jack (or formally John) Kinney! I'm a senior at Boston University pursuing a degree in
                        Computer Science. As a software engineer, I'm passionate about building innovative and practical
                        solutions that make everyday life easier and more enjoyable.</MainP>
                </MainText>

            </MainDiv>
            <WelcomePic src={"/images/welcome.gif"} alt={"Gif of a welcome message appearing"}/>
            <MainP>This is my website! Please explore as much as your heart desires! You can learn more about my background, projects, and technical skills through the navigation bar. Feel free to check out my portfolio, reach out to me via email, or connect on LinkedIn. I’m always open to discussing exciting opportunities or exchanging ideas with fellow tech enthusiasts.</MainP>

        </StyledMain>
    );
}
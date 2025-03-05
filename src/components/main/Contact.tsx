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

const MainLi = styled.li`
    list-style-type: none;
    padding: 10px;
    margin: 0 1vw;
`;

const MainProfile = styled.div`
    width: 60%;
    margin: 1vh 1vw;
    
`;

const CatPic = styled.img`
    max-width: 100%;

    @media screen and (max-width: 900px){
        max-width: 100%;
    }
`;

const Happy = styled.img`
    max-width: 85%;
    height:auto;
    margin: 2vh auto;

    @media screen and (max-width: 900px){
        max-width: 100%;

    }
`;


export default function Contact(){
    return (
        <StyledMain>
            <StyledTitle>
                <h2>Contact</h2>
            </StyledTitle>
            <MainDiv>
                <MainText>
                    <MainProfile>
                        <CatPic src={"/images/catmove.gif"} alt={"Gif of cat moving its head from left to right"}/>
                    </MainProfile>
                    <MainP>I'm always excited to connect with others, discuss new opportunities, or collaborate on
                        innovative projects. Whether you’re looking to chat about tech trends, potential collaborations,
                        or just want to exchange ideas, I’d love to hear from you! Here are a few ways you can get in
                        touch:</MainP>
                    <ul>
                        <MainLi><strong>Phone Number: (+1) 777-777-7777</strong></MainLi>
                        <MainLi><strong>School Email:</strong> <a href="mailto:jwkinney@bu.edu">jwkinney@bu.edu</a></MainLi>
                        <MainLi><strong>Personal Email:</strong> <a
                            href="mailto:johnkinney443@gmail.com">johnkinney443@gmail.com</a></MainLi>
                        <MainLi><a href="https://linkedin.com/in/jwkinney443" target="_blank">LinkedIn</a></MainLi>
                        <MainLi><a href="https://github.com/jwkinney443" target="_blank">GitHub</a></MainLi>
                    </ul>
                    <Happy src={"/images/happy.gif"} alt={"Gif of spongebob smiling"}></Happy>
                    <MainP>If you're interested in discussing anything related to software development, data science, or just want to talk tech, feel free to drop me a message anytime. I'm always open to learning new things and working on exciting new challenges!</MainP>

                </MainText>
            </MainDiv>
        </StyledMain>
    );
}
import {styled} from 'styled-components';
import Calculator from './Calculator';

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

export default function Projects(){
    return (
        <StyledMain>
            <StyledTitle>
                <h2>Projects</h2>
            </StyledTitle>
            <MainDiv>
                <MainText>
                    <StyledH>Credit Card Fraud Detection Kaggle Competition</StyledH>
                    <MainP><strong>Technologies:</strong> Python, Boosting, Machine Learning, pandas</MainP>
                    <MainP><strong>Description:</strong></MainP>
                    <ul>
                        <li>Achieved 1st place in a Kaggle competition with over 120 participants, demonstrating exceptional performance in fraud detection. The model achieved 98.65% accuracy on out-of-sample data, leveraging a dataset of over 1.3M+ transactions.</li>
                        <li>Optimized model performance through hyper parameter selection, iterative tuning, and addressing class imbalances to deliver highly reliable predictions.</li>
                        <li>Implemented effective data preprocessing and efficient computation to maintain model scalability and accuracy.</li>
                    </ul>

                    <StyledH>ReCo</StyledH>
                    <MainP><strong>Technologies:</strong> JavaScript, MongoDB, Express, Node.js, HTML, CSS</MainP>
                    <MainP><strong>Description:</strong></MainP>
                    <ul>
                        <li>Created a full-stack event recommendation app integrated with Spotify's and Ticketmaster's API, enhancing user experience by providing personalized concert suggestions.</li>
                        <li>Designed and implemented a MongoDB database schema to efficiently store and retrieve user-specific event data, enabling personalized recommendations and improving performance.</li>
                    </ul>

                    <StyledH>Recipe Cauldron</StyledH>
                    <MainP><strong>Technologies:</strong> JavaScript, Express, Node.js, HTML, CSS</MainP>
                    <MainP><strong>Description:</strong></MainP>
                    <ul>
                        <li>Constructed a full-stack web application to help users generate creative recipes based on available ingredients.</li>
                        <li>Integrated OpenAI’s API to craft personalized recipes with nutritional information, serving sizes, and detailed instructions.</li>
                        <li>Utilized YouTube's API to fetch and display related videos for recipe preparation.</li>
                    </ul>
                </MainText>

            </MainDiv>

            <Calculator/>

        </StyledMain>
    );
}
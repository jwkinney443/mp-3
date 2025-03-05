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

export default function Employment(){
    return (
        <StyledMain>
            <StyledTitle>
                <h2>Employment</h2>
            </StyledTitle>
            <MainDiv>
                <MainText>

                    <StyledH>Office Assistant</StyledH>

                    <MainP><strong>Organization:</strong> Boston University</MainP>
                    <MainP><strong>Location:</strong> Boston, MA</MainP>
                    <MainP><strong>Duration:</strong> September 2022 – Present</MainP>
                    <MainP><strong>Description:</strong></MainP>
                    <ul>
                        <li>Digitized records and improved department efficiency by transitioning to a cloud-based
                            system and handling inquiries with accuracy.
                        </li>
                        <li>Sorted and distributed departmental mail and packages, ensuring timely and accurate delivery
                            of correspondence and materials to faculty, staff, and students.
                        </li>
                        <li>Provided comprehensive support to faculty and graduate students by fulfilling various
                            administrative requests, including data compilation and report generation.
                        </li>
                        <li>Strengthened departmental events by streamlining preparations, coordinating resources, and
                            ensuring smooth operation throughout.
                        </li>
                    </ul>
                    <br/>
                    <StyledH>QA Internship</StyledH>
                    <MainP><strong>Organization:</strong> Mutual Insurance Company</MainP>
                    <MainP><strong>Location:</strong> Virtual (Remote)</MainP>
                    <MainP><strong>Duration:</strong> June 2024 – August 2024</MainP>
                    <MainP><strong>Description:</strong></MainP>
                    <ul>
                        <li>Assisted in the development and execution of test plans to ensure the quality of web
                            applications and internal tools.
                        </li>
                        <li>Worked with software developers to identify, track, and resolve bugs and issues in the
                            system.
                        </li>
                        <li>Conducting manual and automated testing of features, functionalities, and user interfaces
                            across different platforms and devices.
                        </li>
                        <li>Documented test results and providing feedback to improve the software development lifecycle
                            (SDLC) processes.
                        </li>
                    </ul>


                </MainText>

            </MainDiv>

        </StyledMain>
    );
}
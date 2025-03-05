
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/main/Home';
import About from './components/main/About';
import Education from "./components/main/Education.tsx";
import Employment from './components/main/Employment';
import Skills from './components/main/Skills';
import Projects from './components/main/Projects';
import Contact from './components/main/Contact';

import {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {styled} from 'styled-components';

const Container = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: #dacef8;

    @media screen and (max-width: 900px){
        width: 100%;
        flex-direction: column;
    }
`;

const PageWrapper = styled.div`

    width: 85vw;
    margin: 0 auto;
`;



import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
function Root(){

    const urlPath=useParams();

    let lastVal=Object.values(urlPath).pop() || "";

    lastVal = lastVal.charAt(0).toUpperCase() + lastVal.slice(1);

    useEffect(()=>{
        if(lastVal===""){
            document.title = "Home | Resume"; //Default Case
        }else {
            document.title = lastVal + " | Resume"; //Update Accordingly
        }
    },[lastVal]) // update when we change pages / section

    return(
        <PageWrapper>
            <Header/>

            <Container>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/about`} element={<About/>}/>
                    <Route path={`/education`} element={<Education/>}/>
                    <Route path={`/employment`} element={<Employment/>}/>
                    <Route path={`/projects`} element={<Projects/>}/>
                    <Route path={`/skills`} element={<Skills/>}/>
                    <Route path={`/contact`} element={<Contact/>}/>
                </Routes>
            </Container>
            <Footer/>

        </PageWrapper>
    );
}

const router = createBrowserRouter([{path: "*", Component: Root}]);


export default function App() {

  return (
      <RouterProvider router={router}/>
  );
}


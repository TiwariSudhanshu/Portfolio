import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from './components/AboutMe'
import Experience from "./components/Experience";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Message from "./components/Message";
import Projects from "./components/Projects";
import Thoughts from "./components/Thoughts";
import Resume from "./components/Resume";
const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutMe/>
  },{
    path: '/experience',
    element: <Experience/>
  },{
    path:'/services',
    element: <Services/>
  },{
    path:'/resume',
    element: <Resume/>
  },{
    path:'/projects',
    element: <Projects/>
  },{
    path:'/thoughts',
    element: <Thoughts/>
  },{
    path:'/stacks',
    element: <Stack/>
  },{
    path: '/contact',
    element: <Contact/>
  },{
    path: '/message',
    element: <Message/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App

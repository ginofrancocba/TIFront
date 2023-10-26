import React from "react";
import { ThemeProvider } from "./Components/GlobalContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Registro from "./Routes/Registro";
import NotFound from "./Routes/NotFound";
import Header from "./Components/Header";


function App() {

  return (
    <ThemeProvider>
    <div className= "app" >
           <Router>
              <Header />
              <Routes>              
                 <Route index element={<Home/>}/>
                 <Route path="contact" element={<Contact/>} />
                 <Route path="favs" element={<Favs/>} />
                 <Route path="detail/:id" element={<Detail/>} />
                 <Route path="agregar" element={<Registro/>} />
                 <Route path="*" element={<NotFound/>} />
              </Routes>  
              <Footer />
           </Router>      
    </div>
 </ThemeProvider>
);
}

export default App

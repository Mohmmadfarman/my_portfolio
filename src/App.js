
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './component/Nav';
import Service from './component/Service';
import About from './component/About';
import Contact from './component/Contact';
import Work from './component/Work';
import Banner from './component/Banner';
import Header from './component/Header';
import { ToastContainer,toast } from 'react-toastify';




function App() {
  function g(){
    toast.success('good',{
      position:'top-center'
    })
    
  }
  return (
    <div className="bg-site
 bg-no-repeat bg-cover overflow-hidden">
      <Header/>
      <Banner/>
      <Nav/>
      <About/>
      <Service/>
      <Work/>
      <Contact/>
      
    



      {/* <div className='h-[3000px]'>
      
      </div> */}
      
     
     

    </div>
  );
}

export default App;

import Home from './home/page/Homepage'

function App() {
  let navoption ={
    about: "About",
    service : "Services",
    proj :"Project",
    test :"Testimonials",
    cont :"Contact"
  }
  return (
    <div className="App">
      <Home navoption ={navoption}  />
      
    </div>
  );
}

export default App;

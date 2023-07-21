import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/index'
import projects from './data/projects.json'
function App() {
  console.log(projects)
  console.log(projects.projects[0].name)
  return (
    <div className='home'>
      <Header/>
      <Main projects={projects.projects}/>
      <Footer/>
      </div>
  );
}

export default App;

import Projects from './Projects/Projects'
import './index.css'
// the component function
const Main = (props) => {

    //The Components Returned JSX
    return <div className="main"> 
        <Projects projects={props.projects}/>
    </div>
}

// export the component
export default Main

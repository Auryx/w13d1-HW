import Projects from './Projects/Projects'
import './default.css'
// the component function
const Main = (props) => {

    //The Components Returned JSX
    return <div className="default"> 
        <Projects projects={props.projects}/>
    </div>
}

// export the component
export default Main

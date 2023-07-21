import Project from './Project'
import './Projects.css'
// the component function
const Projects = (props) => {
    //The Components Returned JSX
    return <div className="projects_container"> 
        {props.projects.map((item, index) => (
            <Project project={item} key={item.name}/>
        ))}
    </div>
}

// export the component
export default Projects

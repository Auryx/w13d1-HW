function Project (props){
    return <li className='project_container'>
        <li><h3>{props.project.name}</h3></li>
        <li><a href={props.project.deployLink}>Link to Deployed Site</a></li>
        <li><a href={props.project.gitLink}>GitHub</a></li>
    </li>
}

export default Project
import Progress from "../Progress/Progress.jsx"
import './skills.css'

function Skills(){
    return(
        <>
        <div className="skills">
        <h2 className="text-center mt-5">Skills</h2>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate amet laboriosam odit beatae temporibus, sed et aliquam assumenda modi iure officiis, minus nobis tenetur saepe illo perferendis id quo.</p>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h4>My Skills</h4>
                    <h5>UI/UX Design</h5>
                    <h5>Bootstrap</h5>
                    <h5>React</h5>
                    <h5>Angular</h5>
                </div>
                <div className="col-8">
                    <Progress now="60" content="HTML" className="mb-3"/>
                    <Progress now="90" content="UI/UX Design"/>
                    <Progress now="50" content="Bootstrap"/>
                    <Progress now="70" content="React"/>
                    <Progress now="80" content="Angular"/>
                    <Progress now="65" content="Node JS"/>
                </div>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Skills
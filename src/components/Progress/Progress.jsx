import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress(props){
    return(
       
//         <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
//   <div class="progress-bar" style={{width:15%}}>{props.content}</div>
// </div>

<ProgressBar now={props.now} label={`${props.content}`} className="mb-4" variant="info" />
       
    )

}
export default Progress
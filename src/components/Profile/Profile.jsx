import Card from "../Card/Card"
import './profile.css'

function Profile(){
    return(
        <>
         <h2 className="mb-5 mt-5 ms-5">Profile</h2>
         <div className="container mb-5">
            <div className="row">
                <div className="col-3 gray me-5 mb-5">
                <Card title="Web Design"></Card>
                </div>
                <div className="col-3 me-5 black  mb-5">
                <Card title="Web Design"></Card>
                </div>
                <div className="col-3 gray mb-5">
                <Card title="Web Design"></Card>
                </div>
                <div className="col-3 me-5 black ">
                <Card title="Web Design"></Card>
                </div>
                <div className="col-3 me-5 gray ">
                <Card title="Web Design"></Card>
                </div>
                <div className="col-3 black">
                <Card title="Web Design"></Card>
                </div>
            </div>
         </div>
        </>
    )
}
export default Profile
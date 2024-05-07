import './hero.css'
import hero from '/src/assets/imgs/hero.jpg'
function Hero(){
    return(
        <>
        <div className="hero">
            <img src={hero}></img>
            {/* <h1>Katie Reed</h1>
            <button type="button" class="btn btn-light">Light</button> */}
        </div>
        </>
    )
}
export default Hero
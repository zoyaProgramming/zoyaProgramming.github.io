
import img from '../assets/images/2047.png'

function Project({imgSrc, description, linkSrc, alt}){
  return(
    <div className='div-project'>
      <a href={linkSrc}><img src={imgSrc} width={"100%"} alt={alt}/></a>
      <p>
        {description}
      </p>
    </div>
  )

}
export default function Projects(){

  let description2048 = "This is my version of 2048. I made it using React and implemented my own game logic. I would like to add a leaderboard!"
  return (
    <>
      <div className="div-parent-projects">
        <Project imgSrc={img} linkSrc ={"https://zoyaprogramming.github.io/My2048Clone/"} description={description2048} alt={"a screenshot of the author's 2048 game"}></Project>
      </div>
    
    </>
  )
}

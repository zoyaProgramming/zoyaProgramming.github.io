
import img from '../assets/images/2047.png'

function Project({imgSrc, description, linkSrc}){
  return(
    <div className='div-project'>
      <a href={linkSrc}><img src={imgSrc} width={"100%"}/></a>
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
        <Project imgSrc={img} linkSrc ={"https://zoyaprogramming.github.io/My2048Clone/"} description={description2048}></Project>
      </div>
    
    </>
  )
}

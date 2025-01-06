import { useEffect , useState} from "react";


export function MouseTracker(){
  let {clientX, clientY} = useMouseTracker();
  
  return (
    <>
    <div className="heart" style={{position: 'absolute', marginLeft: clientX + Math.random() * 40, marginTop : clientY + Math.random() * 40}}></div>
    <p className = "heart" style={{position: 'absolute', marginLeft: clientX + Math.random() * 40, marginTop : clientY + Math.random() * 40}}></p>
    <p className = "heart" style={{position: 'absolute', marginLeft: clientX + Math.random() * 40, marginTop : clientY + Math.random() * 40}}></p>
    <p className = "heart"   style={{position: 'absolute', marginLeft: clientX + Math.random() * 40, marginTop : clientY + Math.random() * 40}}></p>
    <p className = "heart" style={{position: 'absolute', marginLeft: clientX + Math.random() * 40, marginTop : clientY + Math.random() * 40}}></p>
    </>
    
  )

}
export  function useMouseTracker(){
  const [mousePos, setMousePos] = useState({clientX: 0, clientY: 0})
  useEffect(() => {
    function mouseDrag(event){
      setMousePos({clientX: event.clientX, clientY: event.clientY});
    }
    setTimeout(() => {document.addEventListener("mousemove", mouseDrag)} , 100);
    
    return () => {document.removeEventListener("mousemove", mouseDrag)};
  }, [mousePos]);
  return mousePos;
}
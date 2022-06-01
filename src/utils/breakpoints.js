export default function responsive (){
  const responsive = (e) =>{
          if (e.matches) {
              //console.log("pc"); 
              return true
            }else{
              return false;
              //console.log("movil");
          }
  }

  let breakpoint = window.matchMedia("(min-width: 500px)")
  breakpoint.addListener(responsive)
  responsive(breakpoint)
  console.log("innerWidht"+ window.innerWidth);
}
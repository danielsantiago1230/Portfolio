const interface= ()=>{
    const articlePointer=document.querySelectorAll(".contentCards");
    const menuPointer=document.querySelectorAll(".navButton");
    menuPointer.forEach(Element=>(
        Element.addEventListener("click",()=>{
            console.log("hola");
        })
    ))

   
}
interface();
const interface= ()=>{
    const articlePointer=document.querySelectorAll(".contentCards");
    const menuPointer=document.querySelectorAll(".navButton");
    
    /*default For showing only ront End article*/
    const defaultNavButomSelect=menuPointer[0].classList.contains("navButomSelect");
        if(defaultNavButomSelect==true){
            articlePointer.forEach(article=>{
                if(article!=articlePointer[0]){
                    article.style.display="none"
                }
            })
        }
    /* -----------ends defaut */
    
    /*event click in the menu articles */
    menuPointer.forEach(menuhandleClick=>(
        menuhandleClick.addEventListener("click",()=>{
            articlePointer.forEach(articleHandleClick=>{
                if(menuPointer[1]==menuhandleClick && articleHandleClick!=articlePointer[1] ){
                        articleHandleClick.style.display="none";
                        articlePointer[1].style.display="";
                        /* changes in the buttom styles*/
                        menuPointer.forEach(changeStyleButtom=>{
                            if(menuPointer[1]==changeStyleButtom){
                                changeStyleButtom.classList.add("navButomSelect");
                                changeStyleButtom.classList.remove("navButomUnselect")
                            }
                            else if(menuPointer[1]!=changeStyleButtom && changeStyleButtom.classList!="navButomUnselect"){
                                changeStyleButtom.classList.remove("navButomSelect")
                                changeStyleButtom.classList.add("navButomUnselect")
                            }
                        })
                        /*ends */
                }
                else if(menuPointer[2]==menuhandleClick && articleHandleClick!=articlePointer[2]){
                    articleHandleClick.style.display="none";
                    articlePointer[2].style.display="";
                    /* changes in the buttom styles*/
                    menuPointer.forEach(changeStyleButtom=>{
                        if(menuPointer[2]==changeStyleButtom){
                            changeStyleButtom.classList.add("navButomSelect");
                            changeStyleButtom.classList.remove("navButomUnselect")
                        }
                        else if(menuPointer[2]!=changeStyleButtom && changeStyleButtom.classList!="navButomUnselect"){
                            changeStyleButtom.classList.remove("navButomSelect")
                            changeStyleButtom.classList.add("navButomUnselect")
                        }
                    })
                    /*ends */
                }
                else if(menuPointer[3]==menuhandleClick && articleHandleClick!=articlePointer[3])
                {
                    articleHandleClick.style.display="none";
                    articlePointer[3].style.display="";
                    /* changes in the buttom styles*/
                    menuPointer.forEach(changeStyleButtom=>{
                        if(menuPointer[3]==changeStyleButtom){
                            changeStyleButtom.classList.add("navButomSelect");
                            changeStyleButtom.classList.remove("navButomUnselect")
                        }
                        else if(menuPointer[3]!=changeStyleButtom && changeStyleButtom.classList!="navButomUnselect"){
                            changeStyleButtom.classList.remove("navButomSelect")
                            changeStyleButtom.classList.add("navButomUnselect")
                        }
                    })
                    /*ends */
                }
                else if(menuPointer[0]==menuhandleClick && articleHandleClick!=articlePointer[0]){
                    articleHandleClick.style.display="none";
                    articlePointer[0].style.display="";
                    /* changes in the buttom styles*/
                    menuPointer.forEach(changeStyleButtom=>{
                        if(menuPointer[0]==changeStyleButtom){
                            changeStyleButtom.classList.add("navButomSelect");
                            changeStyleButtom.classList.remove("navButomUnselect")
                        }
                        else if(menuPointer[0]!=changeStyleButtom && changeStyleButtom.classList!="navButomUnselect"){
                            changeStyleButtom.classList.remove("navButomSelect")
                            changeStyleButtom.classList.add("navButomUnselect")
                        }
                    })
                    /*ends */
                    
                }
            })
            
        })
    ))

   
}
interface();
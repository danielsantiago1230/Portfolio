// I made this code thinking about don't create new pages for a small menu. We don't have to reload the page every time we're moving in the Nav Menu
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
                //hide carrousel videos
                handleCardsVideos();
            })
            
        })
    ))

   
}
interface();

//Open and Close the carrousel from the cards Audio Visual -videos
const handleCardsVideos=()=>{
    const pointCarrouselVideos=document.querySelectorAll(".videosCarrousel");
    pointCarrouselVideos.forEach(Element=>{
        Element.style.display="none"
    })

    const clickVideosCard=document.querySelectorAll(".buttomVideo");
    const articlevisualEditor=document.querySelector("#visualEditorContent");
    clickVideosCard.forEach(Element=>{
        Element.addEventListener("click",()=>{
            if(Element==clickVideosCard[0]){
                articlevisualEditor.style.display="none";
                pointCarrouselVideos[1].style.display="block"
            }
        })
        Element.addEventListener("click",()=>{
            if(Element==clickVideosCard[1]){
                articlevisualEditor.style.display="none";
                pointCarrouselVideos[0].style.display="block"
            }
        })
        Element.addEventListener("click",()=>{
            if(Element==clickVideosCard[2]){
                articlevisualEditor.style.display="none";
                pointCarrouselVideos[2].style.display="block"
            }
        })
    })
}
handleCardsVideos();
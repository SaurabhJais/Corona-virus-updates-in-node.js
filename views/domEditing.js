$(function(){
    let flag = 0;
    $(".hamburger").click(
        ()=>{
            if(flag == 0){
                flag = 1;
                $(".hamburger").fadeIn().css({
                    left : "auto",
                    right : "20px",
                    zIndex : "1"
                })
                $(".first").fadeIn().css({
                    display : "block",
                    position : "absolute",
                    width : "100%",
                    zIndex : "1"
                })
                $(".second").css({
                    
                })
            }
            else{
                flag = 0;
                $(".hamburger").css({
                    right : "auto",
                    left : "20px",
                    zIndex : "1"
                })
                $(".first").fadeOut().css({
                    display : "none"
                })
                $(".second").css({
                    background : "rgb(250, 117, 117)",
                    opacity : "1"
                })
            }
        }
    )
})
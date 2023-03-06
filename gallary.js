function images()
{
    var im=["./anu5.jpg","./anu6.jpg","./anu15.jpg","./anu4.jpg","./anu7.jpg","./anu12.jpg",
    "./anu14.jpg","./anu8.jpg"]

            var len=im.length-1;
            var ran=Math.random()*len;
            var ranNum=Math.round(ran)
    
           document.getElementById("pics").style.backgroundImage="URL(./"+im[ranNum]+")"
            // document.getElementById("pics").style.color="pink"
            var updateTheImages=setTimeout(function(){images()},1000)
}


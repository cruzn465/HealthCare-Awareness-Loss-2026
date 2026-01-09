//IIFE TO EXTRACT DIMENSION DATA
var dimensions = (function(){
        var str = document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value;
        var widthMatch = /width\=(\d+)/.exec(str);
        var heightMatch = /height\=(\d+)/.exec(str);
        return {
            width: parseInt(widthMatch[1]),
            height: parseInt(heightMatch[1])
        }
})();

var tl;
var stopWatch;

//INITIALIZE
function init(){

    // Helper function for FOUC
    let domReady = (cb) => {
        document.readyState === 'interactive' || document.readyState === 'complete'
        ? cb()
        : document.addEventListener('DOMContentLoaded', cb);
    };
    
    domReady(() => {
        // Display body when DOM is loaded
        document.body.style.visibility = 'visible';
    });

    IDsToVars();

    container.style.width = dimensions.width + 'px';
    container.style.height = dimensions.height + 'px';
    
    //set timeline
    tl = new TimelineLite();

    addListeners();
    
    animate();
}

function addListeners(){
    //replay functionality
    /*
    replay_button.addEventListener('mouseover',function(){
        TweenLite.fromTo(replay_button, .5, {rotation:'-360'}, {overwrite:false, rotation:'0'});
    })
    replay_button.addEventListener('click',function(){
            tl.restart();
    })
    */

}

//ANIMATE
function animate(){
    stopWatch=new Date().getTime(); 

    // const bg_copies = [bkg_txt_0,bkg_txt_1,bkg_txt_2,bkg_txt_3,c1_2x,bkg_txt_4,c2_2x,bkg_txt_5,c3_2x,bkg_txt_6,c4_2x,bkg_txt_7,bkg_txt_8,bkg_txt_9,bkg_txt_10,bkg_txt_11,bkg_txt_12,bkg_txt_13,bkg_txt_14,bkg_txt_15,bkg_txt_16,bkg_txt_17,bkg_txt_18,bkg_txt_19,bkg_txt_20]
    //timeline animation here
    //set timeline
    tl
    // F1
    .from([bg2_2x],.9,{opacity:0,ease:Power1.easeIn},0)
    .from([copyCircle1Top_2x,copyCircle1Bottom_2x,eyebrow1_2x,c1_2x],.25,{opacity:0,ease:Power2.easeIn},"-=.2")
    .from([box1,box2,box3,box4],.25,{opacity:0,ease:Power2.easeIn},"-=.1")
    .from(box_2x,.25,{opacity:0,ease:Power2.easeIn},"-=.1")

    // box reveal
    .to(box1,.1,{y:74,height:0})
    .to(box2,.2,{width:0},"-=.05")
    .to(box3,.1,{height:0})
    .to(box4,.2,{x:372,width:0},"-=.05")

    // f1 scroll out
    .to([c1_2x,copyCircle1Top_2x,copyCircle1Bottom_2x],.3,{y:33.5,opacity:0,ease:Power1.easeIn},"+=1")
    
    // F2 scroll in/out "turn 26" 
    .from(bg3_2x,.2,{opacity:0,ease:Power1.easeIn},"f2")
    .from([c2_2x,copyCircle2Top_2x,copyCircle2Bottom_2x],.3,{y:-33.5,opacity:0,ease:Power1.easeIn},"f2")
    .to([c2_2x,copyCircle2Top_2x,copyCircle2Bottom_2x],.3,{y:33.5,opacity:0,ease:Power1.easeOut},"+=2")


    // F3 scroll in/out "lost"
    .from(bg4_2x,.2,{opacity:0,ease:Power1.easeIn},"f3")

    .from([c3_2x,copyCircle3Top_2x,copyCircle3Bottom_2x],.3,{y:-33.5,opacity:0,ease:Power1.easeIn},"f3")
    .to([c3_2x,copyCircle3Top_2x,copyCircle3Bottom_2x],.3,{y:33.5,opacity:0,ease:Power1.easeOut},"+=2")


    // F4 scroll in/out "life happens"
    .from(bg5_2x,.2,{opacity:0,ease:Power1.easeIn},"f4")

    .from([c4_2x,copyCircle4Top_2x,copyCircle4Bottom_2x],.3,{y:-33.5,opacity:0,ease:Power1.easeIn},"f4")



    //.call(returnTimer)
}

function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*.001;
    console.log(stopWatch+" seconds");
}

function clickThrough(){
    window.open(clicktag);
}

//SET IDs IN DOM TO GLOBAL VARIABLES
function IDsToVars(){
    var allElements = document.getElementsByTagName("*");
    
    for (var q = 0; q<allElements.length; q++){
         var el = allElements[q];
         if (el.id){
            window[el.id]=document.getElementById(el.id);
        }
    }
};
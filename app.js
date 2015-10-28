/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet
var index=1;
var tmplCARDS= "<li id='NUMBER' class='done'> <h3>NUMTEXT</h3></li>"

$(document).ready(function(){
    
    for(var i=0; i<data.length; i++){
        $(".cards").append(tmplCARDS.replace("NUMBER", data[i]).replace("NUMTEXT", data[i]) );
    }
    
    $(".opt-start").click( function(event) {
        $(".cards li").removeClass("done").addClass("hidden");
       
        $(".cards").on("click","li",function(event) {
        $(this).removeClass("hidden").addClass("done");
        
        
        if( $(this).text() != index ){
            alert("You Lost");
        }else{
            index++;
        }
        
        if( index == 11 ){
            alert("You Won");
        }
        
    })       
        
    })
    
    
  
});








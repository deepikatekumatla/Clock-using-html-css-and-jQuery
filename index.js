var sec_count=6;
var min_count=6;
var hour_count=6;
var sec=0;
var min=0;
var hour=0;
var origin = 0 + "px "+ 135 + "px";
var min_origin = 0 + "px "+ 105 + "px";
var hour_origin=0 + "px " + 85 + "px";
var m=0;
seconds();


function seconds()
{
       setTimeout(function(){$("#sec").css({ transform: "rotate("+ sec_count + "deg" });
    
        $("#sec").css({ '-transform-origin' : origin });
    
        sec_count+=6;
        sec+=1;
      if(sec%60==0)
      {
       minutes();
      }
      seconds();},1000);
}
function minutes()
{
    
    setTimeout(function(){ $("#min").css({ transform: "rotate("+ min_count + "deg" });

    $("#sec").css({ '-transform-origin' : origin });
    min_count+=6;
    min+=1;
    if(min%12==0)
    {
         hours();
    }},1000);
}
function hours()
{
    setTimeout(function(){ $("#hrs").css({ transform: "rotate("+ hour_count + "deg" });

    $("#hrs").css({ '-transform-origin' : hour_origin });
    hour_count+=6;
    if(hour_count%30==0)
    {
        hour=hour_count%30;
    }},1000);
}


$(".carousel-page").text(1);
$('.leftCapabilityIndicator').text(parseInt($('.carousel-page').text())-1); 
$('.RightCapabilityIndicator').text(parseInt($('.carousel-page').text())+1); 
if($('.leftCapabilityIndicator').text()==0){
           $('.leftCapability').hide(); 
        }
function CheckSlideActive(){
    if($('.carousel-page').text()==1){
           $('.leftCapability').hide(); 
        }
        else{
            $('.leftCapability').show();   
        }
        if($('.carousel-page').text()==6){
           $('.rightCapability').hide(); 
        }
        else{
            $('.rightCapability').show();   
        }
 }       
$('#carousel-dots li').click(function(){ 
    $(".carousel-page").text($(this).index()+1);
    CheckSlideActive()
    $('.leftCapabilityIndicator').text(parseInt($('.carousel-page').text())-1); 
    $('.RightCapabilityIndicator').text(parseInt($('.carousel-page').text())+1); 
    });
    $('.leftCapability').click(function(){
         element=parseInt($('.carousel-page').text());
        $(".carousel-page").text(element-1);
        $('.leftCapabilityIndicator').text(parseInt($('.carousel-page').text())-1); 
        CheckSlideActive()
        $('.RightCapabilityIndicator').text(parseInt($('.carousel-page').text())+1); 
        
    })
    $('.rightCapability').click(function(){
        //alert($('.carousel-inner .item.active').index());
        element=parseInt($('.carousel-page').text());
        $(".carousel-page").text(element+1);
        $('.leftCapabilityIndicator').text(parseInt($('.carousel-page').text())-1); 
        $('.RightCapabilityIndicator').text(parseInt($('.carousel-page').text())+1);
        CheckSlideActive()
    })

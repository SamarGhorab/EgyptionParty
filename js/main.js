

$(".iconbox").click(function(){

let navWidth= $("nav").outerWidth();
if($(".databox").css("left")=="0px"){
$(".databox").animate({"left":-navWidth},2000)
}
else{
    $(".databox").animate({"left":0},2000)
}
})
$(".nav-link ").click(function(){
    let currentLink=$(this).attr("href");
    let currentOffest=$(currentLink).offest().top;
    $("body,html").animate({screenTop:currentOffest},200)
})


$("#details div").hide();

$("#details h3").click(function(){

    $(this).next().slideToggle(2000);  
    


})



var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var timeupdate = setInterval(function() {

  var now = new Date().getTime();
    
  var rest = countDownDate - now;
    
  var days = Math.floor(rest / (1000 * 60 * 60 * 24));
  var hours = Math.floor((rest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((rest % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((rest % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h "

  document.getElementById("min").innerHTML = minutes + "m "
  document.getElementById("sec").innerHTML = seconds + "s "

    
  if (rest < 0) {
    clearInterval(timeupdate);
    document.getElementById("layer2").innerHTML = "EXPIRED";
  }
},1000) ;


var maxLength = 100;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});

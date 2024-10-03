$(".toy ").on("click", function () {
  $(".tot .p1").slideToggle(900);
  $(".tx .p2").slideUp(900);
  $(".tz .p3").slideUp(900);
  $(".tn .p4").slideUp(900);
});

$(".tx ").on("click", function () {
  $(".tot .p1").slideUp(900);
  $(".tx .p2").slideToggle(900);
  $(".tz .p3").slideUp(900);
  $(".tn .p4").slideUp(900);
});

$(".tZ ").on("click", function () {
  $(".tot .p1").slideUp(900);
  $(".tx .p2").slideUp(900);
  $(".tz .p3").slideToggle(900);
  $(".tn .p4").slideUp(900);
});

$(".tn ").on("click", function () {
  $(".tot .p1").slideUp(900);
  $(".tx .p2").slideUp(900);
  $(".tz .p3").slideUp(900);
  $(".tn .p4").slideToggle(900);
});

const size = $(".slider .slider1").outerWidth(true);
console.log(size);

$(".slider").animate({ left: -size }, 2000);

    let flag = true;
    $(".slider .slider2").on("click", function () {
    if (flag == true) {
        $(".slider").animate( { left: 0 } , 2000);

        flag = false;
    } else {
        flag = true;
        $(".slider").animate( { left: -size } , 2000);
    }
    });


$('.slider1 i').on('click' , function(){
    $('.slider').animate({ left: -size } , 2000)
})


$('a').on('click' , function(e){
    console.log('hi')
    const sectionId = $(e.target).attr('href')
    $('html , body').animate({scrollTop: $(sectionId).offset().top} , 1500)
})    



const countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = countDownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);


const maxChars = 100;

const messageInput = document.getElementById("message");
const charCountDisplay = document.getElementById("charCount");

messageInput.addEventListener("input", function() {
    const remainingChars = maxChars - messageInput.value.length;
    charCountDisplay.textContent = `${remainingChars} Characters Remaining`;
});

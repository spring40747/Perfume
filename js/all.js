$(document).ready(function(){
    $('.hum-icon').on('click', function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
 });
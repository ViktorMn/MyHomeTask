
$(document).ready(function() {
    
    $(document).mySliderPlugin();
    
    
    
    
    var html = $('#my_tmpl').html();
    var data = {
        name: "Манойло Виктор Петрович", 
        photo: "image/myphoto1.jpg",
        course: "Студент заборостроительного университета",
        reason1: "Заборы строить не интересно",
        reason2: "Платят мало",
        reason3: "Приходиться работать по ночам",
        mobile: " +3802222222",
        sn_reference: "vk.com",
        feedback: "Если нужно, могу построить, вам забор"
        
      
    };
    
     var content = tmpl(html, data);
    $('body').append(content);
    
    
  var tmpl_loDash = _.template(document.getElementById('list-template').innerHTML);


   var result = tmpl_loDash({
         name: "Манойло Виктор Петрович", 
         photo: "image/myphoto1.jpg",
         course: "Студент заборостроительного университета",
        reason1: "Заборы строить не интересно",
        reason2: "Платят мало",
        reason3: "Приходиться работать по ночам",
        mobile: " +3802222222",
        sn_reference: "vk.com",
        feedback: "Если нужно, могу построить, вам забор"
 });
   $('body').append(result);;
    
 });// end ready

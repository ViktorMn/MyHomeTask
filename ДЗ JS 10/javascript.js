
    //  $(function() {
    //     $(".carousel-no-style").jCarouselLite({
    //         btnNext: ".next-no-style",
    //         btnPrev: ".prev-no-style"
    //     });
    // });
    /*----------------------------------------------------------*/ 
     $(".mouseWheelButtons .carousel").jCarouselLite({
    btnNext: ".mouseWheelButtons .next",
    btnPrev: ".mouseWheelButtons .prev",
    mouseWheel: true
});
     /*----------------------------------------------------------*/
    // $(function () {
    //         $("#country_id").selectbox();
    //     });
    $("#country_id").selectbox({
    onOpen: function (inst) {
        //console.log("open", inst);
    },
    onClose: function (inst) {
        //console.log("close", inst);
    },
    onChange: function (val, inst) {
        $.ajax({
            type: "GET",
            data: {country_id: val},
            url: "ajax.php",
            success: function (data) {
                $("#boxCity").html(data);
                $("#city_id").selectbox();
            }
        });
    },
    effect: "slide"
});
$(".nova").selectbox({
    effect: "fade"
});
$("#vehicle_id").selectbox({
    speed: 400
});
/*....................................................*/
jQuery(document).ready(function(){ 
    jQuery(".niceCheck").each(
/* при загрузке страницы меняем обычные на стильные checkbox */
    function() {
     
     changeCheckStart(jQuery(this));
     });
 });
/* 
    функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, котрый отвечает за новый вид)
    el - span контейнер для обычного чекбокса input - чекбокс
*/
function changeCheck(el){
    var el = el,
        input = el.find("input").eq(0);
          
    if(el.attr("class").indexOf("niceCheckDisabled")==-1)
    {   
        if(!input.attr("checked")) {
            el.addClass("niceChecked");
            input.attr("checked", true);
        } else {
            el.removeClass("niceChecked");
            input.attr("checked", false).focus();
        }
    }
        return true;
}
/*
    меняем вид чекбокса при смене значения
*/
function changeVisualCheck(input){

var wrapInput = input.parent();
    if(!input.attr("checked")) {
        wrapInput.removeClass("niceChecked");
    }
    else
    {
        wrapInput.addClass("niceChecked");
    }
}
/* 
    новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
    новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
*/
function changeCheckStart(el){

try
{
var el = el,
    checkName = el.attr("name"),
    checkId = el.attr("id"),
    checkChecked = el.attr("checked"),
    checkDisabled = el.attr("disabled"),
    checkValue = el.attr("value");
    checkTab = el.attr("tabindex");
    if(checkChecked){
        el.after("<span class='niceCheck niceChecked'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
            "checked='"+checkChecked+"'"+
            "value='"+checkValue+"'"+
            "tabindex='"+checkTab+"' /></span>");
        }
    else{
        el.after("<span class='niceCheck'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
            "value='"+checkValue+"'"+
            "tabindex='"+checkTab+"' /></span>");
        }
    
    /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */      
    if(checkDisabled)
    {
        el.next().addClass("niceCheckDisabled");
        el.next().find("input").eq(0).attr("disabled","disabled");
    }
    
    /* цепляем обработчики стилизированным checkbox */      
    el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
    el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
    if(jQuery.browser.msie)
    {
        el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });   
    }
    el.remove();
}
catch(e)
{
    // если ошибка, ничего не делаем
}

    return true;
}
/*--------------------------------------------------------*/ 



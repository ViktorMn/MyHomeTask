   // callback function
function GoogleCallback (jqueryObj, data) {
   console.log('data', data); 
var testObj = { elemScriptTmpl: document.createElement('script'),
      
    script_tmpl: function() {
        this.elemScriptTmpl.setAttribute('type','text/template');
        this.elemScriptTmpl.id = 'my_tmpl';
        document.body.appendChild(this.elemScriptTmpl);
    },
    
    CreateDivItems: function(){
        
        for ( var i = 0; i < data.results.length; i++){
           
            this.elemScriptTmpl.innerHTML += '<div class="content-item"><a class="url-title" href="#=results[' + i 
            + '].url#"><h3 class="title">#=results[' + i 
            + '].title#</h3></a><p class="url">#=results[' + i 
            + '].url#</p><p class="content">#=results[' + i 
            + '].content#</p></div>';
    } 
  }
 };
testObj.script_tmpl();
testObj.CreateDivItems();

   var html = $('#my_tmpl').html();
   var content = tmpl(html, data);
   
  $('div.content-wrapper').append(content); 
             
};
$(function (){
    
    var search;
   
   $("#btn-search").click(function(){
search =  $('#search').val(); 

  if(search){
    
    $('div.content-item').remove();  
      
    $.ajax({
        type: 'GET',
        url:
        'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + search + '&callback=GoogleCallback&context=?',
        dataType: 'jsonp',
        success: function(data){
 
        },
        error: function(){
            
        }
    });
   }  
 });
});



$.danni = new Object();

$.danni.showDialog = function(content, title){
    
        var resbox = $('<div>').html('');
        $(resbox).html(content);
        $(resbox).dialog({
            close: function (event, ui)
            {
                $(this).dialog("close");
                $(this).remove();
            },
            title: title,
            resizeable: true,
            maxheight:  $(window).height(),
            maxwidth:  $(window).width(),
            width:'auto',
            height:'auto',
             position: { my: "left top", at: "left top", of: window },
            minWidth: 450,
            minHeight: 450,
            
            show: {
        effect: "fade",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
        });
    
    
}

$.danni.showImage = function(obj){
    
    txt='<img src="'+obj.attr('src')+'" style=max-width:100%;max-height:100%;height:auto;width:auto;margin-auto; onclick="$(this).parent().dialog(\'close\');">';
    
    $.danni.showDialog(txt, obj.attr('title'));
    
    
}

$.danni.showAbout = function(){
    
    txt='<img src="img/aboutwords.jpg" style=min-width:450px;max-width:100%;max-height:100%;height:auto;width:auto;margin-auto; onclick="$.danni.showContact();$(this).parent().dialog(\'close\');">';
    
    $.danni.showDialog(txt, "About Danni");
    
    
}


$.danni.showContact = function(){
    
     $.danni.showDialog($('#contactform').html(), 'Get in Touch');
    $('.ui-dialog-content').css('padding','5px');
}


$(function(){
   
    $('.dannidrawing').click(function(){
       $.danni.showImage($(this)); 
    });
    
    
});
$(function(){
    <!-- Portfolio Items -->          
    $('.portfolio-modal').each(function(i, obj) {
        //test         
        var portfolioItemHtml = "portfolio/"+obj.id+".html";
        console.log(portfolioItemHtml + " loaded")
        $(obj).load(portfolioItemHtml)
    });
    <!-- Sections -->          
    $('.sectionToLoad').each(function(i, obj) {
        //test         
        var htmlSection = obj.id+".html";
        console.log(htmlSection + " loaded")
        $(obj).load(htmlSection)
    });
}); 
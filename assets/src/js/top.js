$(() => {

    var property = getNavProperty();

    $(window).on('scroll', () => {
        var scrollTop = $(window).scrollTop();

        createNav(property, scrollTop);
    }); 
});

function getNavProperty() {
    var object = [];

    $(".main_container > div").each(function(i, e) {
        var id = $(e).attr('class');
        var offset = $(e).offset().top;

        object[i] = {id, offset}
    });

    return object;
}

function createNav(object, scroll) {
    var objectOffset = 0;
    for(var i in object) {
        if(scroll >= objectOffset && scroll <= object[i]["offset"]) {
            var index = $(".main_container > div").index($("."+object[i]["id"]));

            $(".nav ul li").removeClass("active");
            $(".nav ul li").eq(index - 1).addClass("active");
        }else if(scroll >= object[i]["offset"]) {
            $(".nav ul li").removeClass("active");
            $(".nav ul li:last-child").addClass("active");
        }

        objectOffset = object[i]["offset"];
    }
}


$(document).ready(function() {

    function swap_flowers(img, time) {
        img.fadeOut(time, function(){
            var pic = $(this);
            var src = pic.attr('src')
            var alt = pic.attr('data-hover-src')
            pic.attr('src', alt);
            pic.attr('data-hover-src', src);
            pic.fadeIn(time);
        });
    }

    function load_flowers(parent, items) {

        items.map(function(i){
            var flower = 'flower' + i + '.jpg';
            var blossom = 'blossom' + i + '.jpg';
            return [flower, blossom];
        }).map(function(i) {
            var src = i[0];
            var alt = i[1];
            var img = $('<img>')
                .addClass('fading-flower')
                .attr('src', src)
                .attr('data-hover-src', alt)
                .hover(function() { // hover in
                    swap_flowers($(this), 500);
                }, function() { // hove out
                    swap_flowers($(this), 500);
                });
            return img;
        }).map(function(i){
            parent.append(i);
        });
    }

    load_flowers($('#flowers'), [1, 2, 3, 4]);
});

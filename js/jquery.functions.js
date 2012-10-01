$(window).load(function() {
	


    $('.slides').cycle({
        fx:     'scrollHorz',
        speed:  400,
        timeout: 7000,
        cleartypeNoBg: true,
        pager:  '.pager',
        pagerAnchorBuilder: function paginate(idx, el) {
			return '<a class="bullet' + idx + '" href="#" >&bull;</a>';
		},

    });


		
});


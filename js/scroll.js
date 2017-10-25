$("#up-btn").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("a[href='#work']").click(function() {
	$("html, body").animate({ scrollTop: $("#work").offset().top }, "slow");
});

$("a[href='#resume']").click(function() {
	$("html, body").animate({ scrollTop: $("#resume").offset().top }, "slow");
});

$("a[href='#contact']").click(function() {
	$("html, body").animate({ scrollTop: $("#contact").offset().top }, "slow");
});
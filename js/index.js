// Mayank Shaan Dhania

$(function (){
			$(".btns .unbs").mouseover(function (){
				$(".img-in").addClass("sad")
			});
			$(".btns .unbs").mouseout(function (){
				$(".img-in").removeClass("sad")
			});

			$(".btns .cancel").mouseover(function (){
				$(".img-in").addClass("non")
			});
			$(".btns .cancel").mouseout(function (){
				$(".img-in").removeClass("non")
		});
});


function Unsubscribe() {
	const temp = new URLSearchParams(location.search).toString();
	const tempURL = 'https://someApiUrl.com/' + temp;
	$.ajax({
		type: "POST",
		url: tempURL,
		success: function(response) {
			alert('Request Submitted Successfully');
		},
		error: function(response) {
			alert('Something went wrong');
		}
	});
}

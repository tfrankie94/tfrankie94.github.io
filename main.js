var current_question = 0;
var points = 0;
var seconds_per_question = 20;
fill_question();

function fill_question () {
	$("#query").html(questions[current_question].question);
	shuffle(questions[current_question].choices)
	let answers_html = "";
	questions[current_question].choices.forEach(function(item, index) {
		answers_html = answers_html.concat(`<div class="single_input">
					<input type='radio' id='answer${index}' name='answer'/>
					<label for='answer${index}'>${item}</label>
					</div>`);
		$("#answers").html(answers_html);
	});
}

var single_question_width = 100/questions.length

function next_question(){
	seconds_left = seconds_per_question;
	clearInterval(timer);
	if($('input[name=answer]:checked').next().text() == questions[current_question].correctAnswer){
		points++;
		$("#main_bar").append(`<div class='progress-bar progress-bar-success' role='progressbar' style='width:${single_question_width}%'></div>`);
	} else if (!$('input[name=answer]:checked').next().text()){
		$("#main_bar").append(`<div class='progress-bar progress-bar-warning' role='progressbar' style='width:${single_question_width}%'></div>`);
	} else {
		$("#main_bar").append(`<div class='progress-bar progress-bar-danger' role='progressbar' style='width:${single_question_width}%'></div>`);
	}
	$('input[name=answer]:checked').prop('checked', false);

	current_question++;
	if(current_question < questions.length){
		timer = setInterval(idle_func, 1000);
		fill_question();
	} else {
		quiz_finished();
	}
}

function quiz_finished(){
	$("#question").hide();
	$("#points").html(`${points}`);
	$("#finish").show();

	if (typeof(Storage) !== "undefined"){
		if(isNaN(localStorage.getItem("points_count"))){
			localStorage.setItem("points_count", 0);
		}
		if(isNaN(localStorage.getItem("questions_count"))){
			localStorage.setItem("questions_count", 0);
		}
		localStorage.setItem("points_count", parseInt(localStorage.getItem("points_count")) + points);
		localStorage.setItem("questions_count", parseInt(localStorage.getItem("questions_count")) + questions.length);
		$("#overall").html(`Overall ${localStorage.getItem("points_count")}/${localStorage.getItem("questions_count")}`);
	}
}

$("button[type=button]").click(function(){
	if (!$("input[name='answer']:checked").val()) {
    $("#answer_alert").show();
		$("#answer_alert").delay(1500).slideUp(200, function() {
		    $(this).hide();
		});
	} else {
		next_question();
	}
});

var seconds_left = seconds_per_question;
function idle_func(){
	$("#seconds_bar")
	.css("width", seconds_left * (100/seconds_per_question) + "%")
	.text(seconds_left + "s left");
	if (seconds_left < 1){
			next_question()
	}
	seconds_left--;
}

var timer = setInterval(idle_func, 1000);

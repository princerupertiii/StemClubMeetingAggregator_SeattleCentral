var CSClubMeetingAggregator = { };
CSClubMeetingAggregator.clubCount = 0;
CSClubMeetingAggregator.version = "version: 1.0";
CSClubMeetingAggregator.club = function(str){
			
	alert("you called " + str + " function");
	
}
CSClubMeetingAggregator.tempClub_01 = CSClubMeetingAggregator.club("Club 01");
CSClubMeetingAggregator.tempClub_02 = CSClubMeetingAggregator.club("Club 02");


function newList(){
    CSClubMeetingAggregator.tempClub_01();
    CSClubMeetingAggregator.tempClub_02();
	var clubCount = ++CSClubMeetingAggregator.clubCount;	
	var divider =  $("<div></div>").addClass("selectorStyle");
	//Add Code to retrieve DataBase 
	var clubList = $("<select></select>");	
	clubList.attr("id", "clubList" + clubCount);
	clubList.attr("onchange", "doSomething(this)");
	
	clubList.append( 	newOption("Stem Club One", false), 
							newOption("Stem Club Two", false), 
								newOption("Stem Club Three", false), 
									newOption("Stem Club Four", false) );
	divider.append(clubList);
	
	$("#content").append( divider);
}

function newOption(name, style){
	var option = $("<option></option>");
	option.value = name;
	option.text(name);
	return option;
}

function doSomething(sender){
	// Add functionality to club selector...
	//alert("You selected: " + sender.value);
	$.ajax(
		{
			url:'myAjax.php',
			complete: function (response) {
				alert(response.responseText);
			},
			error: function () {
				alert('Error in call to PHP!');
			}
	  	}
	);
}
//////////////////////////////////////////////////////////////////
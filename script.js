var CSClubMeetingAggregator = { };
CSClubMeetingAggregator.clubCount = 0;
CSClubMeetingAggregator.version = "version: 1.0";
CSClubMeetingAggregator.club = function(str){
			
	alert("you called " + str + " function");
	
}

function newList(){

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

    $.get("action_page.php", 
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        }
     );
}
//////////////////////////////////////////////////////////////////
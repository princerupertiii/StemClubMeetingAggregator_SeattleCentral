// jQuery runs this block automatically when document is ready...
$(	
    function () {

		createCalendar();

    }
);

var Calendar = { };
Calendar.date = new Date();
Calendar.month = Calendar.date.getMonth(); // returns 0-11;;
Calendar.year = Calendar.date.getFullYear(); //2015;
Calendar.dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
Calendar.monthNames = ["January", "February", "March",
						"April", "May", "June",
						"July", "August", "September",
						"October", "November", "December"];

function createCalendar() {
    var table = $("<table></table>");

    add_daysOfWeek(table);
    add_calendarDays(table);

    $("#calendar-month-year").text(Calendar.monthNames[Calendar.month] + " " + Calendar.year);
    $("#calendar-days").append(table);
}

function add_daysOfWeek(table){
	var tr = $("<tr></tr>");
	
	// Create Cell For Each Day Of The Week (Sun, Mon, Tues...etc)
	for(var d = 0; d < Calendar.dayNames.length; d++){	
		var td = $("<td></td>");
		td.attr("id", "week-days");
		
		var p = $("<p></p>");
		p.text( Calendar.dayNames[d] );
		
		td.append(p);
		tr.append(td);		
	}
	// Add the Row Of Cells To Table
	table.append(tr);
}

function add_calendarDays(table){
	var tr = $("<tr></tr>");
	
	// Create Empty Spaces before First Day Of The Month
    var firstDayName = Calendar.date.toDateString().substring(0, 3); // First day of the month(Mon, Tue...etc.)
	var firstDayNum = Calendar.dayNames.indexOf(firstDayName);
	for(var d = 0; d <= 6; d++){
		if(d == firstDayNum){
			break; // If first day of month break...
		}
		var td = $("<td></td>");
		td.text("");		
		tr.append(td);
	}
	
	// Start Counting Days
	var count = 1;

	// Create The Remaining Days In First Week	
	for(; d <= 6; d++){
		tr.append( createCell(count++) ); //Adds one to count after 
	}											//function returns
	
	// Add First Week To Calendar
	table.append(tr);	

	//Create and Add No More Than Six Weeks To Calendar
    var days = new Date(Calendar.year, Calendar.month + 1, 0).getDate(); // 30
    for(var r = 0; r < 5; r++){
		var tr = $("<tr></tr>");
		for(d = 0; d <= 6; d++){
			if(count > days){
				break;
			}
			tr.append( createCell(count++) );
		}
		table.append(tr); 			
	}
}

function createCell(count){
    var today = new Date().getDate(); // Today's Date 3, 4, 5...30 etc.

	var td = $("<td></td>");
	if(count != today)
		td.attr("id", "days");
	else if(Calendar.month === new Date().getMonth() && Calendar.year === new Date().getFullYear())
		td.attr("id", "today");
    else
		td.attr("id", "days");
	td.text(count);	
	td.attr("onclick", "dayClicked(this)");			
	
	return td;
}

// Called when user clicks left arrow on calendar...
function prevMonth_Click(){	
	if(Calendar.month !== 0)
		Calendar.month--;
	else{
		Calendar.month = 11;
		Calendar.year--;
	}
	$("#calendar-days").empty();
    Calendar.date = new Date(Calendar.monthNames[Calendar.month] + " " + 1 + ", " + Calendar.year);
	createCalendar();
}

// Called when user clicks right arrow on calendar...
function nextMonth_Click(){
	if(Calendar.month !== 11)
		Calendar.month++;
	else{
		Calendar.month = 0;
		Calendar.year++;
	}
	$("#calendar-days").empty(); // Clear all nodes in calendar
    Calendar.date = new Date(Calendar.monthNames[Calendar.month] + " " + 1 + ", " + Calendar.year);
	createCalendar();
}
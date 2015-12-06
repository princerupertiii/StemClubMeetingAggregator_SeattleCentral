$(
    function(){

		var date = new Date(); // Current Date Object
	
		var month_name = ["January", "February", "March", 
							"April", "May", "June", 
							"July",	"August", "September",
							"October", "November", "December"];
							
		var month = date.getMonth(); // returns 0-11	
		
		var year = date.getFullYear(); //2015
		
		var day_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		
		var tmp = new Date(month_name[month] + " " + 1 + ", " + year).toDateString();

		var first_day = tmp.substring(0, 3); // Mon - Fri
		
		var day_num = day_names.indexOf(first_day); //First day of the month(Mon, Tue...etc.)	
		
		var days = new Date(year, month + 1, 0).getDate(); //30
		
		var today = date.getDate();	// Today's Date 3, 4, 5...30 etc.
		
	    //////////////////////////////////////////////////////////////////////////////////	
		var table = $("<table></table>");
		
		add_daysOfWeek(day_names, table);
		add_calendarDays(day_num, days, today, table);	
	
		$("#calendar-month-year").text(month_name[month] + " " + year);
		$("#calendar-days").append(table);
		
	}
);

function add_daysOfWeek(day_names, table){
	
	var tr = $("<tr></tr>");
	
	// Create Cell For Each Day Of The Week (Sun, Mon, Tues...etc)
	for(var d = 0; d < day_names.length; d++){	
		var td = $("<td></td>");
		td.attr("id", "week-days");
		
		var p = $("<p></p>");
		p.text( day_names[d] );
		
		td.append(p);
		tr.append(td);		
	}
	// Add the Row Of Cells To Table
	table.append(tr);
}

function add_calendarDays(day_num, days, today, table){
	
	var tr = $("<tr></tr>");
	
	// Create Empty Spaces before First Day Of The Month
	var d;
	for(d = 0; d <= 6; d++){
		if(d == day_num){
			break;
		}
		var td = $("<td></td>");
		td.text("");		
		tr.append(td);
	}
	
	// Start Counting Days
	var count = 1;
	
	// Create The Remaining Days In First Week	
	for(; d <= 6; d++){
		tr.append( createCell(count++, today) ); //Adds one to count after 
	}											//function returns
	
	// Add First Week To Calendar
	table.append(tr);
	
	//Create and Add No More Than More More Weeks To Calendar
	for(var r = 0; r < 4; r++){
		var tr = $("<tr></tr>");
		for(d = 0; d <= 6; d++){
			if(count > days){
				break;
			}
			tr.append( createCell(count++, today) );
		}
		table.append(tr);			
	}
}

function createCell(count, today){
	var td = $("<td></td>");
	if(count != today)
		td.attr("id", "days");
	else
		td.attr("id", "today");
	
	td.text(count);	
	td.attr("onclick", "dayClicked(this)");			
	
	return td;
}

function dayClicked(element){

	var response = confirm("Would you like to create a new event?");
	
	if(response){
		var title = prompt("Enter a title for the event.", "New Event");
		
		if(title != null){
			var calendar = $("#calendar-container");
			
			var form = $("<form validate></form>");
			form.attr( "action", "action_page.php");
			form.attr( "method", "POST");
			form.attr( "target", "_blank"); 
			form.attr( "accept-charset", "UTF-8");
			form.attr( "enctype", "application/x-www-form-urlencoded");
			form.attr( "autocomplete", "off"); 	
			
			var fields = $("<fieldset></fieldset>");
			fields.append( $("<legend>Club Event Info:</legend>") );
			fields.append("First name:", $("<br>") ); 
			fields.append( $('<input type="text" name="firstname">') ); 
			fields.append( $("<br>"), "Last name:", $("<br>") );
			fields.append( $('<input type="text" name="lastname">'), $("<hr>") );	
			fields.append( $('<input type="submit" onclick="on_submit()" value="Submit">') );
			
			form.append(fields);
			
			calendar.append(form);
			
			
			var label = $("<p></p>");
			label.text(title);
			label.addClass("event");
			$(element).append(label); 	
		}
		
	};
}

function on_submit(){
	location.reload();
}
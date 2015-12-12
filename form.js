
function dayClicked(element){

	var response = confirm("Would you like to create a new event?");
	
    // Prompt User To Enter Event Title If CONFIRM Was NOT Cancelled....
	if(response){
		var title = prompt("Enter a title for the event.", "New Event");
		
        // Show Form If Event PROMPT Was NOT Cancelled....
		if(title != null){
			$("form:hidden").show("fast");
		}	
	};
}

function submitForm(event){
    // Stop form from submitting normally...
    event.preventDefault();

    // Validate Form....
    var ready = validateForm();

    if (ready) {
        // Submit Form Data....
        $.post("action_page.php", $("#clubForm").serialize()
        ).done(
            function () {
                alert("Data Was Saved Successfully!");
                location.reload();
            }
        ).fail(
            function () {
                alert("Error Saving Event Data!");
            }
        ).always();
    }
}

function validateForm(){
    var ready = true;
    
    // Iterate Through Each (INPUT TYPE=TEXT) Element In Page....
    $('input:text').each(
        function (index) {

            var span = $("span").eq(index + 1);

            if ($(this).val() === "") {
                span.text(" * Please fill out all fields.");
                span.addClass("error");
                ready = false;
            }
            else {
                span.text("");
                span.removeClass("error");
            }
        }
    );

    return ready;
}
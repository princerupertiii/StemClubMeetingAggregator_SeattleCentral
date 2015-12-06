<?php

    // define variables and set to empty values
    $clubname = $meetingroom = $date = $time = $frequency = "";
    $clubnameErr = $meetingroomErr = $dateErr = $timeErr = $frequencyErr = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if ( empty($_POST["clubname"]) ) {
            $clubnameErr = "Club Name is required";
        } else {
            $clubname = test_input($_POST["clubname"]);
            if (!preg_match("/^[a-zA-Z ]*$/",$clubname)) 
                $clubnameErr = "Only letters and white space allowed";
        }

        if ( empty($_POST["meetingroom"]) ) {
            $meetingroomErr = "Meeting Room is required";
        } else {
            $meetingroom = test_input($_POST["meetingroom"]);
        }

        if ( empty($_POST["date"]) ) {
            $dateErr = "Date is required";
        } else {
            $date = test_input($_POST["date"]);
        }

        if ( empty($_POST["time"]) ) {
            $timeErr = "Time is required";
        } else {
            $time = test_input($_POST["time"]);
        }

        if ( empty($_POST["frequency"]) ) {
            $frequencyErr = "Frequency is required";
        } else {
            $frequency = test_input($_POST["frequency"]);
        }

    }

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
     }

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
        Welcome!
        <hr> 
        Club Name: <?php echo ($clubname != "") ? $clubname : $clubnameErr; ?> 
        <br>
        Meeting Room: <?php  echo ($meetingroom != "") ? $meetingroom : $meetingroomErr; ?> 
        <br>
        Date: <?php echo ($date != "") ? $date : $dateErr; ?>
        <br>
        Time: <?php echo ($time != "") ? $time : $timeErr; ?>
        <br>
        Frequency: <?php echo ($frequency != "") ? $frequency : $frequencyErr; ?>
    </body>
</html>

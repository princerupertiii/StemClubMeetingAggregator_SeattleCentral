<?php

    // define variables and set to empty values
    $clubname = $meetingroom = $date = $time = $frequency = "";
    $clubnameErr = $meetingroomErr = $dateErr = $timeErr = $frequencyErr = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Create Or Open File To Save Data
        $myfile = fopen("testfile.txt", "a");

        if ( empty($_POST["clubname"]) ) {
            $clubnameErr = "Club Name is required";
        } else {
            $clubname = test_input($_POST["clubname"]);
            fwrite($myfile, "Club Name: " . $clubname);
        }

        if ( empty($_POST["meetingroom"]) ) {
            $meetingroomErr = "Meeting Room is required";
        } else {
            $meetingroom = test_input($_POST["meetingroom"]);
            fwrite($myfile, "\nMeeting Room: " . $meetingroom);
        }

        if ( empty($_POST["date"]) ) {
            $dateErr = "Date is required";
        } else {
            $date = test_input($_POST["date"]);
            fwrite($myfile, "\nDate: " . $date);
        }

        if ( empty($_POST["time"]) ) {
            $timeErr = "Time is required";
        } else {
            $time = test_input($_POST["time"]);
            fwrite($myfile, "\nTime: " . $time);
        }

        if ( empty($_POST["frequency"]) ) {
            $frequencyErr = "Frequency is required";
        } else {
            $frequency = test_input($_POST["frequency"]);
            fwrite($myfile, "\nFrequency: " . $frequency . "\n\n");
        }

        // Close File With Saved Data
        fclose($myfile);
        return;
    }

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

    if ($_SERVER["REQUEST_METHOD"] == "GET") {

        echo "clubname \nData: ";
        echo "meetingroom \nData: ";
        echo "date \nData: ";
        echo "time \nData: ";
        echo "frequency";

        return;
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

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact_form_db";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Insert data into the database
$sql = "INSERT INTO contact_messages (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "success"; // Return "success" upon successful insertion
} else {
    echo "Error: " . $conn->error; // Return the specific error message
}

$conn->close();
?>

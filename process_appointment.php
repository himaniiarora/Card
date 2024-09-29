<?php
// Database connection parameters
$host = "localhost"; // Usually localhost
$db_name = "city_general_hospital"; // Change to your database name
$username = "your_db_username"; // Change to your database username
$password = "your_db_password"; // Change to your database password

// Create a connection
$conn = new mysqli($host, $username, $password, $db_name);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
CREATE DATABASE city_general_hospital;

USE city_general_hospital;

CREATE TABLE appointments (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    doctor VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$doctor = $_POST['doctor'];
$date = $_POST['date'];
$time = $_POST['time'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO appointments (name, email, phone, doctor, date, time) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $name, $email, $phone, $doctor, $date, $time);

// Execute the statement
if ($stmt->execute()) {
    echo "Appointment booked successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>

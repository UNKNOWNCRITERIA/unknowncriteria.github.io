<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    
    if (empty($name)  empty($email)  empty($message)) {
        echo json_encode(["message" => "All fields are required."]);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["message" => "Invalid email format."]);
        exit;
    }
    
    $to = "contact@intangible-network.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["message" => "Your message has been sent successfully."]);
    } else {
        echo json_encode(["message" => "Failed to send message."]);
    }
} else {
    echo json_encode(["message" => "Invalid request."]);
}

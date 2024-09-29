<?php
// Sample data for departments (You can later fetch it from a database)
$departments = [
    [
        'name' => 'Cardiology',
        'head' => 'Dr. John Doe',
        'contact_number' => '+1 (555) 987-6543',
        'number_of_doctors' => 10
    ],
    [
        'name' => 'Neurology',
        'head' => 'Dr. Jane Smith',
        'contact_number' => '+1 (555) 654-3210',
        'number_of_doctors' => 8
    ],
    [
        'name' => 'Orthopedics',
        'head' => 'Dr. Emily White',
        'contact_number' => '+1 (555) 222-3333',
        'number_of_doctors' => 12
    ]
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hospital Departments</title>
    <link rel="stylesheet" href="styles3.css">
</head>
<body>
    <header>
        <h1>City General Hospital - Departments</h1>
    </header>

    <main>
        <h2>Our Departments</h2>
        <ul>
            <?php foreach ($departments as $dept): ?>
                <li>
                    <strong><?= $dept['name'] ?></strong><br>
                    Head: <?= $dept['head'] ?><br>
                    Contact: <?= $dept['contact_number'] ?><br>
                    Number of Doctors: <?= $dept['number_of_doctors'] ?><br>
                </li>
            <?php endforeach; ?>
        </ul>
    </main>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Form</title>
</head>
<body>
    <h1>Signup Form</h1>

    <?php

    require_once "./db/signupProcess.php";

    ?>

    <form action="" method="post">
        <input type="text" placeholder="Firstname" name="firstname" value="<?php echo isset($_POST['firstname']) ? $_POST['firstname']: "" ?>"><br>
        <input type="text" placeholder="Lastname" name="lastname" value="<?php echo isset($_POST['lastname']) ? $_POST['lastname']: "" ?>"><br>
        <input type="text" placeholder="Username" name="username" value="<?php echo isset($_POST['username']) ? $_POST['username']: "" ?>"><br>
        <input type="email" placeholder="Email" name="email" value="<?php echo isset($_POST['email']) ? $_POST['email']: "" ?>"><br>
        <input type="password" placeholder="Password" name="password"><br>
        <input type="password" placeholder="Confirm Password" name="confirm"><br>
        <input type="reset" value="Reset">
        <input type="submit" value="Signup" name="signup">
    </form>
</body>
</html>
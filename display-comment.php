<?php
$name = htmlspecialchars($_POST["name"]);
$name = htmlspecialchars($_POST["prefered fruit"]);
$comment = htmlspecialchars($_POST["comment"]);
echo "Hi, $name. your fruit is." . "<br>";
echo "Here's the comment what you've entered: $comment";
?>
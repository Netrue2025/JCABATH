<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
// header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");

//  $conn = new mysqli("127.0.0.1:3306", "u214041851_blog", "Hijuba.com2023", "u214041851_blog");
include 'connections.php';


function submit()
{
    global $conn;


    if (isset($_POST["submit"])) {
        $tittle = addslashes($_POST["tittle"]);
        $date = addslashes($_POST["date"]);
        $message = addslashes($_POST["message"]);


        // $filename = $_FILES['image']['name'];
        // $filetmpname = $_FILES['image']['tmp_name'];
        // $folder = 'images/';
        // move_uploaded_file($filetmpname, $folder . $filename);

        $connection = "INSERT INTO `messages`(`Tittle`,`Date`, `Messages`) VALUES('$tittle', ' $date', '$message')";
        $bind = mysqli_query($conn, $connection);
        $bind;
        echo "<p style='color: white; background-color: rgb(11, 180, 11); text-align: center; padding: 50px 0;'> Messages Added Successfully!</p>";
    }
}

function testimonies()
{
    global $conn;


    if (isset($_POST["submit"])) {
        $name = addslashes($_POST["name"]);
        $testimony = addslashes($_POST["testimony"]);



        // $filename = $_FILES['image']['name'];
        // $filetmpname = $_FILES['image']['tmp_name'];
        // $folder = 'images/';
        // move_uploaded_file($filetmpname, $folder . $filename);

        $connection = "INSERT INTO `testimonies`(`name`,`testimony`) VALUES('$name', '  $testimony')";
        $bind = mysqli_query($conn, $connection);
        $bind;
        echo "<p style='color: white; background-color: rgb(11, 180, 11); text-align: center; padding: 50px 0;'> Thank you for submiting your testimony!</p>";
    }
}

// function update()
// {
//     global $conn;

//     if (isset($_POST["submits"])) {
//         $text = addslashes($_POST["text"]);
//         $body = addslashes($_POST["textarea"]);
//         $filename = $_FILES['image']['name'];
//         $filetmpname = $_FILES['image']['tmp_name'];
//         $folder = 'images/';
//         move_uploaded_file($filetmpname, $folder . $filename);
//         $id = $_GET['id'];

//         $connection = "UPDATE `blog` SET `image`='$filename',`heading`='$text',`body`='$body',`postedby`='Hijuba',`comment`='[value-7]' WHERE id = $id";
//         $bind = mysqli_query($conn, $connection);
//         $bind;
//         echo "<p style='color: white; background-color: rgb(11, 180, 11); text-align: center; padding: 20px 0;'> Post Updated Successfully!</p>";

//     }
// }

// function fetchdata()
// {
//     global $conn;

//     $connection = "SELECT  * FROM blog order by id desc";
//     $query = mysqli_query($conn, $connection);
//     if ($query->num_rows > 0) {
//         $result = $query->fetch_array();
//         echo $result;



//     }
// }

// function singlepage()
// {
//     global $conn;
//     $id = $_GET["id"];
//     $connection = "SELECT * FROM blog WHERE id = $id";
//     $query = mysqli_query($conn, $connection);

//     if ($query->num_rows > 0) {
//         $result = $query->fetch_assoc();
//         if (isset($_GET['id'])) {

//         }
//     }
// }


//   if(isset($_POST['deletes'])){
//       $id = $_GET["id"];
//     $connection = "DELETE FROM blog WHERE id = $id";
//     $query = mysqli_query($conn, $connection);
//         if (isset($_GET['id'])) {
//         return $query;
//         }  
//     }






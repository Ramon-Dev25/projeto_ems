<?php
// Defina as credenciais do banco de dados
$host = "localhost";
$user = "root";
$password = "";
$database = "project_ems";

// Tenta conectar ao banco de dados
$conn = new mysqli($host, $user, $password, $database);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
} else {
    echo "Conexão bem-sucedida com o banco de dados!";
}

// Fecha a conexão
$conn->close();
?>

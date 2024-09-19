<?php

  header('Content-Type: application/json');

  $input = file_get_contents('php://input');

  $data = json_decode($input, true);
  
  $nota1 = isset($data['n1']) ? (float)$data['n1'] : 0;
  $nota2 = isset($data['n2']) ? (float)$data['n2'] : 0;
  $nota3 = isset($data['n3']) ? (float)$data['n3'] : 0;
  $nota4 = isset($data['n4']) ? (float)$data['n4'] : 0;
 
  $media = ($nota1 + $nota2 + $nota3 + $nota4) / 4;
  $letra = '';

  if ($media >= 9){
    $letra = 'A';
  }elseif ($media >= 7 && $media < 9){
    $letra = 'B';
  }elseif ($media >= 4 && $media < 7){
    $letra = 'C';
  }else {
    $letra = 'D';
  }

  $response =[
    'status' => 'success',
    'letra' => $letra,
    'message' => 'Dados recebidos e processados com sucesso.'
  ];

  echo json_encode($response);
?>
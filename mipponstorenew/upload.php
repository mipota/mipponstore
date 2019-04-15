
<?php
$err = array();
$img = $_FILES['upfile'];//画像データを配列で取得
var_dump($img);      //データの中身を確認
$type = exif_imagetype($img['tmp_name']);//画像の形式を取得
if($type !=IMAGETYPE_JPEG && $type != IMAGETYPE_PNG){
    $err['pic'] = '対象ファイルはPNGまたはJPGのみです';
}elseif($img['size'] > 102400){//ファイルサイズを指定する
    $err['pic'] = 'ファイルサイズは100KB以下にしてください';
}else{
    $extension = pathinfo($img['name'],PATHINFO_EXTENSION);//ドット以降の画像名を取得
    $new_img = md5(uniqid(mt_rand(), true)).'.'.$extension;//ファイル名を乱数にする
    move_uploaded_file($img['tmp_name'],'./img/'.$new_img);
}
?>

<html>
<head>
<meta charset="UTF-8">
</head>
<body>
<h1>受けとり完了！</h1>
<?php if(count($err) >0){
    foreach($err as $row){
        echo '<p>'.$row.'</p>';
    }
    echo '<a href="./contribution.php">戻る</a>';
}else{
  echo '<a href="./contribution.html">戻る</a>';
    ?>
    <div<img src="http://localhost/mipponstorenew/img/<?php echo $img['name'];?>"></div>
  
<?php } ?>
</body>
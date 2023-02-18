let deferredPrompt;
const addBtnDiv = document.querySelector('.add-button-div');
const addBtn = document.querySelector('.add-button');
const closeBtn = document.querySelector('.close-a2hs-promt');
const valueA2HS = getPwaCookie('reichelt-a2hs');

if(closeBtn){
    closeBtn.addEventListener('click', (e) => {
        //console.log('User dismissed the own A2HS prompt');
        //sessionStorage['reichelt-a2hs'] = 'dismissed';
        setCookie('reichelt-a2hs','dismissed',45);
        addBtnDiv.style.display = 'none';
    });
}

if(valueA2HS !== 'dismissed'){
    //setTimeout(function() {
        //console.log(valueA2HS);
        window.addEventListener('beforeinstallprompt', (e) => {
          // Prevent Chrome 67 and earlier from automatically showing the prompt
          e.preventDefault();
          // Stash the event so it can be triggered later.
          deferredPrompt = e;
          // Update UI to notify the user they can add to home screen
          //addBtnDiv.style.display = 'block';
        });
    //}, 2000);
}

if(addBtn){
    addBtn.addEventListener('click', (e) => {
      // hide our user interface that shows our A2HS button
      addBtnDiv.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
//            console.log('User accepted the A2HS prompt');
          } else {
//            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });
}

function setPwaCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getPwaCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

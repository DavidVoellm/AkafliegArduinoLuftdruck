
function cookie_dialog(){
//    alert(window.cookieconsent_options.message_part_1);
    htmlStr='<div class="cookieconsentContent">';
    htmlStr+='<p class="cookieconsentHeadline">'+window.cookieconsent_options.header1+'</p>';
    htmlStr+='<div class="cookieconsentText"><p>'+window.cookieconsent_options.message_part_1;
    htmlStr+='<a href="'+window.cookieconsent_options.link1+'">'+window.cookieconsent_options.linktext1+'</a>';
    htmlStr+=window.cookieconsent_options.message_part_2+'</p>';
    htmlStr+='<p>'+window.cookieconsent_options.message_part_3+'</p>';
    htmlStr+='<p>'+window.cookieconsent_options.message_part_4;
    htmlStr+='<a href="'+window.cookieconsent_options.link2+'"><u>'+window.cookieconsent_options.linktext2+'</u></a>';
    htmlStr+=window.cookieconsent_options.message_part_5+'</p></div>';
   
    htmlStr+='<div class="cookieconsentButtonFrame">';
    htmlStr+='<button name="save" id="cookiecancel" class="cookiesettings buttonGrey">'+window.cookieconsent_options.disagree+'</button>';
    htmlStr+='<button name="settings" id="cookiesettings" class="cookiesettings buttonGrey">'+window.cookieconsent_options.settings+'</button>';
    htmlStr+='<button name="OK" id="cookieok">'+window.cookieconsent_options.dismiss+'</button>';
    htmlStr+='</div>';
    
    htmlStr+='</div>';
    
    var container = document.createElement('div');
    container.setAttribute('id','cookieconsent');
    container.setAttribute('class','cookieconsent');
    container.innerHTML = htmlStr;
    document.getElementsByTagName("body")[0].appendChild(container);

    htmlStr='<div class="cookieconsent_settingsFrame"><p class="cookieconsent_settingsHead">'+window.cookieconsent_options.header2+'</p>';
    htmlStr+='<form name="cookieform" onSubmit="return(false)">';

    link='<a href="'+window.cookieconsent_options.link3+'">'+window.cookieconsent_options.linktext3+'</a>';

    htmlStr+='<p class="cookieconsent_settingsHeadline">'+window.cookieconsent_options.message_part_6+'</p>';
    htmlStr+='<div class="cookieconsent_settingsOptions">'; 
//    htmlStr+='<div><label class="switch"><input type="checkbox" name="option0" id="option0" title="'+window.cookieconsent_options.message_option_0+'"><span class="slider round"></span></label><span class="cookieconsent_settingsOptionHeadline">'+window.cookieconsent_options.message_option_0+'</span></div>'; 
    htmlStr+='<div><label class="switch"><input type="checkbox" name="option2" id="option2" title="'+window.cookieconsent_options.message_option_2_Headline+' '+window.cookieconsent_options.message_option_2+'"><span class="slider round"></span></label><span class="cookieconsent_settingsOptionHeadline">'+window.cookieconsent_options.message_option_2_Headline+'</span><p>'+window.cookieconsent_options.message_option_2+link+'</p></div>';   
    htmlStr+='<div><label class="switch"><input type="checkbox" name="option3" id="option3" title="'+window.cookieconsent_options.message_option_3_Headline+' '+window.cookieconsent_options.message_option_3+'"><span class="slider round"></span></label><span class="cookieconsent_settingsOptionHeadline">'+window.cookieconsent_options.message_option_3_Headline+'</span><p>'+window.cookieconsent_options.message_option_3+link+'</p></div>';   
    htmlStr+='<div><label class="switch"><input type="checkbox" name="option4" id="option4" title="'+window.cookieconsent_options.message_option_4_Headline+' '+window.cookieconsent_options.message_option_4+'"><span class="slider round"></span></label><span class="cookieconsent_settingsOptionHeadline">'+window.cookieconsent_options.message_option_4_Headline+'</span><p>'+window.cookieconsent_options.message_option_4+link+'</p></div>';     
    htmlStr+='<div><label class="switch"><input type="checkbox" name="option1" id="option1" title="'+window.cookieconsent_options.message_option_1_Headline+' '+window.cookieconsent_options.message_option_1+'" disabled readonly checked="checked"><span class="slider round"></span></label><span class="cookieconsent_settingsOptionHeadline">'+window.cookieconsent_options.message_option_1_Headline+'</span><p>'+window.cookieconsent_options.message_option_1+link+'</p></div>';   
    htmlStr+='<p>'+window.cookieconsent_options.message_part_7+'</p>';
    htmlStr+='</div><div class="cookieconsent_settingsButtonFrame"><button class="buttonGrey" name="save" id="cookiesave">'+window.cookieconsent_options.save+'</button></div>';
    htmlStr+='<div class="cookieconsent_settingsButtonFrame"><button name="OK" id="cookieok2">'+window.cookieconsent_options.dismiss2+'</button></div>';
    htmlStr+='</form></div>';
    
    var container = document.createElement('div');
    container.setAttribute('id','cookieconsent_settings');
    container.setAttribute('class','cookieconsent_settings');
    container.setAttribute('style','display:none');
    container.innerHTML = htmlStr;
    document.getElementsByTagName("body")[0].appendChild(container);
        
    document.getElementById('cookieok').addEventListener("click", function() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/?ACTION=514&id=75&data=all", true);
        xhttp.send();        
        document.getElementById("cookieconsent").style='display:none';
        setConsentShowed();
        setTimeout(function(){ location.reload(); }, 1000);
    });

    document.getElementById('cookieok2').addEventListener("click", function() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/?ACTION=514&id=75&data=all", true);
        xhttp.send();        
        document.getElementById("cookieconsent_settings").style='display:none';
        document.getElementById("cookieconsent").style='display:none';
        setConsentShowed();
        setTimeout(function(){ location.reload(); }, 1000);
    });

    
    document.getElementById('cookiesettings').addEventListener("click", function() {
        document.getElementById("cookieconsent_settings").style='display:block';
        document.getElementById("cookieconsent").style='display:none';
    });
    
    document.getElementById('cookiecancel').addEventListener("click", function() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/?ACTION=514&id=75&data=1", true);
        xhttp.send();        
        
        document.getElementById("cookieconsent_settings").style='display:none';
        document.getElementById("cookieconsent").style='display:none';
        setConsentShowed();
        setTimeout(function(){ location.reload(); }, 1000);
    });

    document.getElementById('cookiesave').addEventListener("click", function() {
        var data = 1;
        if(document.getElementById("option2").checked){
            data+=2;
        }
        if(document.getElementById("option3").checked){
            data+=4;
        }
        if(document.getElementById("option4").checked){
            data+=8;
        }
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/?ACTION=514&id=75&data="+data.toString(), true);
        xhttp.send();        
        
        document.getElementById("cookieconsent_settings").style='display:none';
        document.getElementById("cookieconsent").style='display:none';
        setTimeout(function(){ location.reload(); }, 1000);
    });
    
    var elmnt = document.getElementById("cookieconsent");
    document.getElementById("footer").style='padding:1em 0 '+elmnt.offsetHeight+'px 0';
    
}


function setConsentShowed(){
    const mydate = new Date();
    const expire = new Date(mydate.getTime() + 1000 * 60 * 60 * 24 * 90);
    document.cookie = 'cookie-consent-showed=true;' +
            'expires=' + expire.toGMTString() +
            '; domain=.reichelt.de' +
            ';SameSite=Lax;path=/';
}
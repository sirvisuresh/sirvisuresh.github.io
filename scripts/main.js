var images = [ {
      id:"1", src: "images/fourth.png",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
    id:"2", src: "images/seventh.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  }, {
      id:"3", src: "images/first.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
      id:"4", src: "images/second.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  }, {
       id:"5",src: "images/eight.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"6",  src: "images/nine.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  }, {
       id:"7", src: "images/fifth.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
 {
     id:"8",   src: "images/sixth.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  }

 ];

function validateEmail(){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        emailField=document.forms["contact_form"]["email"];
        if (reg.test(emailField.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;
    }
    function isFutureDate(idate){
    var today = new Date().getTime(),
        idate = idate.split("-");

    idate = new Date(idate[0], idate[1] - 1, idate[2]).getTime();
    return (today - idate) < 0;
     }
    /* function validate_date(form)
     {
         var date = document.forms[form]["date"];
         if(isFutureDate(date))
          alert("enter correct date");
     }
     */
function submit_contact_form()
{  if(validateEmail())
   document.getElementById("contact_form").submit();
}
  function showpage()
     {  document.getElementById('gallery_form').style.display = "block";
        document.getElementById('buttons').style.display = "none";
      }
  function pagehide()
    {
      document.getElementById('gallery_form').style.display = "none";
      document.getElementById('buttons').style.display = "block";
     }
     function showpage1()
     {  document.getElementById('gallery_form1').style.display = "block";
        document.getElementById('roow').style.display = "none";
      }
  function pagehide1()
    {
      document.getElementById('gallery_form1').style.display = "none";
      document.getElementById('roow').style.display = "block";
     }
     function showpage2()
     {  document.getElementById('gallery_form2').style.display = "block";
        document.getElementById('buttons').style.display = "none";
      }
  function pagehide2()
    {
      document.getElementById('gallery_form2').style.display = "none";
      document.getElementById('buttons').style.display = "block";
     }


function urlvalidation(){
var url = document.getElementById("url").value;
alert(url);
var reg = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
if (reg.test(url) == false) 
        {
            alert('Invalid URL');
            return false;
        }

        return true;
}

function add_image() {

 var URL = document.getElementById("url").value;
 var Name = document.getElementById("name").value;
 var Info = document.getElementById("info").value;
 var date = document.getElementById("date").value;
 var flag=false;
 var regex = /((ftp|http|https):\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
 var nameregex = /^[a-zA-Z ]*$/;
   var error ="";
    if(regex.test(URL) == false)
     {
       error=error + "Enter correct URL\n";
       flag=true;
       }
    if(nameregex.test(Name) == false)
       {
        error = error + "Enter correct Name\n";
        flag=true;
       }
    if(isFutureDate(date))
     { 
     error=error + "Enter correct date,not a Future date\n";
     flag=true;
      }
     if(flag==true)
     {
      alert(error);
      return false;
     }
       var image=images;
       if(localStorage.getItem('pictures')!==null)
       {
          image = JSON.parse(localStorage.getItem('pictures'));
       }
       var idd = Math.random();
       image.push({ id : idd,src : URL, alt : "Photo", name : Name, info : Info, update : date });
       localStorage.setItem('pictures',JSON.stringify(image));
       alert("Image added to Gallery successfully");
       document.getElementById("form_id").submit();
      // document.getElementById("form_id").submit();
} 
function update_image(id)
{  var URL = document.getElementById("url1").value;
   var Name = document.getElementById("name1").value;
   var Info = document.getElementById("info1").value;
   var date = document.getElementById("date1").value;
   var flag=false;
   var regex = /((ftp|http|https):\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
   var nameregex = /^[a-zA-Z ]*$/;
   var error ="";
    if(regex.test(URL) == false)
     {
       error=error + "Enter correct URL\n";
       flag=true;
       }
    if(nameregex.test(Name) == false)
       {
        error = error + "Enter correct Name\n";
        flag=true;
       }
    if(isFutureDate(date))
     { 
     error=error + "Enter correct date,not a Future date\n";
     flag=true;
      }
     if(flag==true)
     {
      alert(error);
      return false;
     }
    var image = images;
    if(localStorage.getItem('pictures')!=null)
      {
        image = JSON.parse(localStorage.getItem('pictures'));
      }
   var index = image.findIndex(function(item, i){
    return item.id === id;
   });
  image[index].src = URL;
  image[index].name=Name;
  image[index].info=Info;
  image[index].date=date;
  localStorage.setItem('pictures',JSON.stringify(image));
  //alert("Image modified successfully");
  //document.getElementById("form_id1").submit();
}
function fillform(id)
{  showpage1();
   var pic = JSON.parse(localStorage.getItem('pictures'));
   var index = pic.findIndex(function(item, i){
    return item.id === id;
   });
   document.getElementById("url1").value = pic[index].src;
   document.getElementById("name1").value = pic[index].name;
   document.getElementById("info1").value = pic[index].info;
   document.getElementById("date1").value = pic[index].update;
}

function loadimage(photo){
  var l = photo.length;
    for(var i = 0; i < l; i++)
    { var src = photo[i].src;
      var alt = photo[i].alt;
      var name = photo[i].name;
      var info = photo[i].info;
      var update = photo[i].update;
      var id = photo[i].id;
      var div = document.createElement('div');
      div.className = "column";
      var img = document.createElement('img');
       img.setAttribute("id",id);
       img.src = photo[i].src;
       img.alt = photo[i].alt;
       img.name = photo[i].name;
       img.setAttribute("info", photo[i].info);
       img.setAttribute("update", photo[i].update);
       div.appendChild(img);
       var btn = document.createElement("BUTTON");
       btn.className="btn";
       btn.id=id;
       var icon = document.createElement("i");
       icon.className = "fa fa-trash";
       icon.id = "icon"+id;
       icon.style.color = "transparent";
      // { icon.style.color = "black"};
       btn.appendChild(icon);
       div.appendChild(btn);
       var btn = document.createElement("BUTTON");
       btn.className="btn1";
       btn.id=id;
       var icon = document.createElement("i");
       icon.className = "fa fa-edit";
       icon.id = "iconedit"+id;
       icon.style.color = "transparent";
       btn.appendChild(icon);
       div.appendChild(btn);
       var row = document.getElementById('roow');
       if (row != null) {
        row.appendChild(div);
       } 
      /* var nbtn = document.getElementById(btn.id);
       nbtn.onclick = function()
       { remove_image(src,name,info,updat);
       }
       var btn = document.createElement("BUTTON");
       btn.className="btn1";
       div.appendChild(btn);
      */
          
    }

}
window.onload = function() {
    //var image = JSON.parse(images);
    if(localStorage.getItem("pictures")==null)
    {
       loadimage(images);
       remove();
       edit();
       icon();
    }
    else
    {
      var pictures = JSON.parse(localStorage.getItem("pictures"));
      loadimage(pictures);
      remove();
      edit();
      icon();
    }
}

function remove_image(id)
{
  var image = images;
    if(localStorage.getItem('pictures')!=null)
      {
         image = JSON.parse(localStorage.getItem('pictures'));
      }
   var index = image.findIndex(function(item, i){
    return (item.id ===id);
   });
  image.splice(index, 1);
  localStorage.setItem('pictures',JSON.stringify(image));
  //alert("Image delete successfully");
  //document.getElementById("form_id2").submit();
}

function remove()
{var btns = document.getElementsByClassName("btn");
 for(var i=0 ; i<btns.length; i++)
{   
      btns[i].onclick = function(e)
    { remove_image(this.id);
      location.reload(); }
}
}
function edit()
{var btns = document.getElementsByClassName("btn1");
 for(var i=0 ; i<btns.length; i++)
{   
      btns[i].onclick = function(e)
    { fillform(this.id);
      id=this.id;
      var form = document.getElementById("gallery_form1");
      form.onsubmit = function(e)
      {
          return update_image(id);
      }
    }
}
}
function icon()
{
  var icons = document.getElementsByClassName("fa fa-trash");
  for(var i=0 ; i<icons.length;i++)
  {
    icons[i].onmouseover = function(e)
    { document.getElementById(this.id).style.color = "black";
    }

    icons[i].onmouseout = function(e)
    {
      document.getElementById(this.id).style.color = "transparent";
    }
  }
  var icons = document.getElementsByClassName("fa fa-edit");
  for(var i=0 ; i<icons.length;i++)
  {
    icons[i].onmouseover = function(e)
    { document.getElementById(this.id).style.color = "black";
    }

    icons[i].onmouseout = function(e)
    {
      document.getElementById(this.id).style.color = "transparent";
    }
  }


}
/*
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i <= 10; i += 1) {
    buttons[i].onclick = function(e) {
        alert(this.id);
    };
}
*/

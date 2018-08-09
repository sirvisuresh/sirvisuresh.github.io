var images = [ {
      id:"1", src: "/home/zadmin/Web_Project/last1/images/shane.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
    id:"2", src: "/home/zadmin/Web_Project/last1/images/seventh.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  }, {
      id:"3", src: "/home/zadmin/Web_Project/last1/images/first.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
      id:"4", src: "/home/zadmin/Web_Project/last1/images/second.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  }, {
       id:"5",src: "/home/zadmin/Web_Project/last1/images/eight.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"6",  src: "/home/zadmin/Web_Project/last1/images/nine.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  }, {
       id:"7", src: "/home/zadmin/Web_Project/last1/images/fifth.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
 {
     id:"8",   src: "/home/zadmin/Web_Project/last1/images/sixth.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"9",   src: "/home/zadmin/Web_Project/last1/images/abd.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"10",   src: "/home/zadmin/Web_Project/last1/images/dhoni.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"11",   src: "/home/zadmin/Web_Project/last1/images/samson.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"12",   src: "/home/zadmin/Web_Project/last1/images/twelve.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"13",   src: "/home/zadmin/Web_Project/last1/images/rohit.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"15",   src: "/home/zadmin/Web_Project/last1/images/ipl.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"16",   src: "/home/zadmin/Web_Project/last1/images/william.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"17",   src: "/home/zadmin/Web_Project/last1/images/stark.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"18",   src: "/home/zadmin/Web_Project/last1/images/root.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"19",   src: "/home/zadmin/Web_Project/last1/images/bhuvi.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"20",   src: "/home/zadmin/Web_Project/last1/images/raina.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  }
 ];


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
{  email=document.forms["contact_form"]["email"].value;
   name = document.forms["contact_form"]["name"].value;
   mobile = document.forms["contact_form"]["mobile"].value;

   var flag=false;
   var emailregex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var nameregex = /^[a-zA-Z ]*$/;
   var mobileregex = /^\d{10}$/;
   var error ="";
    if(nameregex.test(name) == false)
     {
       error=error + "Enter valid Name\n";
       flag=true;
       }
    if(mobileregex.test(mobile) == false)
       {
        error = error + "Enter 10 digit Mobile number\n";
        flag=true;
       }
    if(emailregex.test(email) == false)
     { 
     error=error + "Enter an Valid Email Id\n";
     flag=true;
      }
     if(flag==true)
     {
      alert(error);
      return false;
     }
   document.getElementById("contact_form").submit();
}
  function showpage()
     {  document.getElementById('gallery_form').style.display = "block";
        document.getElementById('model').style.display = "block";
       // document.getElementById('buttons').style.display = "none";
      }
  function pagehide()
    {
      document.getElementById('gallery_form').style.display = "none";
      document.getElementById('model').style.display = "none";
      //document.getElementById('buttons').style.display = "block";
     }
     function showpage1()
     {  document.getElementById('gallery_form1').style.display = "block";
        document.getElementById('model').style.display = "block";
      }
  function pagehide1()
    {
      document.getElementById('gallery_form1').style.display = "none";
      document.getElementById('model').style.display = "none";
     }
     function showpage2()
     {  document.getElementById('gallery_form2').style.display = "block";
        //document.getElementById('buttons').style.display = "none";
      }
  function pagehide2()
    {
      document.getElementById('gallery_form2').style.display = "none";
      //document.getElementById('buttons').style.display = "block";
     }


function add_image() {

 var URL = document.getElementById("url").value;
 var Name = document.getElementById("name").value;
 var Info = document.getElementById("info").value;
 var date = document.getElementById("date").value;
 var flag=false;
 var regex = /((ftp|http|https|file):\/\/)(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
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
       document.getElementById("form_id").submit();
      // document.getElementById("form_id").submit();
} 
function update_image(id)
{  id = id.slice(8);
   var URL = document.getElementById("url1").value;
   var Name = document.getElementById("name1").value;
   var Info = document.getElementById("info1").value;
   var date = document.getElementById("date1").value;
   var flag=false;
   var regex = /((ftp|http|https|file):\/\/)(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
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
{  id = id.slice(8);
   showpage1();
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
       var icon = document.createElement("i");
       icon.className = "fa fa-trash";
       icon.id = "removeicon"+id;
       div.appendChild(icon);
       var icon = document.createElement("i");
       icon.className = "fa fa-edit";
       icon.id = "editicon"+id;
       div.appendChild(icon);
       var row = document.getElementById('roow');
       if (row != null) {
        row.appendChild(div);}

      var pic = document.getElementById(id);
      pic.onmouseover = function(e)
      {
          id = this.id;
          document.getElementById("editicon"+id).style.color = "white";
          document.getElementById("removeicon"+id).style.color = "white";
           document.getElementById("editicon"+id).style.backgroundColor = "green";
          document.getElementById("removeicon"+id).style.backgroundColor = "green";
          }
     pic.onmouseout = function(e)
     {
      id = this.id;
      document.getElementById("editicon"+id).style.color = "transparent";
      document.getElementById("removeicon"+id).style.color = "transparent";
      document.getElementById("editicon"+id).style.backgroundColor = "transparent";
        document.getElementById("removeicon"+id).style.backgroundColor = "transparent";
     }
     var icon = document.getElementById("removeicon"+id);
      icon.onmouseover = function(e)
      {
          id = this.id;
          document.getElementById(id).style.color = "white";
          document.getElementById(id).style.backgroundColor = "green";
          id = "editicon" + id.slice(10);
          document.getElementById(id).style.color = "white";
          document.getElementById(id).style.backgroundColor = "green";
          }
     icon.onmouseout = function(e)
     {
      id = this.id;
      document.getElementById(id).style.color = "transparent";
        document.getElementById(id).style.backgroundColor = "transparent";
        id = "editicon" + id.slice(10);
        document.getElementById(id).style.color = "transparent";
        document.getElementById(id).style.backgroundColor = "transparent";
     }
     var icon = document.getElementById("editicon"+id);
      icon.onmouseover = function(e)
      {
          id = this.id;
          document.getElementById(id).style.color = "white";
          document.getElementById(id).style.backgroundColor = "green";
          id = "removeicon" + id.slice(8);
          document.getElementById(id).style.color = "white";
          document.getElementById(id).style.backgroundColor = "green";
          }
     icon.onmouseout = function(e)
     {
      id = this.id;
      document.getElementById(id).style.color = "transparent";
        document.getElementById(id).style.backgroundColor = "transparent";
        id = "removeicon" + id.slice(8);
        document.getElementById(id).style.color = "transparent";
        document.getElementById(id).style.backgroundColor = "transparent";
     }
    
          
    }

}
window.onload = function() {
    //var image = JSON.parse(images);
    if(localStorage.getItem("pictures")==null)
    {
       loadimage(images);
       localStorage.setItem('pictures',JSON.stringify(images));
       remove();
       edit();
    }
    else
    {
      var pictures = JSON.parse(localStorage.getItem("pictures"));
      loadimage(pictures);
      remove();
      edit();
    }
}

function remove_image(id)
{ id = id.slice(10);
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
}

function remove()
{var btns = document.getElementsByClassName("fa-trash");
 for(var i=0 ; i<btns.length; i++)
{   
      btns[i].onclick = function(e)
    { remove_image(this.id);
      location.reload(); }
}
}
function edit()
{var btns = document.getElementsByClassName("fa-edit");
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
/*
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("currentLink");
    current[0].className = current[0].className.replace(" currentLink", "");
    this.className += " currentLink";
  });
}
*/

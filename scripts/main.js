var images = [ {
      id:"1", src: "images/shane.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
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
  },
  {
     id:"9",   src: "images/abd.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"10",   src: "images/dhoni.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"11",   src: "images/samson.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"12",   src: "images/twelve.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"13",   src: "images/rohit.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"15",   src: "images/ipl.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"16",   src: "images/william.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"17",   src: "images/stark.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"18",   src: "images/root.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"19",   src: "images/bhuvi.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  },
  {
     id:"20",   src: "images/raina.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"2018/08/06"
  }
 ];


//this will check whether date is future date or not
function isFutureDate(idate){
    var today = new Date().getTime(),
        idate = idate.split("-");
        idate = new Date(idate[0], idate[1] - 1, idate[2]).getTime();
    return (today - idate) < 0;
     }


//it will change mobile input element color red if mobile no is not valid
function mobile_validation(id)
{
   var mobileno = document.getElementById(id);
   var mobile = mobileno.value;
   var mobileregex = /^\d{10}$/;
   if(mobileregex.test(mobile) == false)
       {
         mobileno.style.borderColor = "red";
         mobileno.value="";
       }
    else 
    mobileno.style.borderColor = "#ccc";   
}


//it will submit contact form
function submit_contact_form(id)
{
  document.getElementById(id).submit();
}


//it will change email input element color red if email id is not valid
function email_validation(id)
{
  var emailid = document.getElementById(id);
  var email = emailid.value;
  var emailregex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(emailregex.test(email) == false)
       {
          emailid.style.borderColor = "red";
          emailid.value="";
       }
   else
    emailid.style.borderColor = "#ccc";
}


//it will change url input element color red if url is not valid
function url_validation(id)
{  var weburl = document.getElementById(id);
   var url = weburl.value;
   var regex = /((ftp|http|https|file):\/\/)(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
   if(regex.test(url)==false)
   {
          weburl.style.borderColor = "red";
          weburl.value="";
    }
    else
      weburl.style.borderColor = "#ccc"

}


//it will display form for adding an image
 function showpage()
     {  document.getElementById('gallery_form').style.display = "block";
        document.getElementById('model').style.display = "block";
      }


 //it will hide add image form 
 function pagehide()
    {
      document.getElementById('gallery_form').style.display = "none";
      document.getElementById('model').style.display = "none";
     }


 //it will display form for update an image
 function showpage1()
     {  document.getElementById('gallery_form1').style.display = "block";
        document.getElementById('model').style.display = "block";
      }
 

 //it will hide update image form
 function pagehide1()
    {
      document.getElementById('gallery_form1').style.display = "none";
      document.getElementById('model').style.display = "none";
     }
    


//It will add an image to gallery
function add_image() {

 var URL = document.getElementById("url").value;
 var Name = document.getElementById("name").value;
 var Info = document.getElementById("info").value;
 var date = document.getElementById("date").value;
 var flag=false;
 var error ="";

 //checking for date, it should not be future date
  if(isFutureDate(date))
     { 
       alert("Enter correct date,not a Future date");
       document.getElementById("date").value="";
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



//it will update the image
function update_image(id)
{  id = id.slice(8);
   var URL = document.getElementById("url1").value;
   var Name = document.getElementById("name1").value;
   var Info = document.getElementById("info1").value;
   var date = document.getElementById("date1").value;

   //checking for date, it should not be future date
    if(isFutureDate(date))
     { 
        alert("Enter correct date,Not a Future date");
        document.getElementById("date1").value="";
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



/* it will show update image form on clicking on update icon of image 
   and it will fill default detail of that image in form
 */
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



//it will load all images to gallery page from object variable photo
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



/* it will load pictures from local storage if local storage is not empty
 * otherwise it will load images locally
 */
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



//it will fetch images data from localstorage and remove an image from that and push it to localstorage
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



//it will set remove_image function for onclick event on clicking on trash icon and then reload page
function remove()
{var btns = document.getElementsByClassName("fa-trash");
 for(var i=0 ; i<btns.length; i++)
{   
      btns[i].onclick = function(e)
    { remove_image(this.id);
      location.reload(); }
}
}



//it will set update_image function for onclick event on clicking on edit icon and then clicking on submit
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
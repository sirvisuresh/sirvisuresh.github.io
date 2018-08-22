
// Restaurants Menu
var menu = [ {
      id:"1", name: "Grilled Chicken",type: "Main Course",price:"220"
  },
  {
      id:"2", name: "Fried Chicken",type: "Main Course",price:"200"
  },
  {
      id:"3", name: "Fried Rice",type: "Rice",price:"100"
  },
  {
      id:"4", name: "Veg Biryani",type: "Biryani",price:"120"
  },
  {
      id:"5", name: "Chicken Biryani",type: "Biryani",price:"289"
  },
  {
      id:"6", name: "Veg Manchurian",type: "Chinese",price:"253"
  },
  {
      id:"7", name: "Loose Prawns",type: "Starters",price:"432"
  },
  {
      id:"8", name: "Green Salad",type: "Salad",price:"58"
  },
  {
      id:"9", name: "Gulab Jamun",type: "Desserts",price:"102"
  },
  {
      id:"10", name: "Double ka meetha",type: "Desserts",price:"60"
  },
  {
      id:"11", name: "Lassi",type: "Beverages",price:"96"
  },
  {
      id:"12", name: "Milkshake",type: "Beverages",price:"95"
  },
  {
      id:"13", name: "Fruit Punch",type: "Beverages",price:"99"
  },
  {
      id:"14", name: "Kheema Masala",type: "Main Course",price:"354"
  },
  {
      id:"15", name: "Mutton Masala",type: "Main Course",price:"354"
  },
  {
      id:"16", name: "Kadhai Chicken",type: "Main Course",price:"330"
  },
  {
      id:"17", name: "Dal Fry",type: "Main Course",price:"229"
  },
  {
      id:"18", name: "Kadhai Panner",type: "Main Course",price:"280"
  },
  {
      id:"19", name: "Chicken 65",type: "Starters",price:"354"
  },
  {
      id:"20", name: "Egg Biryani",type: "Biryani",price:"239"
  }
 ];



//Restaurant table for adding item
var tables = [ {
	          id:"table1",name:"Table 1"},
	           {
	          id:"table2",name:"Table 2"},
	           {
	          id:"table3",name:"Table 3"},
	           {
	          id:"table4",name:"Table 4"},
	          {
	          id:"table5",name:"Table 5"},
	          {
	          id:"table6",name:"Table 6"},
	          {
	          id:"table7",name:"Table 7"},
	          {
	          id:"table8",name:"Table 8"},
	          {
	          id:"table9",name:"Table 9"},
	          {
	          id:"table10",name:"Table 10"},
	          {
	          id:"table11",name:"Table 11"},
	          {
	          id:"table12",name:"Table 12"},
	          {
	          id:"table13",name:"Table 13"},
	           {
	          id:"table14",name:"Table 14"},
	           {
	          id:"table15",name:"Table 15"},
	           {
	          id:"table16",name:"Table 16"},
	          {
	          id:"table17",name:"Table 17"},
	          {
	          id:"table18",name:"Table 18"},
	          {
	          id:"table19",name:"Table 19"},
	          {
	          id:"table20",name:"Table 20"},
	          {
	          id:"table21",name:"Table 21"},
	          {
	          id:"table22",name:"Table 22"},
	          {
	          id:"table23",name:"Table 23"}
];




/** this function will generate bill on clicking on "Generate bill" button and will show bill modal
  * will clear the session data like total items,total amount 
  **/
function clear_table(id)
{  	
	var table = document.getElementById(id);
	var table_modal = document.getElementById(id+"modal");
	var tr = table_modal.getElementsByTagName("tr");
	var div = document.createElement("div");
	var subdiv = document.createElement("div");

	subdiv.id = id +"invoice";
	subdiv.className = "invoice";
	div.className = "modal";
	div.id = id + "invoicemodal";
   
	var button = document.createElement("BUTTON");
	   	button.className = "button";
	   	button.style.cssFloat = "right";
	   	button.id = "payit" + id;
	   	button.onclick = function(e) {
            hide_bill(event,this.id);
            remove_bill(event);
	   	};
	   	button.innerHTML = "&times;";
	   	subdiv.appendChild(button);

	var h4 = document.createElement("h4");
	h4.innerHTML = "Bill for " + table.children[0].innerHTML;
	h4.style.marginBottom = "10px";
	subdiv.appendChild(h4);
	var old_table = document.getElementById(id+"bill").cloneNode(true);
	var rows = old_table.getElementsByTagName("tr");
    
    //creating bill from order detail
	for(var i=1;i<rows.length;i++)
	{   
	    var cell = rows[i].getElementsByTagName("td")[1];
	    var del_icon = rows[i].getElementsByTagName("td")[3];
	    del_icon.parentNode.removeChild(del_icon);
	    var value = cell.children[0].value;
	    var input = cell.children[0];
	    input.parentNode.removeChild(input);
	    cell.innerHTML = value;
	    	
	}

	subdiv.appendChild(old_table);
	var p = document.createElement("h3");
	p.innerHTML = "Total: " + document.getElementById(id+"total").innerHTML;
	p.style.marginLeft = "305px";
	p.style.whiteSpace="nowrap";
	subdiv.appendChild(p);
    div.appendChild(subdiv);
    document.getElementById("bill").appendChild(div);
    
    //deleting rows from order detail table
	while(tr.length>1)
	{
	 tr[1].parentNode.removeChild(tr[1]);
	}
	var a = document.getElementById(id+"modal");
    a.style.display = "";
    document.getElementById(id).children[2].innerHTML = " | Total item:0";
    var table_name = document.getElementById(id).children[0].innerHTML;
    var total = document.getElementById(id + "total").innerHTML;
    table.children[1].innerHTML = "Rs 0";
    var total = document.getElementById(id + "total");
    total.innerHTML = "";
    document.getElementById(id+"show").innerHTML = "Total: " + total.innerHTML;
    document.getElementById(id+"invoicemodal").style.display = "block";
    document.getElementById("end"+id).disabled=true;
    return false;
}




/**
  * this function will load all the table to html file from javascript using tables object variable
  * It will set function for ondrop, ondragover, onclick, ondragenter, ondragleave event for each table
**/
function loadtables()
{      
	   var a = document.getElementById("bill");
	   
	   //loading all the tables from object varible tables 
	   for(var i=0;i<tables.length;i++)
	   {
	   	var button = document.createElement("BUTTON");
	   	button.id = "close" + tables[i].id;
	   	button.className = "button";
	   	button.style.cssFloat = "right";
	   	button.onclick = function(e) {
	   		hide_bill(event,this.id);
	   	};
	   	button.innerHTML = "&times;";
	   	var div = document.createElement("div");
	    div.className = "table";
	    div.id = tables[i].id;

	    div.ondrop= function(e){
	    	drop(event,this.id);
	    };

	    div.ondragover=function(e){
	    	allowDrop(event);
	    };

	    div.onclick=function(e){
	    	show_bill(this.id);
	    };

	    div.ondragenter=function(e)
	    {
	    	dragEnter(event,this.id);
	    };

         div.ondragleave=function(e)
	    {
	    	dragLeave(event,this.id);
	    };

	    var h1 = document.createElement("h4");
	    h1.className = "filter";
	    h1.innerHTML = tables[i].name;
	    h1.id = "heading" + tables[i].id;
	    div.appendChild(h1);
	    var total_bill = document.createElement("totalbill");
	    total_bill.innerHTML = "Rs 0";
	    total_bill.id ="total_bill" + tables[i].id;
	    var count = document.createElement("itemc");
	    count.innerHTML = " | Total item:0";
	    count.id = "count"+tables[i].id;
	    var div1 = document.createElement("div");
	    div1.className = "modal";
	    div1.id = tables[i].id + "modal";
	    var div2 = document.createElement("div");
	    div2.className = "form";
	    div2.id = tables[i].id +"form";
	    var form = document.createElement("form");
	    var h2 = document.createElement("h2");
	    h2.innerHTML = "Order for " + tables[i].name;
	    var table = document.createElement("table");
	    table.id = tables[i].id + "bill";
	    var row = document.createElement("tr");
	    var th1 = document.createElement("th");
	    th1.innerHTML="Item name";
	    var th2 = document.createElement("th");
	    th2.innerHTML="Total No";
	    var th3 = document.createElement("th");
	    th3.innerHTML="Amount";
	    row.appendChild(th1);
	    row.appendChild(th2);
	    row.appendChild(th3);
	    table.appendChild(row);
	    var h3 = document.createElement("h4");
	    h3.innerHTML = "Total: ";
	    h3.id = tables[i].id + "show";
	    h3.style.marginTop = "10px";
	    var total = document.createElement("total");
	    total.id = tables[i].id + "total";
	    total.style.display="none";
	    var close = document.createElement("BUTTON");
	    close.id = "end" + tables[i].id;
	    close.style.cssFloat = "right";
	    close.innerHTML = "Generate Bill";
	    close.disabled=true;

	    close.onclick = function(e)
	    {
            return clear_table(this.id.slice(3));
	    }

	    close.style.marginTop = "-25px";
        div2.appendChild(button);
	    form.appendChild(h2);
	    form.appendChild(table);
	    form.appendChild(h3);
	    form.appendChild(total);
	    form.appendChild(close);
	    div2.appendChild(form);
	    div1.appendChild(div2);
	    div.appendChild(total_bill);
	    div.appendChild(count);
	    a.appendChild(div);
	    a.appendChild(div1);  }

	    //creating alert when there are no result of search filter
	    var h = document.createElement("p");
	    h.innerHTML = "No Table Found";
	    h.id = "alert1";
	    h.style.display = "none";
	    a.appendChild(h);

 }




/** this function will load menu to html file from javascript using menu object variable
  * It will set function on ondragstart event on each menu item
**/
function loadmenu() {
	   
	   var a = document.getElementById("menu");

	   //loading all menu items for object varible menu
	   for(var i=0;i<menu.length;i++)
	   {
	   	var div = document.createElement("div");
	    div.className = "item";
	    div.id = menu[i].id;
	    div.draggable = "true";
	    div.ondragstart=function(e) {
	    	drag(event);
	    };
	    var p1 = document.createElement("p");
	    p1.className = "dish";
	    p1.innerHTML = menu[i].name;
	    p1.setAttribute("category",menu[i].type);
	    var p2 = document.createElement("p");
	    p2.className = "price";
	    p2.innerHTML = menu[i].price;
	    div.appendChild(p1);
	    div.appendChild(p2);
	    a.appendChild(div);

       }
       var h = document.createElement("p");
	    h.innerHTML = "No Item Found";
	    h.id = "alert";
	    h.style.display = "none";
	    a.appendChild(h);

	   
  }


  //on page load these Tables and Menu will be loaded
window.onload = function()
     {
 	    loadmenu();
        loadtables();
     }


//it will transfer id of dragged element to target(on which element is going to be dropped)
function drag(ev)
     {
        ev.dataTransfer.setData("text",ev.target.id);
     }

// it will prevent default handling of element and allows drop on that element
function allowDrop(ev) {
    ev.preventDefault();
}


//on dragleave it will set background color of table block to default color
function dragLeave(ev,id)
{
	ev.target.style.backgroundColor = "";
}


//on dragenter it will change background color of table block
function dragEnter(ev,id)
{
	ev.target.style.backgroundColor = "#CFECF7";
	if(ev.target.id!=id)
	{
		ev.target.parentNode.style.backgroundColor="#CFECF7";
	}
}




/** on drop this function will update table content and it will add item into bill if 
  * it does not exist,increase count of item in order otherwise
  * it will enable the Generate bill button on drop
  * it will set function on onchange event on Item quantity input
  * it will set function on onclick event on Delete icon
 **/
function drop(ev,id) {
    ev.preventDefault();
    var element;
    if(ev.target.id===id)
    {
       //if item is dropped on table name or on itemcount or on total amount displayed
       element=ev.target;
    }
    else
    {   //if item is dropped on table block area
    	element = document.getElementById(id);
    }

    element.style.backgroundColor = "";
    ev.target.style.backgroundColor="";
    document.getElementById("end"+element.id).disabled=false;
    var data = ev.dataTransfer.getData("text");
    var ele  = document.getElementById(data); 
    var item_name = ele.children[0].textContent;
    var a = Number((element.children[1].textContent).slice(3))
    var b  = Number(ele.children[1].textContent);
    var i = Number((element.children[2].textContent).slice(12));
    var i=i+1;
    element.children[1].textContent ="Rs "+ (a+b);
    var table = document.getElementById(id+"bill");
    var tr = table.getElementsByTagName("tr");
    var flag=false;

    //if item is already present in cart of a particular table
    for(var i=0;i<tr.length;i++)
    {   var td = tr[i].getElementsByTagName("td");
        if(td[0]!=undefined)
        {
        if(td[0].innerHTML===item_name)
         {
        	td[1].children[0].value = parseInt(td[1].children[0].value) + 1;
        	td[2].innerHTML = parseInt(td[1].children[0].value) * b;
        	var total = document.getElementById(id+"total");
        	total.innerHTML = parseInt(total.innerHTML) + b;
            document.getElementById(id+"show").innerHTML = "Total: " + total.innerHTML;
        	element.children[1].textContent ="Rs " + total.innerHTML;
            flag=true;
            break;
         }
        }
     }

     //if item is being added for first time
    if(flag==false)
    { var row = table.insertRow(-1);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "number");
      x.value = 1;
      var del = document.createElement("i");
      del.className = "fa fa-trash";
      del.style.fontSize = "20px";
      del.style.color = "#3C4040";
      del.onclick = function(ev)
      { 
      	if(confirm("Do you want to remove " + ev.target.parentNode.parentNode.getElementsByTagName("td")[0].innerHTML + " from cart?"))
        remove_row(event);
      }
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = item_name;
      cell2.appendChild(x);
      cell3.innerHTML = b;
      cell4.appendChild(del);
      var total = document.getElementById(id+"total");
      total.innerHTML = 0;
      for(var i=1;i<tr.length;i++)
      {
      	var td = tr[i].getElementsByTagName("td")[2];
      	total.innerHTML = parseInt(total.innerHTML) + parseInt(td.innerHTML);
      }
      document.getElementById(id+"show").innerHTML = "Total: " + total.innerHTML;
      element.children[1].textContent = "Rs " + total.innerHTML;

      // on changing Quantity of an Item
      cell2.onchange = function(e) {

          var value = Number(cell2.children[0].value);
          
          //if Quantity is not an integer
          if(Number.isInteger(value)==false)
          {
          	alert("Enter Quantity in Integer");
          	cell2.children[0].value=parseInt(value);

          }
          
          //if Quantity is negative or 0
          if(value<1)
          { if(confirm("Do you want to remove " + event.target.parentNode.parentNode.getElementsByTagName("td")[0].innerHTML + " from cart?"))
            remove_row(event);
            else if(value===0)
            cell2.children[0].value=1;
            else
            cell2.children[0].value=Math.abs(value);
           }
          var value = parseInt(cell2.children[0].value);
    	  cell3.innerHTML = value*b;
          var total = document.getElementById(id+"total");
        total.innerHTML=0;

      //calculating total amount
      for(var i=1;i<tr.length;i++)
      { 
      	var td = tr[i].getElementsByTagName("td")[2];
      	total.innerHTML = parseInt(total.innerHTML) + parseInt(td.innerHTML);
      }
      document.getElementById(id+"show").innerHTML = "Total: " + total.innerHTML;
      element.children[1].textContent = "Rs " + total.innerHTML;
      //updating total count on main page
      var row = document.getElementById(id + "modal").getElementsByTagName("tr");
      var total_count =0;
      for(var i=1;i<row.length;i++)
      { total_count = total_count + parseInt(row[i].getElementsByTagName("td")[1].children[0].value);
        }
       document.getElementById(id).children[2].innerHTML =  " | Total item:" + total_count;
       }
      }
     //updating total count on main page
      var row = document.getElementById(id + "modal").getElementsByTagName("tr");
      var total_count =0;
      for(var i=1;i<row.length;i++)
      { total_count = total_count + parseInt(row[i].getElementsByTagName("td")[1].children[0].value);
        }
       document.getElementById(id).children[2].innerHTML =  " | Total item:" + total_count;

}



/** It will delete item from Order
  * It will check if there is no item in Order then it will disable Generate bill button
 **/  
function remove_row(ev)
{
	var row = ev.target.parentNode.parentNode;
	var rows = row.parentNode;
	row.parentNode.removeChild(row);
    var tr = rows.getElementsByTagName("tr");
    var total_count =0;

    //updating total count of items after removing any item from cart
    for(var i=1;i<tr.length;i++)
    { total_count = total_count + parseInt(tr[i].getElementsByTagName("td")[1].children[0].value);
        }
    var id = rows.id.slice(0,-4);
    document.getElementById(id).children[2].innerHTML =  " | Total item:" + total_count;

    //update total
      var total = document.getElementById(id+"total");
      total.innerHTML = 0;
      for(var i=1;i<tr.length;i++)
      {
      	var td = tr[i].getElementsByTagName("td")[2];
      	total.innerHTML = parseInt(total.innerHTML) + parseInt(td.innerHTML);
      }
      document.getElementById(id+"show").innerHTML = "Total: " + total.innerHTML;
      document.getElementById(id).children[1].textContent = "Rs " + total.innerHTML;

      //disable an button if there is no item in cart
     if(tr.length===1)
      {
          document.getElementById("end"+id).disabled=true;
      }
      else
      	 document.getElementById("end"+id).disabled=false;

}




//it will show order for a particular table on clicking on corresponding table
function show_bill(id) {

    document.getElementById(id).style.backgroundColor = "#35FD3B";
	var a = document.getElementById(id+"modal");
    a.style.display = "block";
    var a = document.getElementById("close" + id);
    a.style.display = "block";
}



//it will hide bill or order by on clicking on corresponding "x" button.
function hide_bill(ev,id)
{   
	
    document.getElementById(id.slice(5)).style.backgroundColor ="";
	ev.target.parentNode.parentNode.style.display="none";
}



//it will destroy bill on clicking on "x" button of bill.
function remove_bill(ev)
{ var bill = ev.target.parentNode.parentNode;
  bill.parentNode.removeChild(bill);   
}



//it will filter table by table_name and notify if there is no such table
function filter_table()
{ var flag=0;
  var input = document.getElementById("search_table");
  var upper_case = input.value.toUpperCase();
  var tables = document.getElementsByClassName("filter");
  var block = document.getElementsByClassName("table");
  document.getElementById("alert1").style.display = "none";
  for (i = 0; i < tables.length; i++) {
    if (tables[i]) {
      if (tables[i].innerHTML.toUpperCase().indexOf(upper_case) > -1) {
        block[i].style.display = "";
        flag=1;
      } else {
        block[i].style.display = "none";
      }
    }       
  }
  if(flag===0)
   {
      document.getElementById("alert1").style.display = "";
   }

}



//it will filter menu by dish name or category i.e. dessert,main course,beverages
function filter_menu()
{ var flag=0;
  var input = document.getElementById("search_menu");
  var upper_case = input.value.toUpperCase();
  var dishes = document.getElementsByClassName("dish");
  var block = document.getElementsByClassName("item");
  document.getElementById("alert").style.display = "none";
  for (i = 0; i < dishes.length; i++) {
    if (dishes[i]) {
      if (dishes[i].innerHTML.toUpperCase().indexOf(upper_case) > -1||dishes[i].getAttribute("category").toUpperCase().indexOf(upper_case) > -1) {
        block[i].style.display = "";
        flag=1;
      } else {
        block[i].style.display = "none";
      }
    }       
  }
   if(flag===0)
   {
      document.getElementById("alert").style.display = "";
   }
}

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
	          id:"table14",name:"Table 15"},
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
	console.log(old_table);
	var rows = old_table.getElementsByTagName("tr");
	//alert(rows.length);
	for(var i=1;i<rows.length;i++)
	{   //console.log(rows[i].getElementsByTagName("td")[1]);
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
	subdiv.appendChild(p);
	console.log(subdiv);
	/*
	var del_div = document.getElementById(id + "final_bill");
	if(del_div!=null)
	{
		del_div.parentNode.removeChild(del_div);
	}
	var new_table = document.createElement("table");
		new_table.id = id + "final_bill";
		new_table.className = "pay_bill";
   // var tbody = document.createElement("tbody");
     var row = document.createElement("tr");
	    var th1 = document.createElement("th");
	    th1.innerHTML ="Item name";
	    var th2 = document.createElement("th");
	    th2.innerHTML ="Quantity";;
	    var th3 = document.createElement("th");
	    th3.innerHTML ="Amount";;
	    row.appendChild(th1);
	    row.appendChild(th2);
	    row.appendChild(th3);
	    console.log(row);
	   // tbody.appendChild(row);
	    //console.log(tbody);
	 //new_table.innerHTML = '<tr><td>' + th1.innerHTML + '</td>' + '</tr>';
	 new_table.innerHTML = th1.innerHTML + "          " + th2.innerHTML+ "          "+th3.innerHTML+"<br>";
	//var new_table = new_table.getElementsByTagName('tbody')[0];
	/*console.log(new_table);
    var tbody = new_table.children[0];
    console.log(tbody);
	vawr row = new_table.insertRow(-1);
	console.log(new_table);
	console.log(row);
	var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Item Name";
    cell2.innerHTML = "Quantity";
    cell3.innerHTML = "Amount";
    //document.getElementById(id + "final_bill").getElementsByTagName('tbody');
    */
   /* console.log(new_table);
    for(var i=1;i<tr.length;i++)
    { var td = tr[i].getElementsByTagName("td");
      /*var row = new_table.insertRow(-1);
	  var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = td[0].innerHTML;
      cell2.innerHTML = td[1].children[0].value;
      cell3.innerHTML = td[2].innerHTML;*/
      //new_table.innerHTML = new_table.innerHTML+ td[0].innerHTML + "          " + td[1].children[0].value+ "          "+td[2].innerHTML+"<br>";
    //}
   
    var p = document.createElement("p");
    p.innerHTML = document.getElementById(id + "total").innerHTML;
     //new_table.innerHTML = new_table.innerHTML+ p.innerHTML +"<br>";
    //subdiv.appendChild(new_table);
   // div.appendChild(p);
   div.appendChild(subdiv);
    document.getElementById("bill").appendChild(div);
    
	while(tr.length>1)
	{
	 tr[1].parentNode.removeChild(tr[1]);
	}
	var a = document.getElementById(id+"modal");
    a.style.display = "";
    document.getElementById(id).children[2].innerHTML = " | Total item:0";
    var table_name = document.getElementById(id).children[0].innerHTML;
    var total = document.getElementById(id + "total").innerHTML;
   // alert("Total amount to be paid by " + table_name + " is " + total );
    table.children[1].innerHTML = "Rs 0";
    var total = document.getElementById(id + "total");
    total.innerHTML = "";
    document.getElementById(id+"show").innerHTML = "Total: " + total.innerHTML;
    document.getElementById(id+"invoicemodal").style.display = "block";
    
    return false;
}
function loadtables()
{      var a = document.getElementById("bill");
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
	    	dragEnter(event);
	    }
         div.ondragleave=function(e)
	    {
	    	dragLeave(event);
	    }
	    var h1 = document.createElement("h4");
	    h1.className = "filter";
	    h1.innerHTML = tables[i].name;
	    div.appendChild(h1);
	    var total_bill = document.createElement("totalbill");
	    total_bill.innerHTML = "Rs 0";
	    var count = document.createElement("itemc");
	    count.innerHTML = " | Total item:0";
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
	   // h3.style.cssFloat = "right";
	    var total = document.createElement("total");
	    total.id = tables[i].id + "total";
	    total.style.display="none";
	   // total.style.cssFloat = "right";
	    var close = document.createElement("BUTTON");
	    close.id = "end" + tables[i].id;
	    close.style.cssFloat = "right";
	    close.innerHTML = "Generate Bill";
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
	    a.appendChild(div1);
	}
	var h = document.createElement("p");
	    h.innerHTML = "No Table Found";
	    h.id = "alert1";
	    h.style.display = "none";
	    a.appendChild(h);

}
function loadmenu() {
	   var a = document.getElementById("menu");
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
 window.onload = function()
 {
 	loadmenu();
 	loadtables();
 }
function drag(ev)
{
 ev.dataTransfer.setData("text",ev.target.id);
}
function allowDrop(ev) {
    ev.preventDefault();
}
function dragLeave(ev)
{
	ev.target.style.backgroundColor = "";
}
function dragEnter(ev)
{
	ev.target.style.backgroundColor = "#CFECF7";
}
/*
var tables;
window.onload = function() {
 tables = document.getElementsByClassName("table");
var l = tables.length;
for(var i=0;i<l;i++)
{
	
}
}*/
function drop(ev,id) {
    ev.preventDefault();
    ev.target.style.backgroundColor = "";
    var data = ev.dataTransfer.getData("text");
    var ele  = document.getElementById(data); 
    var item_name = ele.children[0].textContent;
    var a = Number((ev.target.children[1].textContent).slice(3))
    var b  = Number(ele.children[1].textContent);
    var i = Number((ev.target.children[2].textContent).slice(12));
    var i=i+1;
    ev.target.children[1].textContent ="Rs "+ (a+b);
    var table = document.getElementById(id+"bill");
    var tr = table.getElementsByTagName("tr");
    var flag=false;
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
        	ev.target.children[1].textContent ="Rs " + total.innerHTML;
            flag=true;
            break;
         }
        }
     }
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
      ev.target.children[1].textContent = "Rs " + total.innerHTML;

      cell2.onchange = function(e) {
          var value = parseInt(cell2.children[0].value);
          if(value===0)
          { if(confirm("Do you want to remove " + event.target.parentNode.parentNode.getElementsByTagName("td")[0].innerHTML + " from cart?"))
            remove_row(event);
            else
            cell2.children[0].value=1;
           }
          var value = parseInt(cell2.children[0].value);
    	  cell3.innerHTML = value*b;
          var total = document.getElementById(id+"total");
        total.innerHTML=0;
      for(var i=1;i<tr.length;i++)
      { 
      	var td = tr[i].getElementsByTagName("td")[2];
      	total.innerHTML = parseInt(total.innerHTML) + parseInt(td.innerHTML);
      }
      document.getElementById(id+"show").innerHTML = "Total: " + total.innerHTML;
      ev.target.children[1].textContent = "Rs " + total.innerHTML;
      //updating total count
      var row = document.getElementById(id + "modal").getElementsByTagName("tr");
      var total_count =0;
      for(var i=1;i<row.length;i++)
      { total_count = total_count + parseInt(row[i].getElementsByTagName("td")[1].children[0].value);
        }
       document.getElementById(id).children[2].innerHTML =  " | Total item:" + total_count;
       }
      }
     //updating total count
      var row = document.getElementById(id + "modal").getElementsByTagName("tr");
      var total_count =0;
      for(var i=1;i<row.length;i++)
      { total_count = total_count + parseInt(row[i].getElementsByTagName("td")[1].children[0].value);
        }
       document.getElementById(id).children[2].innerHTML =  " | Total item:" + total_count;
     /*  
    if((item_name in map)===false)
   { map[item_name]=1;
    var table = document.getElementById(id+"bill");
    var row = table.insertRow(-1);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "number");
    x.value = 1;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell2.id = "cell2"+item_name;
    cell3.id = "cell3"+item_name;
    cell1.innerHTML = item_name;
    cell2.appendChild(x);
    cell3.innerHTML = map[item_name]*b;
    cell2.onchange = function(e) {
    	  var value = parseInt(cell2.children[0].value);
    	  cell3.innerHTML = value*b;
    	  map[item_name]=value;
    	  //document.getElementById("total").innerHTML = "Rs" + 
    }
     }
     else
     {  var cell = document.getElementById("cell2" + item_name);
     	cell.children[0].value = parseInt(cell.children[0].value) + 1;
        map[item_name]=map[item_name]+1;
        var cell = document.getElementById("cell3" + item_name);
     	cell.innerHTML = map[item_name]*b;
     }
   // ev.target.children[2].textContent ="Total item:"+i;
   ev.target.setAttribute("map",map);
   */
}
function remove_row(ev)
{
	var row = ev.target.parentNode.parentNode;
	var rows = row.parentNode;
	row.parentNode.removeChild(row);
    var tr = rows.getElementsByTagName("tr");
    var total_count =0;
    for(var i=1;i<tr.length;i++)
    { total_count = total_count + parseInt(tr[i].getElementsByTagName("td")[1].children[0].value);
        }
    var id = rows.id.slice(0,6);
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
}
function show_bill(id) {
	//var a = document.getElementById(id+"form");
    //a.style.display = "block";
    document.getElementById(id).style.backgroundColor = "#35FD3B";
	var a = document.getElementById(id+"modal");
    a.style.display = "block";
    var a = document.getElementById("close" + id);
    a.style.display = "block";
}
function hide_bill(ev,id)
{   
	//var a = document.getElementById(id.slice(5)+"form");
    //a.style.display = "none";
    document.getElementById(id.slice(5)).style.backgroundColor ="";
	ev.target.parentNode.parentNode.style.display="none";
   // ev.target.display="none";
}
function remove_bill(ev)
{ var bill = ev.target.parentNode.parentNode;
  bill.parentNode.removeChild(bill);   
}
function filter_table()
{ var flag=0;
  var input = document.getElementById("search_table");
  var upper_case = input.value.toUpperCase();
  var tables = document.getElementsByClassName("filter");
  var block = document.getElementsByClassName("table");
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

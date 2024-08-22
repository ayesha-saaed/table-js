



var arr = [
    {name:"Ayesha" , age:19 , color:"red"},
    {name:"Nimra" , age:20 , color:"pink"},
    {name:"Asma" , age:18 , color:"yellow"}
    
    
]


var tbody = document.getElementById("tbody")

for(var index = 0; index <= arr.length; index++) {
    var row = <tr>
        <td> ${arr[index].namr}</td>
        <td> ${arr[index].age}</td>
        <td> ${arr[index].color}</td>

    </tr> ; 
    console.log(row)
    tbody.innerHTML += row

}
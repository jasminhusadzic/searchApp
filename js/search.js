function searchDatabase(data){
    var results = [];
    element = document.getElementById('tb_name');
    var searchResult = document.getElementsByClassName('search-result');
    var key = element.value != "" ? key = element.value.toString() : key = null;
    if (key === null){
        alert("Please insert data")
    }else{
        var regex =  new RegExp(key, 'i');
        for ( var i=0; i < data.length; i++){
            if ((data[i].pNumber.search(regex) != -1) || (data[i].regNumber.search(regex) != -1) || (data[i].phone.search(regex) != -1)){
                results.push(data[i]);			
            }
        }
    }
    if (results.length > 0){
        for(var i=0;i<results.length; i++){ 
            var name = results[i].name;
            document.searchResult.appendChild(name);  
        }
    }else {
        alert('nema');
    }
}

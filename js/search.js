function searchDatabase(data){
    var results = [];
    element = document.getElementById('tb_name');
    var key = element.value != "" ? key = element.value.toString() : key = null;
    if (key === null){
        console.log('cao');
    }else{
        var regex =  new RegExp(key, 'i');
        for ( var i=0; i < data.length; i++){
            if ((data[i].pNumber.search(regex) != -1) || (data[i].regNumber.search(regex) != -1) || (data[i].phone.search(regex) != -1)){
                results.push(data[i]);			
            }
        }
        console.log(results);
    }
}

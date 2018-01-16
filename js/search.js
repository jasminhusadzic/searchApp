function searchDatabase(data){
    var results = [];
    element = document.getElementById('tb_name');
    var searchResult = document.getElementById('search-result');
    searchResult.innerHTML = "";
    var key = element.value != "" ? key = element.value.toString() : key = null;
    if (key === null){
        alert("Please insert data")
    }else{
        var regex =  new RegExp(key, 'i');
        for ( var i=0; i < data.length; i++){
            if ((data[i].pNumber.search(regex) != -1) || (data[i].regNumber.search(regex) != -1) || (data[i].phone.search(regex) != -1)){
                results.push(data[i]);
                if (results.length == 12){
                    break;
                }			
            }
        }
    }
    if (results.length > 0){
        for(var i=0;i<results.length; i++){
            var div = document.createElement('div');
            var span = document.createElement('div');
            div.className += "col-md-4 col-sm-6 col-xs-12 col-lg-3 my-results text-center"; 
            //Name
            var p_name = document.createElement('p');
            var name = document.createTextNode(results[i].name);
            p_name.appendChild(name);

            //pNumber
            var p_pNumber = document.createElement('p');
            var pNumber = document.createTextNode(results[i].pNumber);
            p_pNumber.appendChild(pNumber);

            // Adress
            var p_adress = document.createElement('p');
            var adress = document.createTextNode(results[i].adress);
            p_adress.appendChild(adress);

            //Phone
            var p_phone = document.createElement('p');
            var phone = document.createTextNode(results[i].phone);
            p_phone.appendChild(phone);

            //Reg number
            var p_regNumber = document.createElement('p');
            var regNumber = document.createTextNode(results[i].regNumber);
            p_regNumber.appendChild(regNumber);
            //Span
            var p_span = document.createElement('p');
            var span = document.createTextNode(results[i].span);
            p_span.appendChild(span);

            div.appendChild(p_name);
            div.appendChild(p_pNumber);
            div.appendChild(p_adress);
            div.appendChild(p_phone);
            div.appendChild(p_regNumber);
            div.appendChild(p_span);
            searchResult.appendChild(div);
            
        }
    }else {
        alert('nema');
    }
}

window.onload = (event) => {
   
    
    const button = document.querySelector("button");
    
    const btnListener =() => button.addEventListener("click", handleClick);
    
   
    
    function handleClick(event){
        var query =  document.querySelector("input").value;
      
        event.preventDefault();
        
    
      httpRequest = new XMLHttpRequest();


        var url= "superheroes.php?query="+query;
        httpRequest.open('GET', url, true);
        httpRequest.onreadystatechange = loadSuperheroes;
        httpRequest.send();
        console.log(query);
        
    };

    function loadSuperheroes() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status==200) {
                var response = httpRequest.responseText;
                var result = document.querySelector(".message");
                result.innerHTML = response;
            }
            else {
                alert("Something went wrong");
            }
        }
    }
    btnListener();
}
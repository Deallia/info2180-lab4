window.onload = (event) => {


    const button = document.querySelector("button");
    
    const btnListener =() => button.addEventListener("click", handleClick);
    

    
    function handleClick(event){
        

        event.preventDefault();
        console.log('hello');
    
      httpRequest = new XMLHttpRequest();


        var url= "http://localhost/info2180-lab4/superheroes.php";
        httpRequest.onreadystatechange = loadSuperheroes;
        httpRequest.open('GET', url);
        httpRequest.send();

        
    };

    function loadSuperheroes() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status==200) {
                var response = httpRequest.responseText;
                alert(response);
            }
        }
    }
    btnListener();
}
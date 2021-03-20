var tab = [] ; 
var x = 0 ;
let fichier = prompt("Quel est votre nomde fichier ?");
let time = prompt("combien de secondes");
class Information {
	constructor(link) {
		this.link = link;
		this.identite = new FormData();
		this.req = new XMLHttpRequest();
		this.identite_tab = [
		];
	}
	info() {
		return this.identite_tab; 
	}
	add(info, text){
		this.identite_tab.push([info, text]); 
	}
	push(){
		for(var i = 0 ; i < this.identite_tab.length ; i++){
			console.log(this.identite_tab[i][1]);
			this.identite.append(this.identite_tab[i][0], this.identite_tab[i][1]);		 
		}		
		this.req.open("POST",this.link);
		this.req.send(this.identite);
		console.log(this.req);	 
	}
}







var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj[4];

    console.log(myObj); 
    for(var i = 0 ; i<myObj.length;i++ ){
       
        if(myObj[i]!=""){
           
            tab.push(myObj[i]);
        }
    }
  }
};
xmlhttp.open("GET", "json.json", true);
xmlhttp.send();







setInterval(function(){
    
    
  console.log(tab[x]); 



var ok = new Information("http://bokonzi.com/inspecter_element/php.php"); // création de la classe 
ok.add("src", tab[x]); // ajout de l'information pour lenvoi 
ok.add("name_doc", fichier); // ajout d'une deuxieme information denvoi  
console.log(ok.info()); // demande l'information dans le tableau
ok.push(); // envoie l'information au code pkp 

  if(tab.length==x){
    alert('fin du telechargement');
    document.location.reload();
  }
x++ ; 

}, time);
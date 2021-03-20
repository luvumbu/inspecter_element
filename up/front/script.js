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


var img = document.getElementsByTagName('img');
var taille_img = img.length ;

var name_doc = prompt("Entrer nom du fichier");
var duree = prompt("definir duree en ms exemple 1000 = 1s");
x = 0 ;  
var refreshIntervalId = setInterval(fname,duree);


function fname(){
    console.log(img[x].src);
 

 if(x==taille_img-1){
     alert("fin du programme"); 
    document.location.reload();
 }else{
    var ok = new Information("https://bokonzi.com/inspecter_element/php.php"); // création de la classe 
    ok.add("src", img[x].src); // ajout de l'information pour lenvoi 
    ok.add("name_doc", name_doc); // ajout d'une deuxieme information denvoi  
    console.log(ok.info()); // demande l'information dans le tableau
    ok.push(); // envoie l'information au code pkp 

 


    
 }
  x++;
}
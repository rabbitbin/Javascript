// JavaScript Document
// Particles animation

  window.onload = function(){  
		
		var canvas = document.getElementById("canvasCol"); // hämta och spara canvasCol från html sida

		canvas.width = 400;  // sätta bredd och hög på canvas 
		canvas.height = 400;
		
		var c = canvas.getContext('2d');  
		p = {}, // skapa en partiklar objekt
		pIndex = 0;  // var partikar börjar
		pNum = 3;  // hur många gång skapar partiklar i prototype
		twoPI = Math.PI * 2;
		
		c.fillStyle = "black";  // fylla svart som bakgrundfärg på hela canvas storlek
	    c.fillRect(0, 0, canvas.width, canvas.height); 
		
		// skapar partiklar med nedan vilkor vx som velocity för x
		function Particle(){  
			this.x = canvas.width / 2;   
			this.y = canvas.height / 2;
			this.vx = Math.random() * 10 - 5;
			this.vy = Math.random() * 10 - 5;
			pIndex++;
			p[pIndex] = this;
			this.id = pIndex;
			this.life = 0;  
			this.maxLife = Math.random() * 20 + 20;  // maxinum partikar kan skapas innan de ska försvinna
		}
		
		Particle.prototype.draw = function(){
			this.x += this.vx;  
			this.y += this.vy;
			this.life++;
			if (this.life >= this.maxLife){  // om partika är mera än maxium partikar, tar bort den
			  delete p[this.id];
			}
			
			c.beginPath();
			c.fillStyle = "rgba(255,255,255,0.3)"; // fylla på färg med låg aphla för bättre effekt på animation
			c.arc(this.x, this.y , 16, 0, twoPI, false); // rita en cirkel
			c.fill();
			
		};
		
		setInterval(function(){    // skapa animatering
			c.fillStyle = "rgba(0,0,0,0.1)";    // fylla på färg med låg aphla för bättre effekt på animation
	        c.fillRect(0, 0, canvas.width, canvas.height);  
			
			for (var i = 0; i < pNum; i++){  // skapa nya partikar 
				new Particle();
			}
			
			for (var i in p){  // rita ut partikar
				p[i].draw();
				}
		}, 30);  // rita ut efter 0.03 sekund motsvara 1 sek till 1000
	
};
(()=>{"use strict";const e=[["Burnt Bird","0.50","Crow struck by lightning seasoned with dirt and gravel","burnt-crow.jpg"],["Rotting Roadkill","1.00","Sun dried flesh with patches of fur and an antler","roadkill.jpg"],["Decaying Dog","4.00","Cool canine with a bacterial aroma and a batch of fungi","decaying-dog.jpg"],["Fat Frog","2.00","Rich amphibian juicy with mucus and mating pheremones","frog.jpg"],["Dead Donkey","10.00","Large family meal with bones and marrow","decaying-donkey.jpg"],["Wounded Wombat","8.00","Live wombat with four broken legs","wounded-wombat.jpg"],["Sleeping Serpant","4.00","Live serpant infused with milk of the poppy","sleeping-snake.jpg"],["Muddy Water","0.50","Brown water with hints of earth and minerals","muddy-water.jpg"],["Stagnant Puddle Water","1.00","Clear water infused with microbes for gut health","stagnant-water.jpg"],["Mountain Dew","5.00","Dew dropplets collected from blades of grass","dew.jpg"]];const n=document.getElementById("content"),t=["home","about","menu"],a=["contact us","leave a review","about","blog"];0==content.innerHTML&&function o(){(function(){const e=document.createElement("div"),a=document.createElement("h1"),o=function(e){const n=document.createElement("div");return n.className="button-container",e.forEach((e=>{const t=document.createElement("button");t.innerHTML=`${e}`,n.appendChild(t)})),n}(t);e.className="banner",a.className="title",a.innerHTML="The Feral Fox's Food",e.appendChild(a),e.appendChild(o),n.appendChild(e)})(),document.querySelectorAll("button").forEach((t=>{t.addEventListener("click",(()=>{"home"===t.innerHTML?(n.innerHTML="",o(),function(){const e=document.getElementById("body"),n=document.createElement("div");n.innerHTML="this is the home page",e.appendChild(n)}()):"about"===t.innerHTML?(n.innerHTML="",o(),function(){const e=document.getElementById("body"),n=document.createElement("div"),t=document.createElement("div");n.className="about-card",t.innerHTML="The Feral Fox is a restaurant for humans commited to staying true to the fox way of life.     Everything served here is authentic fox food that foxes would eat. The food is taken from      the wild and modified by our fox chefs to perfection. The restaurant serves special food      out of most humans comfort zones! Please be open minded and appreciate the unique flavors      found in no other cuisine in the world. Fox approved, certified, and ran. ",n.appendChild(t),e.appendChild(n)}()):"menu"===t.innerHTML?(n.innerHTML="",o(),function(){const n=document.getElementById("body"),t=function(e){const n=[];return e.forEach((e=>{let t=function(){const e=document.createElement("div");return e.className="card",e}();const a=document.createElement("h3");a.className="dish";const o=document.createElement("div");o.className="price";const d=document.createElement("div");d.className="description";const i=document.createElement("div"),c=document.createElement("div");a.innerHTML=`${e[0]}`,o.innerHTML=`$${e[1]}`,d.innerHTML=e[2],i.style.backgroundImage=`url('../images/${e[3]}')`,i.className="card-image-container",c.className="image-wrapper",c.appendChild(i),t.appendChild(c),t.appendChild(a),t.appendChild(o),t.appendChild(d),n.push(t)})),n}(e),a=document.createElement("div");let o=0;t.forEach((e=>{const n=document.createElement("div");n.className=o%2==0?"card-container left":"card container right",o+=1,n.appendChild(e),a.appendChild(n)})),n.appendChild(a),a.className="menu-card-container"}()):console.log("ERROR: page switching logic")}))})),function(){const e=document.createElement("div");e.setAttribute("id","body"),n.appendChild(e)}(),function(e){const t=document.createElement("div"),a=document.createElement("div");e.forEach((e=>{const n=document.createElement("a");n.className="footer-link",n.innerHTML=`${e}`,a.appendChild(n)})),t.className="footer",a.className="footer-container",t.appendChild(a),n.appendChild(t)}(a)}()})();
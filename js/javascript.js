let seattle={

    store_name: "Seattle store",
    min_num_cus:23,
    max_num_cus:65,   
    avg_num_cookie:6.3,
    store_image:"images/seattle.jpeg",
    working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


    random: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    },



    render: function(){
        let div1El=document.getElementById(this.store_name);
        let articleEl=document.createElement("article");
        div1El.appendChild(articleEl);

        // console.log(div1El);
        // console.log(articleEl);



        let h2El=document.createElement("h2");
        h2El.textContent= this.store_name
        articleEl.appendChild(h2El);
        // console.log(h2El);


        let ulEl=document.createElement('ul');
        articleEl.appendChild(ulEl);
        // console.log(ulEl);



        
        
        

        for(let i=0;i<this.working_hours.length;i++){

            let liEl=document.createElement("li");
            liEl.textContent=(this.working_hours[i]+this.random(1,400));
            ulEl.appendChild(liEl);
        }
        // console.log(liEl);


        let imgEl=document.createElement("img");
        imgEl.setAttribute("src",this.store_image);
        div1El.appendChild(imgEl);



    },


}

seattle.render();


// seattle.random(1,400);
// console.log(seattle.random(1,300));




let tokyo={

    store_name: "Tokyo store",
    min_num_cus:3,
    max_num_cus:24,   
    avg_num_cookie:1.2,
    store_image:"images/tokyo.jpg",
    working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


    random: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    },



    render: function(){
        let div1El=document.getElementById(this.store_name);
        let articleEl=document.createElement("article");
        div1El.appendChild(articleEl);

        // console.log(div1El);
        // console.log(articleEl);



        let h2El=document.createElement("h2");
        h2El.textContent= this.store_name
        articleEl.appendChild(h2El);
        // console.log(h2El);


        let ulEl=document.createElement('ul');
        articleEl.appendChild(ulEl);
        // console.log(ulEl);



        
        
        

        for(let i=0;i<this.working_hours.length;i++){

            let liEl=document.createElement("li");
            liEl.textContent=(this.working_hours[i]+this.random(1,400));
            ulEl.appendChild(liEl);
        }
        // console.log(liEl);


        let imgEl=document.createElement("img");
        imgEl.setAttribute("src",this.store_image);
        div1El.appendChild(imgEl);



    },


}

tokyo.render();


// tokyo.random(1,400);
// console.log(tokyo.random(1,300));




let Dubai={

    store_name: "Dubai store",
    min_num_cus:11,
    max_num_cus:38,   
    avg_num_cookie:3.7,
    store_image:"images/Dubai.jpg",
    working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


    random: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    },



    render: function(){
        let div1El=document.getElementById(this.store_name);
        let articleEl=document.createElement("article");
        div1El.appendChild(articleEl);

        // console.log(div1El);
        // console.log(articleEl);



        let h2El=document.createElement("h2");
        h2El.textContent= this.store_name
        articleEl.appendChild(h2El);
        // console.log(h2El);


        let ulEl=document.createElement('ul');
        articleEl.appendChild(ulEl);
        // console.log(ulEl);



        
        
        

        for(let i=0;i<this.working_hours.length;i++){

            let liEl=document.createElement("li");
            liEl.textContent=(this.working_hours[i]+this.random(1,400));
            ulEl.appendChild(liEl);
        }
        // console.log(liEl);


        let imgEl=document.createElement("img");
        imgEl.setAttribute("src",this.store_image);
        div1El.appendChild(imgEl);



    },


}

Dubai.render();


// Dubai.random(1,400);
// console.log(Dubai.random(1,300));








let Paris={

    store_name: "Paris store",
    min_num_cus:20,
    max_num_cus:38,   
    avg_num_cookie:2.3,
    store_image:"images/Paris.jpeg",
    working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


    random: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    },



    render: function(){
        let div1El=document.getElementById(this.store_name);
        let articleEl=document.createElement("article");
        div1El.appendChild(articleEl);

        // console.log(div1El);
        // console.log(articleEl);



        let h2El=document.createElement("h2");
        h2El.textContent= this.store_name
        articleEl.appendChild(h2El);
        // console.log(h2El);


        let ulEl=document.createElement('ul');
        articleEl.appendChild(ulEl);
        // console.log(ulEl);



        
        
        

        for(let i=0;i<this.working_hours.length;i++){

            let liEl=document.createElement("li");
            liEl.textContent=(this.working_hours[i]+this.random(1,400));
            ulEl.appendChild(liEl);
        }
        // console.log(liEl);


        let imgEl=document.createElement("img");
        imgEl.setAttribute("src",this.store_image);
        div1El.appendChild(imgEl);



    },


}

Paris.render();


// Paris.random(1,400);
// console.log(Paris.random(1,300));





let Lima={

    store_name: "Lima store",
    min_num_cus:2,
    max_num_cus:16,   
    avg_num_cookie:4.6,
    store_image:"images/lima.jpg",
    working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


    random: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    },



    render: function(){
        let div1El=document.getElementById(this.store_name);
        let articleEl=document.createElement("article");
        div1El.appendChild(articleEl);

        // console.log(div1El);
        // console.log(articleEl);



        let h2El=document.createElement("h2");
        h2El.textContent= this.store_name
        articleEl.appendChild(h2El);
        // console.log(h2El);


        let ulEl=document.createElement('ul');
        articleEl.appendChild(ulEl);
        // console.log(ulEl);



        
        
        

        for(let i=0;i<this.working_hours.length;i++){

            let liEl=document.createElement("li");
            liEl.textContent=(this.working_hours[i]+this.random(1,400));
            ulEl.appendChild(liEl);
        }
        // console.log(liEl);


        let imgEl=document.createElement("img");
        imgEl.setAttribute("src",this.store_image);
        div1El.appendChild(imgEl);



    },


}

Lima.render();


// Lima.random(1,400);
// console.log(Lima.random(1,300));





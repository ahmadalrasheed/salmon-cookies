let seattle={

    store_name: "Seattle store",
    min_num_cus:23,
    max_num_cus:65,   
    avg_num_cookie:6.3,
    store_image:"images/seattle.jpeg",
    amount_of_cookies:[],
    total:0,
    working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


    numofcx: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    },

    numofcookies: function(){

        for(let i=0;i<this.working_hours.length-1;i++){

             this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
             this.total+=this.amount_of_cookies[i]

            
            
        }

        return this.amount_of_cookies.push(this.total)
        

        
        
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
            liEl.textContent=(this.working_hours[i]+this.amount_of_cookies[i]+" cookies");
            ulEl.appendChild(liEl);
        }
        // console.log(liEl);


        let imgEl=document.createElement("img");
        imgEl.setAttribute("src",this.store_image);
        div1El.appendChild(imgEl);



    },


}
seattle.numofcookies();
seattle.render();










let tokyo={

    store_name: "Tokyo store",
    min_num_cus:3,
    max_num_cus:24,   
    avg_num_cookie:1.2,
    store_image:"images/tokyo.jpg",
    amount_of_cookies:[],
    total:0,
    working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


    numofcx: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    },

    numofcookies: function(){

        for(let i=0;i<this.working_hours.length-1;i++){

             this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
             this.total+=this.amount_of_cookies[i]

            
            
        }

        return this.amount_of_cookies.push(this.total)
        

        
        
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
            liEl.textContent=(this.working_hours[i]+this.amount_of_cookies[i]+" cookies");
            ulEl.appendChild(liEl);
        }
        // console.log(liEl);


        let imgEl=document.createElement("img");
        imgEl.setAttribute("src",this.store_image);
        div1El.appendChild(imgEl);



    },


}
tokyo.numofcookies();
tokyo.render();










let Dubai={

    store_name: "Dubai store",
    min_num_cus:11,
    max_num_cus:38,   
    avg_num_cookie:3.7,
    store_image:"images/Dubai.jpg",
    amount_of_cookies:[],
    total:0,
    working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


    numofcx: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    },

    numofcookies: function(){

        for(let i=0;i<this.working_hours.length-1;i++){

             this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
             this.total+=this.amount_of_cookies[i]

            
            
        }

        return this.amount_of_cookies.push(this.total)
        

        
        
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
            liEl.textContent=(this.working_hours[i]+this.amount_of_cookies[i]+" cookies");
            ulEl.appendChild(liEl);
        }
        // console.log(liEl);


        let imgEl=document.createElement("img");
        imgEl.setAttribute("src",this.store_image);
        div1El.appendChild(imgEl);



    },


}
Dubai.numofcookies();
Dubai.render();






let Paris={

    store_name: "Paris store",
    min_num_cus:20,
    max_num_cus:38,   
    avg_num_cookie:2.3,
    store_image:"images/Paris.jpeg",
    amount_of_cookies:[],
    total:0,
    working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


    numofcx: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    },

    numofcookies: function(){

        for(let i=0;i<this.working_hours.length-1;i++){

             this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
             this.total+=this.amount_of_cookies[i]

            
            
        }

        return this.amount_of_cookies.push(this.total)
        

        
        
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
            liEl.textContent=(this.working_hours[i]+this.amount_of_cookies[i]+" cookies");
            ulEl.appendChild(liEl);
        }
        // console.log(liEl);


        let imgEl=document.createElement("img");
        imgEl.setAttribute("src",this.store_image);
        div1El.appendChild(imgEl);



    },


}
Paris.numofcookies();
Paris.render();









let Lima={

    store_name: "Lima store",
    min_num_cus:2,
    max_num_cus:16,   
    avg_num_cookie:4.6,
    store_image:"images/lima.jpg",
    amount_of_cookies:[],
    total:0,
    working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


    numofcx: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    },

    numofcookies: function(){

        for(let i=0;i<this.working_hours.length-1;i++){

             this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
             this.total+=this.amount_of_cookies[i]

            
            
        }

        return this.amount_of_cookies.push(this.total)
        

        
        
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
            liEl.textContent=(this.working_hours[i]+this.amount_of_cookies[i]+" cookies");
            ulEl.appendChild(liEl);
        }
        // console.log(liEl);


        let imgEl=document.createElement("img");
        imgEl.setAttribute("src",this.store_image);
        div1El.appendChild(imgEl);



    },


}
Lima.numofcookies();
Lima.render();







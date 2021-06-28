'use strict';


function stores(store_name,min_num_cus,max_num_cus,avg_num_cookie,store_image){

    this.store_name=store_name;
    this.array_of_stores=["Seattle store","Tokyo store","Dubai store","Paris store","Lima store"]
    this.min_num_cus=min_num_cus;
    this.max_num_cus=max_num_cus;
    this.avg_num_cookie=avg_num_cookie;
    this.store_image=store_image;
    this.num_of_cx=0;
    this.amount_of_cookies=[];
    this.total=0;
    this.working_hours=[' 6:00am  ',' 7:00am  ',' 8:00am  ','9:00am  ','10:00am  ','11:00am  ','12:00pm  ','1:00pm  ','2:00pm  ','3:00pm  ','4:00pm  ','5:00pm  ','6:00pm  ','7:00pm  ',' Daily location total '];
    



}

stores.prototype.numofcx = function(){
    return this.num_of_cx = Math.floor(Math.random() * (this.max_num_cus - this.min_num_cus + 1) + this.min_num_cus);
    
 

}


    

stores.prototype.numofcookies = function(){

    for(let i=0;i<this.working_hours.length-1;i++){

        this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
        this.total+=this.amount_of_cookies[i];

       
       
   }

   this.amount_of_cookies.push(this.total);
   return this.amount_of_cookies;



    

    
    
}
stores.prototype.Table=function(){

    let div1El=document.getElementById(this.store_name);
    console.log(div1El);
    // console.log(articleEl);
    let tableEl=document.createElement('table');
    div1El.appendChild(tableEl);

    // let thEl=document.createElement('th');
    // tableEl.appendChild(thEl)

    
    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);
    
    let tdEl=document.createElement('td');
    trEl.appendChild(tdEl)
    
    for(let i=0;i<this.working_hours.length;i++){

        let thEl=document.createElement('th');
        thEl.textContent=this.working_hours[i];
        trEl.appendChild(thEl);


    }

    for(let i=0;i<this.array_of_stores.length;i++){

        let trEl=document.createElement('tr');
        tableEl.appendChild(trEl);

        let tdEl=document.createElement('td');
        tdEl.textContent=this.array_of_stores[i];
        trEl.appendChild(tdEl);


        for(let i=0;i<this.amount_of_cookies.length;i++){
        let tdEl=document.createElement('td');
        tdEl.textContent=this.amount_of_cookies[i];
        trEl.appendChild(tdEl);

        }

        
        

        

    }

    // for(let i=0;i<this.working_hours.length;i++){

    //     let trEl=document.createElement('tr');
    //     tableEl.appendChild(trEl);
    //     let tdEl=document.createElement('td');


    //     tdEl.textContent=this.array_of_stores[i];
    //     trEl.appendChild(tdEl);

        


    // }


    
    

    




}








let seattle= new stores("Seattle store",23,65,6.3,"images/seattle.jpeg");
let tokyo= new stores("Tokyo store",3,24,1.2,"images/tokyo.jpg");
let Dubai= new stores("Dubai store",11,38,3.7,"images/Dubai.jpg");
let Paris= new stores("Paris store",20,38,2.3,"images/Paris.jpeg");
let Lima= new stores("Lima store",2,16,4.6,"images/lima.jpg");
// console.log(seattle);
console.log(seattle.numofcx());
console.log(seattle.numofcookies());




seattle.Table();


// seattle.numofcookies();
// seattle.numofcx();





// let seattle={

//     store_name: "Seattle store",
//     min_num_cus:23,
//     max_num_cus:65,   
//     avg_num_cookie:6.3,
//     store_image:"images/seattle.jpeg",
//     amount_of_cookies:[],
//     total:0,
//     working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


//     numofcx: function(){
//         let max = Math.floor(this.max_num_cus);
//         let min = Math.ceil(this.min_num_cus);

//         return Math.ceil(Math.random() * (this.max_num_cus - min + 1) + this.max_num_cus)
//     },

//     numofcookies: function(){

//         for(let i=0;i<this.working_hours.length-1;i++){

//             this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
//             this.total+=this.amount_of_cookies[i];
    
           
           
//        }
    
//        return this.amount_of_cookies.push(this.total)



        

        
        
//     },



//     render: function(){
//         let div1El=document.getElementById(this.store_name);
//         let articleEl=document.createElement("article");
//         div1El.appendChild(articleEl);

//         // console.log(div1El);
//         // console.log(articleEl);



//         let h2El=document.createElement("h2");
//         h2El.textContent= this.store_name
//         articleEl.appendChild(h2El);
//         // console.log(h2El);


//         let ulEl=document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         // console.log(ulEl);



        
        
        

//         for(let i=0;i<this.working_hours.length;i++){

//             let liEl=document.createElement("li");
//             liEl.textContent=(this.working_hours[i]+this.amount_of_cookies[i]+" cookies");
//             ulEl.appendChild(liEl);
//         }
//         // console.log(liEl);


//         let imgEl=document.createElement("img");
//         imgEl.setAttribute("src",this.store_image);
//         div1El.appendChild(imgEl);



//     },


// }
// seattle.numofcookies();
// seattle.render();










// let tokyo={

//     store_name: "Tokyo store",
//     min_num_cus:3,
//     max_num_cus:24,   
//     avg_num_cookie:1.2,
//     store_image:"images/tokyo.jpg",
//     amount_of_cookies:[],
//     total:0,
//     working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


//     numofcx: function(){
//         let min = Math.ceil(this.min_num_cus);
//         let max = Math.floor(this.max_num_cus);

//         return Math.floor(Math.random() * (max - min + 1) + min)
//     },

//     numofcookies: function(){

//         for(let i=0;i<this.working_hours.length-1;i++){

//              this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
//              this.total+=this.amount_of_cookies[i]

            
            
//         }

//         return this.amount_of_cookies.push(this.total)
        

        
        
//     },



//     render: function(){
//         let div1El=document.getElementById(this.store_name);
//         let articleEl=document.createElement("article");
//         div1El.appendChild(articleEl);

//         // console.log(div1El);
//         // console.log(articleEl);



//         let h2El=document.createElement("h2");
//         h2El.textContent= this.store_name
//         articleEl.appendChild(h2El);
//         // console.log(h2El);


//         let ulEl=document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         // console.log(ulEl);



        
        
        

//         for(let i=0;i<this.working_hours.length;i++){

//             let liEl=document.createElement("li");
//             liEl.textContent=(this.working_hours[i]+this.amount_of_cookies[i]+" cookies");
//             ulEl.appendChild(liEl);
//         }
//         // console.log(liEl);


//         let imgEl=document.createElement("img");
//         imgEl.setAttribute("src",this.store_image);
//         div1El.appendChild(imgEl);



//     },


// }
// tokyo.numofcookies();
// tokyo.render();










// let Dubai={

//     store_name: "Dubai store",
//     min_num_cus:11,
//     max_num_cus:38,   
//     avg_num_cookie:3.7,
//     store_image:"images/Dubai.jpg",
//     amount_of_cookies:[],
//     total:0,
//     working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


//     numofcx: function(){
//         let min = Math.ceil(this.min_num_cus);
//         let max = Math.floor(this.max_num_cus);

//         return Math.floor(Math.random() * (max - min + 1) + min)
//     },

//     numofcookies: function(){

//         for(let i=0;i<this.working_hours.length-1;i++){

//              this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
//              this.total+=this.amount_of_cookies[i]

            
            
//         }

//         return this.amount_of_cookies.push(this.total)
        

        
        
//     },



//     render: function(){
//         let div1El=document.getElementById(this.store_name);
//         let articleEl=document.createElement("article");
//         div1El.appendChild(articleEl);

//         // console.log(div1El);
//         // console.log(articleEl);



//         let h2El=document.createElement("h2");
//         h2El.textContent= this.store_name
//         articleEl.appendChild(h2El);
//         // console.log(h2El);


//         let ulEl=document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         // console.log(ulEl);



        
        
        

//         for(let i=0;i<this.working_hours.length;i++){

//             let liEl=document.createElement("li");
//             liEl.textContent=(this.working_hours[i]+this.amount_of_cookies[i]+" cookies");
//             ulEl.appendChild(liEl);
//         }
//         // console.log(liEl);


//         let imgEl=document.createElement("img");
//         imgEl.setAttribute("src",this.store_image);
//         div1El.appendChild(imgEl);



//     },


// }
// Dubai.numofcookies();
// Dubai.render();






// let Paris={

//     store_name: "Paris store",
//     min_num_cus:20,
//     max_num_cus:38,   
//     avg_num_cookie:2.3,
//     store_image:"images/Paris.jpeg",
//     amount_of_cookies:[],
//     total:0,
//     working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


//     numofcx: function(){
//         let min = Math.ceil(this.min_num_cus);
//         let max = Math.floor(this.max_num_cus);

//         return Math.floor(Math.random() * (max - min + 1) + min)
//     },

//     numofcookies: function(){

//         for(let i=0;i<this.working_hours.length-1;i++){

//              this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
//              this.total+=this.amount_of_cookies[i]

            
            
//         }

//         return this.amount_of_cookies.push(this.total)
        

        
        
//     },



//     render: function(){
//         let div1El=document.getElementById(this.store_name);
//         let articleEl=document.createElement("article");
//         div1El.appendChild(articleEl);

//         // console.log(div1El);
//         // console.log(articleEl);



//         let h2El=document.createElement("h2");
//         h2El.textContent= this.store_name
//         articleEl.appendChild(h2El);
//         // console.log(h2El);


//         let ulEl=document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         // console.log(ulEl);



        
        
        

//         for(let i=0;i<this.working_hours.length;i++){

//             let liEl=document.createElement("li");
//             liEl.textContent=(this.working_hours[i]+this.amount_of_cookies[i]+" cookies");
//             ulEl.appendChild(liEl);
//         }
//         // console.log(liEl);


//         let imgEl=document.createElement("img");
//         imgEl.setAttribute("src",this.store_image);
//         div1El.appendChild(imgEl);



//     },


// }
// Paris.numofcookies();
// Paris.render();









// let Lima={

//     store_name: "Lima store",
//     min_num_cus:2,
//     max_num_cus:16,   
//     avg_num_cookie:4.6,
//     store_image:"images/lima.jpg",
//     amount_of_cookies:[],
//     total:0,
//     working_hours:['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :','total : '],


//     numofcx: function(){
//         let min = Math.ceil(this.min_num_cus);
//         let max = Math.floor(this.max_num_cus);

//         return Math.floor(Math.random() * (max - min + 1) + min)
//     },

//     numofcookies: function(){

//         for(let i=0;i<this.working_hours.length-1;i++){

//              this.amount_of_cookies[i]=(this.numofcx(this.min_num_cus,this.max_num_cus))*this.avg_num_cookie;
//              this.total+=this.amount_of_cookies[i]

            
            
//         }

//         return this.amount_of_cookies.push(this.total)
        

        
        
//     },



//     render: function(){
//         let div1El=document.getElementById(this.store_name);
//         let articleEl=document.createElement("article");
//         div1El.appendChild(articleEl);

//         // console.log(div1El);
//         // console.log(articleEl);



//         let h2El=document.createElement("h2");
//         h2El.textContent= this.store_name
//         articleEl.appendChild(h2El);
//         // console.log(h2El);


//         let ulEl=document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         // console.log(ulEl);



        
        
        

//         for(let i=0;i<this.working_hours.length;i++){

//             let liEl=document.createElement("li");
//             liEl.textContent=(this.working_hours[i]+this.amount_of_cookies[i]+" cookies");
//             ulEl.appendChild(liEl);
//         }
//         // console.log(liEl);


//         let imgEl=document.createElement("img");
//         imgEl.setAttribute("src",this.store_image);
//         div1El.appendChild(imgEl);



//     },


// }
// Lima.numofcookies();
// Lima.render();







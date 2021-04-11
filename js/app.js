

function setItem(event){
        showBtn .style.display ='none';
        submitBtn.style.display ='none';
        createBtn .style.display ='block';
        resultBtn .style.display ='block';
        output = "";
        const getItem = document.querySelector("#add-food");
        const getNyumber = document.querySelector("#count");
        const startDate = document.querySelector("#date");
        let num = getItem.value;
        let num1 = getNyumber.value;
        let num2 = startDate.value;

        if (num === "" && num1 === "" && num2 === ""){   
            return confirm("please inter number")
        }


        // // compare two dates
        // const startDate = document.querySelector("#date1");
        // const endDate = document.querySelector("#date2");
        // const firstDate = new Date(startDate.value);  // yyy-mm=dd
        // const lastDate = new Date(endDate.value);
        
    
        // if (firstDate.getTime() <= lastDate.getTime()){
        //     let Date2=endDate.value;
            // create new li
            const li = document.createElement("li");

            //create  span add food
            const spanfood = document.createElement("span");
            spanfood.classList.add("task");
            spanfood.textContent = num;

            // create span for input 
            const spanNum = document.createElement("span");
            spanNum.classList.add("num");
            spanNum.textContent = num1;

            // create  span for date
            const spanDate = document.createElement("span");
            spanDate.classList.add("date");
            spanDate.textContent = num2;

            //create span remove
            const spanRemove = document.createElement("span");
            spanRemove.classList.add("Remove");
            spanRemove.textContent = "Remove"

            // add  span to li
            li.appendChild(spanfood);
            li.appendChild(spanNum);
            li.appendChild(spanDate);
            li.appendChild(spanRemove)
        

            // add li to ul

            ul.appendChild(li);

            //  clear value 
            getItem.value = "";
            getNyumber.value = "";
            startDate.value="";
            // endDate.value="";
        //  }else{
        //      confirm("sorry first date must be smaller then last")
        //  }
        
    
            
        
}


function removeItem(event){
    if (event.target.className === "Remove"){
      
        event.target.parentElement.remove();
       }
}


const submit = document.querySelector("button");

const ul = document.querySelector("ul");

submit.addEventListener("click", setItem);
    
ul.addEventListener("click", removeItem);
    

const serch = document.querySelector("#searchId");
serch.addEventListener("keyup", function(event){
    
    let text = serch.value.toLowerCase();
    
    let items = document.querySelectorAll("li");
    for (let item of items){
       let nameFood = item.firstElementChild.textContent.toLocaleLowerCase();
       if (nameFood.indexOf(text) === -1){
           item.style.display = "none"
       }else{
           item.style.display = "block";
       }
    }


})



const createBtn=document.querySelector("#btn-show");
const submitBtn=document.querySelector(".listItem");
const showBtn=document.querySelector(".sp");
const resultBtn=document.querySelector(".listItem");
function buttonCreate(event){
    showBtn .style.display ='block';
    createBtn .style.display ='none';
    resultBtn .style.display ='none';
}

createBtn.addEventListener("click",buttonCreate);



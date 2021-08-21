let count = 0;
// let x = document.getElementById();
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");
// console.log(btns);

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains("increase")){
            count ++;
        }else if(styles.contains("decrease")){
            count --;
        }else{
            count = 0 ;
        }
        if(count>0){
            value.style.color = "green";
        }else if(count<0){
            value.style.color = "red";
        }else{
            value.style.color = "black";
        }
        value.textContent = count;
    });
});
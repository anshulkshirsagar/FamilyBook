var ImageArray=["unnamed.png","unnamed (1).png","download(1).gif","simple-black-whie-smiling-boy-cartoon-69912810.jpeg"];
var NameArray=["Atul","Swapna","Anusha","Anshul"]
var indx=0
function Update(){
    document.getElementById("image1").src=ImageArray[indx];
    document.getElementById("family_member_name").innerHTML=NameArray[indx];
    indx++;
}
let Btns =document.getElementsByClassName("btn");
let HistoryData =document.getElementById("History");
let ResultData =document.getElementById("Result");
for(let i of Btns)
{
 i.onclick = function()
 {
 let BtnText = i.innerText;

 if(BtnText == "=")
 {
   HistoryData.innerText = ResultData.innerText;
   let Result = eval(ResultData.innerText);
   ResultData.innerText = Result;
 }
 else if(BtnText == "C")
  {
     ResultData.innerText = ""
     HistoryData.innerText = ""
    }
    else if(BtnText == "x")
    {
    ResultData.innerText += "*";
    }
    else if(BtnText == "CE")
    {
    ResultData.innerText = ResultData.innerText.slice(0,-1)
    }
    else if(BtnText == "x2")
    { 
    ResultData.innerText = ResultData.innerText**2;
    }
    else
    {
    console.log(BtnText);
    ResultData.innerText += BtnText;
    }
}
}

   

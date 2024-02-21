



function sub() {
  // update score:
  // 1. get the current score
  const currentScoreElement = document.getElementById('ticket-left');
  const currentScoreText = currentScoreElement.innerText;
  const currentScore = parseInt(currentScoreText);
  console.log(currentScore);

  // // 2 .increase the score by 1
  const newScore = currentScore - 1;

  // // 3. show the updated score
  currentScoreElement.innerText = newScore;

 
}


function total() {
  
  const currentScoreElement = document.getElementById('taka');
  const currentScoreText = currentScoreElement.innerText;
  const currentScore = parseInt(currentScoreText);


 const newScore = currentScore + 550;
  currentScoreElement.innerText = newScore;
  
 

}




function total1() {
  
  const currentScoreElement = document.getElementById('cont1');
  const currentScoreText = currentScoreElement.innerText;
  const currentScore = parseInt(currentScoreText);
  const newScore = currentScore + 1;
  currentScoreElement.innerText = newScore;
  console.log(currentScore);

}





function buttonDis1()
 {
  document.getElementById("print1").innerHTML = " Ticket-----------------Economy class------------------$500";
 
  document.getElementById("a1").disabled = true;
  const list = document.getElementById("a1").classList;
  list.add("bg-red-600");

  
 
}
function buttonDis2() {
  document.getElementById("print2").innerHTML = " Ticket-----------------Economy class------------------$500";
  document.getElementById("a2").disabled = true;
  const list = document.getElementById("a2").classList;
  list.add("bg-red-300");
}


function buttonDis3()
 {
  document.getElementById("print3").innerHTML = " Ticket-----------------Economy class------------------$500";
  document.getElementById("b1").disabled = true;
  list.add("bg-red-500");
}

function buttonDis4() {
  document.getElementById("print4").innerHTML = " Ticket-----------------Economy class------------------$500";
  document.getElementById("b2").disabled = true;
  list.add("bg-red-500");
}


function buttonDis5()
 {
  document.getElementById("print5").innerHTML = " Ticket-----------------Economy class------------------$500";
  document.getElementById("c1").disabled = true;
  list.add("bg-red-500");
}
function buttonDis6() {
  document.getElementById("print6").innerHTML = " Ticket-----------------Economy class------------------$500";
  document.getElementById("c2").disabled = true;
  list.add("bg-red-500");
}


function buttonDis7()
 {
  document.getElementById("print7").innerHTML = " Ticket-----------------Economy class------------------$500";
  document.getElementById("d1").disabled = true;
  list.add("bg-red-500");
}

function buttonDis8()
 {
  document.getElementById("print8").innerHTML = " Ticket-----------------Economy class------------------$500";
  document.getElementById("d2").disabled = true;
  list.add("bg-red-500");
}



function displayText() {
  


  const list = document.getElementById("dis").classList;
  list.add("hidden");
  //document.getElementById("save").innerHTML = ;
  const list1 = document.getElementById("save").classList;
  list1.remove("hidden");
}

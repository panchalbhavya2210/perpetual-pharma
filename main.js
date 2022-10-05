let navBarBtn = document.getElementById('navBarBtn');

navBarBtn.onclick = function() {
  let barOne = document.getElementById('barOne');
  let barTwo = document.getElementById('barTwo');
  let barThi = document.getElementById('barThi');
   let navCall = document.getElementById('navCall');
  
  barOne.classList.toggle('barOneMove');
  barThi.classList.toggle('barThiMove');
navCall.classList.toggle('widthNav');
}

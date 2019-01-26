let inputImg;
let statusMsg;
let transferBtn;
let style1;
let style2;
let styleA;
let styleB;

function setup() {
  styleA = document.getElementById('styleA');
  styleB = document.getElementById('styleB');
  statusMsg = document.getElementById('statusMsg');
  inputImg = document.getElementById('inputImg');
  transferBtn = document.getElementById('transferBtn')
  transferBtn.onclick = transferImages;
  style1 = ml5.styleTransfer('models/wave', modelLoaded);
  style2 = ml5.styleTransfer('models/udnie', modelLoaded);
}

function modelLoaded() {
  if(style1.ready && style2.ready){
    statusMsg.innerText = 'Ready!';
  }
}

// Apply the transfer to both images!
function transferImages() {
  statusMsg.innerText = 'Applying Style Transfer...!';
  style1.transfer(inputImg, function(err, result) {
    styleA.src = result.src;
  });
  style2.transfer(inputImg, function(err, result) {
    styleB.src = result.src;
  });
  statusMsg.innerText = 'Done!';
}

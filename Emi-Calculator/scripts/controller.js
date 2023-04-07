window.addEventListener('load',BindEvents);
function BindEvents(){
    document.getElementById('calculate').addEventListener('click',calculate);
}
function calculate(){
    const prin = parseFloat(document.getElementById('prin').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    loanCalculations.prin = prin;
    loanCalculations.rate = rate / (12*100);
    loanCalculations.time = time * 12;
    document.getElementById('emi').innerText = loanCalculations.emi();
    document.getElementById('int').innerText = loanCalculations.int();
    document.getElementById('total').innerText = loanCalculations.total();
}
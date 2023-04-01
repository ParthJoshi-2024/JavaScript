// This is the DOM, which acts as a glue between the view(HTML) and the script(JS logic).
window.addEventListener('load',bindEvents);
function bindEvents(){
    document.getElementById('compute').addEventListener('click',computeIt);

}

function computeIt(){
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    SalaryOperations.basicSalary = basicSalary;
    document.getElementById('hra').innerText = SalaryOperations.hra();
    // innerText puts the value at the place of span tag in the view(HTML).
    document.getElementById('da').innerText = SalaryOperations.da();
    document.getElementById('ta').innerText = SalaryOperations.ta();
    document.getElementById('ma').innerText = SalaryOperations.ma();
    document.getElementById('pf').innerText = SalaryOperations.pf();
    document.getElementById('gs').innerText = SalaryOperations.gs();
    document.getElementById('tax').innerText = SalaryOperations.tax();
    document.getElementById('ns').innerText = SalaryOperations.ns();
}
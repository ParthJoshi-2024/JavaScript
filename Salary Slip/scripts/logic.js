const SalaryOperations = {
    basicSalary : 0,
    hra : function(){
        return this.basicSalary * 0.50;
    },
    ta : function(){
        return this.basicSalary * 0.40;
    },
    da : function(){
        return this.basicSalary * 0.20;
    },
    ma(){
        return this.basicSalary * 0.30;
    },
    pf(){
        return this.basicSalary*0.10;
    },
    gs(){
        return this.basicSalary + this.hra() + this.da() + this.ta() + this.ma();
    },
    tax(){
        return this.gs() * 0.10;
    },
    ns(){
        return this.gs() - this.tax() - this.pf();
    }

}
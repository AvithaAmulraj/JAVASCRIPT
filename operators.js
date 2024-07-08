function add(num1,num2){
        let result = num1+num2;
       console.log(result);
    }
    function sub(num1,num2){
        let result = num1-num2;
       console.log(result);
    }
    function mul(num1,num2){
        let result = num1*num2;
       console.log(result);
    }
    function div(num1,num2){
        let result = num1/num2;
       console.log(result);
    }
    function mod(num1,num2){
        let result = num1%num2;
       console.log(result);
    }
    
    function calculation(num1,num2, callback){
       callback(num1,num2);
    }
    calculation(10,20,add);
    calculation(10,20,sub);
    calculation(10,20,mul);
    calculation(10,20,div);
    calculation(10,20,mod);

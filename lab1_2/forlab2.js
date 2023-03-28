window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        //outputElement.innerHTML = ''
        if (!selectedOperation) {
            
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        //console.log('into something')
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        // console.log('dsdfd')
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }
    document.getElementById("btn_op_sign").onclick = function(){
        if (a==='') return 
        outputElement.innerHTML = (-a)
        a=(-a)
    }
    document.getElementById("btn_op_sqrt").onclick = function(){
        if (a==='') return 
        selectedOperation = 'sqrt'
    }
    document.getElementById("btn_zero").onclick = function(){
        if (a==='') return 
        //selectedOperation = '00'
        
        //selectedOperation = 'sqrt'
        if (b==='')
        {a=a*100
        outputElement.innerHTML = a}
        else
        {b=b*100
        outputElement.innerHTML = b}
    }
    document.getElementById("btn_op_dot").onclick = function()
    {
        if (a==='') return 
        //selectedOperation = '00'
        
        //selectedOperation = 'sqrt'
        if (b==='')
        {a=Number(a)
        outputElement.innerHTML = a}
        else
        {b=Number(b)
        outputElement.innerHTML = b}   
    }
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        
        if (selectedOperation == 'sqrt') 
        {
            console.log('into sqrt operation')
                expressionResult = (+a)**(0.5)
                
                
        }
        else
        {
        if (a === '' || b === '' || !selectedOperation)
            return
        

        
        
        switch(selectedOperation) { 
            case 'x':
                //console.log('x')
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            
            
                }
        }
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a

    }
    };
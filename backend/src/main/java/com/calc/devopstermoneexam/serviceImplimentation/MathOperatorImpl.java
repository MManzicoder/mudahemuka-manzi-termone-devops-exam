package com.calc.devopstermoneexam.serviceImplimentation;

import com.calc.devopstermoneexam.services.MathOperator;
import com.calc.devopstermoneexam.utils.InvalidOperationException;
import org.springframework.stereotype.Service;

@Service
public class MathOperatorImpl implements MathOperator {
    @Override
    public double doMath(double operand1, double operand2, String operation) throws InvalidOperationException {
        if("/".equals(operation) && operand2 == 0.0 ){
            throw new InvalidOperationException("Cannot divide by 0");
        }
        switch (operation){
            case "*":
                return operand1 * operand2;
            case "/":
                return operand1 / operand2;
            case "+":
                return operand1 + operand2;
            case "-":
                return operand1 - operand2;
            case "**":
                return Math.pow(operand1, operand2);
            case "log":
                return operand1 * Math.log10(operand2);
            case "ln":
                return operand1 * Math.log(operand2);
            default:
                throw new RuntimeException("Unknown operation");
        }
    }
}

package com.calc.devopstermoneexam.services;

import com.calc.devopstermoneexam.utils.InvalidOperationException;
import org.springframework.stereotype.Service;

public interface MathOperator {
    public double doMath(double operand1, double operand2, String operation) throws InvalidOperationException;
}

package com.calc.devopstermoneexam.controllers;

import com.calc.devopstermoneexam.dtos.DoMathRequest;
import com.calc.devopstermoneexam.services.MathOperator;
import com.calc.devopstermoneexam.utils.InvalidOperationException;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/calculator")
public class MathController {
    @Autowired
    private MathOperator doMathService;

    @PostMapping("/")
    public Double doMath(@RequestBody DoMathRequest doMathRequest) throws InvalidOperationException {
        return doMathService.doMath(doMathRequest.getOperand1(),doMathRequest.getOperand2(),doMathRequest.getOperation());
    }

}

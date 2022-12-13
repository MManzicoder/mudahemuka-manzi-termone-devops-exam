package com.calc.devopstermoneexam.controllers;

import com.calc.devopstermoneexam.dtos.DoMathRequest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class MathControllerTest {
     @Autowired
     private TestRestTemplate testTemplate;
     private String baseApiURL = "/api/calculator";

    @Test
    public void doMath_Multiply_success(){
     Double fakedResult = 55.0;
        DoMathRequest request = new DoMathRequest(110,0.5,"*");
        Double response = this.testTemplate.postForObject(baseApiURL+"/",request,Double.class);
        assertEquals(fakedResult, response);
    }
    @Test
    public void doMath_Division_success(){
        Double fakedResult = 40.0;
        DoMathRequest request = new DoMathRequest(200,5,"/");
        Double response = this.testTemplate.postForObject(baseApiURL+"/",request,Double.class);
        assertEquals(fakedResult, response);
    }

    @Test
    public void doMath_Subtraction_success(){
        Double fakedResult = 80.0;
        DoMathRequest request = new DoMathRequest(200,120,"-");
        Double response = this.testTemplate.postForObject(baseApiURL+"/",request,Double.class);
        assertEquals(fakedResult, response);
    }

}

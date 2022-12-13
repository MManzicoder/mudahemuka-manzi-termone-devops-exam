package com.calc.devopstermoneexam.services;

import com.calc.devopstermoneexam.serviceImplimentation.MathOperatorImpl;
import com.calc.devopstermoneexam.utils.InvalidOperationException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import static org.junit.jupiter.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
public class MathOperatorImplTest {
    @Mock
    private MathOperator mathOperatorMock;

    @Test
    public void doMath_Division_Fail(){
         Exception exception = assertThrows(InvalidOperationException.class, ()->{
             mathOperatorMock.doMath(100,0,"/");
         });
        assertEquals("Cannot divide by 0", exception.getMessage());
    }

}

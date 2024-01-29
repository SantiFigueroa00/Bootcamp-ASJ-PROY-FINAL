package com.bootcamp.backIntegrador;


import java.util.HashMap;
import java.util.Map;

import org.springframework.validation.BindingResult;

public class ErrorHandler {
	
	public static Map<String, String> validData(BindingResult bindingResult) {
		Map<String, String> errorsMap = new HashMap<String, String>();
		
		bindingResult.getFieldErrors().forEach((error)->{
			String campString = error.getField();
			String msjString = error.getDefaultMessage();
			errorsMap.put(campString,msjString);
		});
		
		return errorsMap;
	}
}

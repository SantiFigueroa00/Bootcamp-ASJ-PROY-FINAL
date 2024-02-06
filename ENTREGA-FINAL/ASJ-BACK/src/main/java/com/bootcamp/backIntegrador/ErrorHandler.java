package com.bootcamp.backIntegrador;


import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ErrorHandler extends ResponseEntityExceptionHandler{
	
	public static Map<String, String> validData(BindingResult bindingResult) {
		Map<String, String> errorsMap = new HashMap<String, String>();
		
		bindingResult.getFieldErrors().forEach((error)->{
			String campString = error.getField();
			String msjString = error.getDefaultMessage();
			errorsMap.put(campString,msjString);
		});
		
		return errorsMap;
	}
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatusCode status, WebRequest request) {

		Map<String, String> errorsMap = new HashMap<String, String>();
		
		ex.getBindingResult().getFieldErrors().forEach(error ->{
			errorsMap.put(error.getField(), error.getDefaultMessage());
		});
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorsMap);
	}
}

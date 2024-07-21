package com.springboot.exceptions;

public class ResourceNotFoundException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	String resourceName;
	String fieldName;
	long fieldvalue;
	
	public ResourceNotFoundException(String resourceName, String fieldName, long fieldvalue) {
        super(String.format("%s not found with %s : %d", resourceName, fieldName, fieldvalue)); // Change %l to %d
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldvalue = fieldvalue;
    }

	public String getResourceName() {
		return resourceName;
	}

	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}

	public String getFieldName() {
		return fieldName;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

	public long getFieldvalue() {
		return fieldvalue;
	}

	public void setFieldvalue(long fieldvalue) {
		this.fieldvalue = fieldvalue;
	}
	
	
	
	

}

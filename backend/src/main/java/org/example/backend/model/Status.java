package org.example.backend.model;

public enum Status {
    AVAILABLE("verfügbar"),
    LEND("ausgeliehen"),
    IN_REPAIR("in Reparatur");

    private final String value;
    Status(String value){
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

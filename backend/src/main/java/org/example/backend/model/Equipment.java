package org.example.backend.model;

import java.util.UUID;

public record Equipment(UUID id, String name, String sku, String category, int stock, Enum<Status> status) {
}

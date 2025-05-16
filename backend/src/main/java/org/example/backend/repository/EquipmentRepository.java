package org.example.backend.repository;

import lombok.Data;
import org.example.backend.model.Equipment;
import org.example.backend.model.Status;
import org.springframework.stereotype.Repository;

import java.util.*;
@Data
@Repository
public class EquipmentRepository {

    private final Map<UUID, Equipment> equipments = new HashMap<>() {{
        UUID uuid1 = UUID.randomUUID();
        put(uuid1, new Equipment(uuid1, "Dell XPS 13 (2022)", "DELL-XPS13", "Laptops", 5, Status.AVAILABLE));
        UUID uuid2 = UUID.randomUUID();
        put(uuid2, new Equipment(uuid2, "Logitech MX Master 3", "LOG-MX3", "Eingabegeräte", 10, Status.AVAILABLE));
        UUID uuid3 = UUID.randomUUID();
        put(uuid3, new Equipment(uuid3, "TP-Link 24-Port Switch", "TPL-SW-24P", "Netzwerktechnik", 1, Status.LEND));
    }};

    public List<Equipment> getAll() {
        return new ArrayList<>(equipments.values());
    }

    public Equipment getByID(String equipmentID) {
        return equipments.get(UUID.fromString(equipmentID));
    }

}

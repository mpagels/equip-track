package org.example.backend.service;

import lombok.Data;

import org.example.backend.model.Equipment;
import org.example.backend.repository.EquipmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Data
@Service

public class EquipmentService {

    private final EquipmentRepository equipmentRepository;

    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    public List<Equipment> getAllEquipment() {
        return equipmentRepository.getAll();
    }

    public Equipment getEquipmentByID(String id) {
        Equipment test =  equipmentRepository.getByID(id);
        System.out.println(test);
        return test;
    }

}

package com.aimockinterview.backend.repository;

import com.aimockinterview.backend.entity.InterviewResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InterviewResultRepository
        extends JpaRepository<InterviewResult, Long> {

    List<InterviewResult> findByUserIdOrderByCompletedAtDesc(Long userId);

    @Query("SELECT COALESCE(MAX(r.id), 0) FROM InterviewResult r")
    Long findMaxId();
}
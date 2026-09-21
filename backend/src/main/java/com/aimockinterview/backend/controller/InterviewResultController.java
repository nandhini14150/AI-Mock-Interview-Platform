package com.aimockinterview.backend.controller;

import com.aimockinterview.backend.entity.InterviewResult;
import com.aimockinterview.backend.repository.InterviewResultRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/results")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class InterviewResultController {

    private final InterviewResultRepository resultRepository;

    public InterviewResultController(
            InterviewResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    // Save completed interview result
    @PostMapping("/save")
    public ResponseEntity<?> saveResult(
            @RequestBody InterviewResult result) {

        if (result.getUserId() == null) {
            return ResponseEntity.badRequest()
                    .body("User ID is required");
        }

        if (result.getCategory() == null ||
                result.getCategory().trim().isEmpty()) {
            return ResponseEntity.badRequest()
                    .body("Category is required");
        }

        if (result.getScore() == null ||
                result.getMaximumScore() == null) {
            return ResponseEntity.badRequest()
                    .body("Score information is required");
        }

        if (result.getMaximumScore() <= 0) {
            return ResponseEntity.badRequest()
                    .body("Maximum score must be greater than 0");
        }

        // Calculate percentage
        int percentage = Math.round(
                (result.getScore() * 100.0f)
                        / result.getMaximumScore()
        );

        result.setPercentage(percentage);

        // Set completion time
        result.setCompletedAt(LocalDateTime.now());

        InterviewResult savedResult =
                resultRepository.save(result);

        return ResponseEntity.ok(
                Map.of(
                        "message", "Interview result saved successfully",
                        "id", savedResult.getId(),
                        "score", savedResult.getScore(),
                        "maximumScore", savedResult.getMaximumScore(),
                        "percentage", savedResult.getPercentage()
                )
        );
    }

    // Get interview history for a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<InterviewResult>> getUserResults(
            @PathVariable Long userId) {

        List<InterviewResult> results =
                resultRepository
                        .findByUserIdOrderByCompletedAtDesc(userId);

        return ResponseEntity.ok(results);
    }
}

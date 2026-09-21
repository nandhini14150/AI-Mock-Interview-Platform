package com.aimockinterview.backend.controller;

import com.aimockinterview.backend.entity.Question;
import com.aimockinterview.backend.repository.QuestionRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/interview")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class InterviewController {

    private final QuestionRepository questionRepository;

    public InterviewController(
            QuestionRepository questionRepository) {

        this.questionRepository =
                questionRepository;
    }

    // ============================
    // ALL QUESTIONS
    // ============================

    @GetMapping("/questions")
    public List<Question> getAllQuestions() {

        return questionRepository.findAll();
    }

    // ============================
    // CATEGORY
    // ============================

    @GetMapping("/questions/category/{category}")
    public List<Question> getQuestionsByCategory(
            @PathVariable String category) {

        return questionRepository
                .findByCategory(category);
    }

    // ============================
    // CATEGORY + TOPIC
    // ============================

    @GetMapping(
            "/questions/category/{category}/topic/{topic}"
    )
    public List<Question> getQuestionsByCategoryAndTopic(
            @PathVariable String category,
            @PathVariable String topic) {

        return questionRepository
                .findByCategoryAndTopic(
                        category,
                        topic
                );
    }

    // ============================
    // CATEGORY + DIFFICULTY
    // ============================

    @GetMapping(
            "/questions/category/{category}/difficulty/{difficulty}"
    )
    public List<Question> getQuestionsByCategoryAndDifficulty(
            @PathVariable String category,
            @PathVariable String difficulty) {

        return questionRepository
                .findByCategoryAndDifficulty(
                        category,
                        difficulty
                );
    }

    // ============================
    // CATEGORY + TOPIC + DIFFICULTY
    // ============================

    @GetMapping(
            "/questions/category/{category}/topic/{topic}/difficulty/{difficulty}"
    )
    public List<Question> getQuestionsByCategoryTopicAndDifficulty(
            @PathVariable String category,
            @PathVariable String topic,
            @PathVariable String difficulty) {

        return questionRepository
                .findByCategoryAndTopicAndDifficulty(
                        category,
                        topic,
                        difficulty
                );
    }
}
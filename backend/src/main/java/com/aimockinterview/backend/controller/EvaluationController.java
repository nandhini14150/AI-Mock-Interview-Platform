package com.aimockinterview.backend.controller;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/evaluation")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class EvaluationController {

    @PostMapping("/evaluate")
    public Map<String, Object> evaluate(
            @RequestBody Map<String, String> request) {

        String question = request.get("question");
        String answer = request.get("answer");

        Map<String, Object> response = new HashMap<>();

        // ==========================================
        // CHECK EMPTY ANSWER
        // ==========================================

        if (answer == null || answer.trim().isEmpty()) {

            response.put("score", 0);
            response.put("correctness", 0);
            response.put("completeness", 0);
            response.put("clarity", 0);
            response.put("technicalAccuracy", 0);

            response.put("status", "Incorrect");

            response.put(
                    "feedback",
                    "No answer was provided. Please attempt the question."
            );

            response.put(
                    "strengths",
                    List.of("No answer provided")
            );

            response.put(
                    "improvements",
                    List.of(
                            "Provide an answer",
                            "Explain the concept clearly",
                            "Include an example if possible"
                    )
            );

            return response;
        }

        // ==========================================
        // CLEAN ANSWER
        // ==========================================

        String cleanAnswer = answer.trim();

        String lowerAnswer =
                cleanAnswer.toLowerCase();

        // ==========================================
        // SCORE COMPONENTS
        // ==========================================

        int correctness = 5;
        int completeness = 5;
        int clarity = 5;
        int technicalAccuracy = 5;

        List<String> strengths =
                new ArrayList<>();

        List<String> improvements =
                new ArrayList<>();

        // ==========================================
        // ANSWER LENGTH
        // ==========================================

        int answerLength =
                cleanAnswer.length();

        if (answerLength >= 30) {
            completeness += 1;
        }

        if (answerLength >= 80) {
            completeness += 1;
        }

        if (answerLength >= 150) {
            completeness += 1;
        }

        if (answerLength >= 250) {
            completeness += 1;
        }

        // ==========================================
        // EXPLANATION WORDS
        // ==========================================

        int explanationPoints = 0;

        String[] explanationWords = {
                "because",
                "therefore",
                "example",
                "used",
                "works",
                "working",
                "difference",
                "advantage",
                "disadvantage",
                "purpose",
                "reason",
                "process"
        };

        for (String word : explanationWords) {

            if (lowerAnswer.contains(word)) {
                explanationPoints++;
            }
        }

        if (explanationPoints >= 1) {
            clarity += 1;
        }

        if (explanationPoints >= 3) {
            clarity += 1;
        }

        // ==========================================
        // TECHNICAL KEYWORDS
        // ==========================================

        String[] technicalWords = {
                "data",
                "algorithm",
                "memory",
                "process",
                "object",
                "class",
                "method",
                "database",
                "query",
                "table",
                "network",
                "system",
                "server",
                "client",
                "stack",
                "queue",
                "array",
                "linked list",
                "tree",
                "graph",
                "cpu",
                "operating system",
                "sql",
                "java",
                "programming"
        };

        int technicalMatches = 0;

        for (String word : technicalWords) {

            if (lowerAnswer.contains(word)) {
                technicalMatches++;
            }
        }

        if (technicalMatches >= 1) {
            technicalAccuracy += 1;
        }

        if (technicalMatches >= 3) {
            technicalAccuracy += 1;
        }

        if (technicalMatches >= 5) {
            technicalAccuracy += 1;
        }

        // ==========================================
        // QUESTION-ANSWER RELEVANCE
        // ==========================================

        if (question != null &&
                !question.trim().isEmpty()) {

            String[] questionWords =
                    question.toLowerCase()
                            .replaceAll("[^a-zA-Z0-9 ]", "")
                            .split("\\s+");

            int relevantWords = 0;

            for (String word : questionWords) {

                if (word.length() > 3 &&
                        lowerAnswer.contains(word)) {

                    relevantWords++;
                }
            }

            if (relevantWords >= 1) {
                correctness += 1;
            }

            if (relevantWords >= 2) {
                correctness += 1;
            }

            if (relevantWords >= 4) {
                correctness += 1;
            }
        }

        // ==========================================
        // SENTENCE STRUCTURE
        // ==========================================

        String[] sentences =
                cleanAnswer.split("[.!?]+");

        if (sentences.length >= 2) {
            clarity += 1;
        }

        if (sentences.length >= 4) {
            clarity += 1;
        }

        // ==========================================
        // LIMIT SCORES TO 10
        // ==========================================

        correctness =
                Math.min(correctness, 10);

        completeness =
                Math.min(completeness, 10);

        clarity =
                Math.min(clarity, 10);

        technicalAccuracy =
                Math.min(technicalAccuracy, 10);

        // ==========================================
        // OVERALL SCORE
        // ==========================================

        int score =
                Math.round(
                        (correctness
                                + completeness
                                + clarity
                                + technicalAccuracy)
                                / 4.0f
                );

        // ==========================================
        // STRENGTHS
        // ==========================================

        if (correctness >= 7) {

            strengths.add(
                    "Answer is relevant to the question"
            );

        } else {

            improvements.add(
                    "Focus more directly on the question"
            );
        }

        if (completeness >= 7) {

            strengths.add(
                    "Answer contains sufficient explanation"
            );

        } else {

            improvements.add(
                    "Add more explanation and important details"
            );
        }

        if (clarity >= 7) {

            strengths.add(
                    "Answer is reasonably clear"
            );

        } else {

            improvements.add(
                    "Explain the answer in a clearer structure"
            );
        }

        if (technicalAccuracy >= 7) {

            strengths.add(
                    "Includes relevant technical concepts"
            );

        } else {

            improvements.add(
                    "Include more relevant technical concepts"
            );
        }

        // ==========================================
        // EXAMPLE CHECK
        // ==========================================

        if (lowerAnswer.contains("example")) {

            strengths.add(
                    "Provides an example or practical explanation"
            );

        } else {

            improvements.add(
                    "Add a practical example when appropriate"
            );
        }

        // ==========================================
        // STATUS
        // ==========================================

        String status;
        String feedback;

        if (score >= 8) {

            status = "Excellent";

            feedback =
                    "Your answer is well explained and covers the main points. "
                    + "You demonstrated good understanding of the topic.";

        } else if (score >= 6) {

            status = "Good";

            feedback =
                    "Your answer shows a reasonable understanding of the topic. "
                    + "Add more technical details and examples to make it stronger.";

        } else if (score >= 4) {

            status = "Needs Improvement";

            feedback =
                    "Your answer shows some understanding, but it needs more "
                    + "explanation, relevant concepts, and supporting details.";

        } else {

            status = "Poor";

            feedback =
                    "Your answer needs significant improvement. "
                    + "Try to explain the concept clearly and include the important technical points.";
        }

        // ==========================================
        // RESPONSE
        // ==========================================

        response.put("score", score);

        response.put(
                "correctness",
                correctness
        );

        response.put(
                "completeness",
                completeness
        );

        response.put(
                "clarity",
                clarity
        );

        response.put(
                "technicalAccuracy",
                technicalAccuracy
        );

        response.put(
                "status",
                status
        );

        response.put(
                "feedback",
                feedback
        );

        response.put(
                "strengths",
                strengths
        );

        response.put(
                "improvements",
                improvements
        );

        return response;
    }
}
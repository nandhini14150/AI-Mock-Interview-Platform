package com.aimockinterview.backend.repository;

import com.aimockinterview.backend.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository
        extends JpaRepository<Question, Long> {

    List<Question> findByCategory(String category);

    List<Question> findByCategoryAndTopic(
            String category,
            String topic
    );

    List<Question> findByCategoryAndDifficulty(
            String category,
            String difficulty
    );

    List<Question> findByCategoryAndTopicAndDifficulty(
            String category,
            String topic,
            String difficulty
    );
}
package com.aimockinterview.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;

    private String topic;

    @Column(length = 1000)
    private String question;

    @Column(length = 20)
    private String difficulty;

    public Question() {
    }

    public Question(
            String category,
            String topic,
            String question,
            String difficulty) {

        this.category = category;
        this.topic = topic;
        this.question = question;
        this.difficulty = difficulty;
    }

    public Long getId() {
        return id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }
}
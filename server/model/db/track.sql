CREATE TABLE track
(
    track_id INT PRIMARY KEY AUTO_INCREMENT,
    artist_name VARCHAR(150),
    track_name VARCHAR(100),
    tag_id INT,
    track_year INT,
    track_length INT,
    likes INT,
    FOREIGN KEY (tag_id) REFERENCES Tag (id)
);
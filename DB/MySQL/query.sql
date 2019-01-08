-- users
CREATE TABLE joy.users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatar LONGBLOB,
  PRIMARY KEY(id),
  UNIQUE INDEX email_UNIQUE (email ASC))
  COMMENT= 'User information'
  DEFAULT CHARSET = utf8
  ENGINE=InnoDB;

-- insert users
INSERT INTO joy.users (name, email, password) VALUES ('guest', 'guest@guest.com', 'guest');
INSERT INTO joy.users (name, email, password) VALUES ('guest2', 'guest2@guest.com', 'guest2');


-- comments
CREATE TABLE joy.comments (
  id INT NOT NULL AUTO_INCREMENT,
  commenter INT NOT NULL,
  comment VARCHAR(100) NOT NULL,
  PRIMARY KEY(id),
  INDEX commenter_idx (commenter ASC),
  CONSTRAINT commenter
  FOREIGN KEY (commenter)
  REFERENCES joy.users (id)
  ON DELETE CASCADE
  ON UPDATE CASCADE)
  COMMENT = 'Comments'
  DEFAULT CHARSET=utf8
  ENGINE=InnoDB;


-- instructor
CREATE TABLE joy.instructors (
  id INT NOT NULL AUTO_INCREMENT,
  mainUrl VARCHAR(255),
  avatar LONGBLOB,
  lectures INT NOT NULL,
  PRIMARY KEY(id),
  CONSTRAINT lectures
  FOREIGN KEY (lectures)
  REFERENCES joy.lectures (id)
  ON DELETE CASCADE
  ON UPDATE CASCADE)
  COMMENT = 'Instructors'
  DEFAULT CHARSET=utf8
  ENGINE=InnoDB;

-- lectures
CREATE TABLE joy.lectures (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(1000) NOT NULL,
  instructor INT NOT NULL,
  free BOOL NOT NULL DEFAULT true,
  screenshot LONGBLOB,
  PRIMARY KEY(id),
  CONSTRAINT instructor
  FOREIGN KEY (instructor)
  REFERENCES joy.instructors (id)
  ON DELETE CASCADE
  ON UPDATE CASCADE)
  COMMENT = 'Lectures'
  DEFAULT CHARSET=utf8
  ENGINE=InnoDB;


-- insert lectures
INSERT INTO joy.lectures (instructor, title, url, free) VALUES ('nicolas', '[초보자 전용 풀스택] 유튜브 클론 코딩', 'https://academy.nomadcoders.co/p/javascript-fullstack-from-zero-to-hero', false);

/* drop all tables */
SET foreign_key_checks = 0;
DROP TABLE CommentCourse;
DROP TABLE CommentInstructor;
DROP TABLE CommentLecture;
DROP TABLE comments;
DROP TABLE CourseHashtag;
DROP TABLE CourseLecture;
DROP TABLE courses;
DROP TABLE hashtags;
DROP TABLE instructors;
DROP TABLE LectureHashtag;
DROP TABLE InstructorHashtag;
DROP TABLE lectures;
DROP TABLE users;
DROP TABLE Follow;
DROP TABLE PostHashtag;
DROP TABLE posts;
DROP TABLE topics;
DROP TABLE instructors_topics;
DROP TABLE instructorTopic;
DROP TABLE LectureTopic;
DROP TABLE lectures_instructors;
DROP TABLE lectures_topics;
SET foreign_key_checks = 1;

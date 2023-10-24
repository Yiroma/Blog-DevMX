CREATE TABLE
  `user` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(45) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `hashedPassword` VARCHAR(255) NOT NULL,
    `img` VARCHAR(255) NULL
  );

INSERT INTO
  `user` (
    `id`,
    `username`,
    `email`,
    `hashedPassword`,
    `img`
  )
VALUES
  (
    1,
    'admin',
    'admin@example.com',
    '$argon2id$v=19$m=65536,t=5,p=1$HIBnfUUNT2e6WJAdrMAxZg$UmZ5Et4qTzOdkCraqiU9opvQN9TdQmjc+oIL9lFPIQU',
    'https://randomuser.me/api/portraits/med/men/75.jpg'
  ),
  (
    2,
    'yiroma',
    'yiromaric@gmail.com',
    '$argon2id$v=19$m=65536,t=5,p=1$Tys1Lo1cZcYZWeHfuyz6pQ$7zdPez1DQmXjUne72FxquznmjmshAEnSLYY6OPJnZuw',
    '/uploads/images/yiroma-profile-300x300.png'
  );

CREATE TABLE
  `post` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `desc` VARCHAR(3000) NOT NULL,
    `cat` VARCHAR(55) NOT NULL,
    `img` VARCHAR(255) NOT NULL,
    `date` DATETIME NOT NULL,
    `user_id` INT NOT NULL,
    INDEX `user_id_index` (`user_id` ASC) VISIBLE,
    CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );

INSERT INTO
  `post` (
    `id`,
    `title`,
    `desc`,
    `cat`,
    `img`,
    `date`,
    `user_id`
  )
VALUES
  (
    1,
    'titre article Actu',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'actu',
    'https://picsum.photos/id/48/200/300',
    '2023-10-20 10:33:00',
    1
  ),
  (
    2,
    'titre article Event',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'event',
    'https://picsum.photos/id/46/200/300',
    '2023-10-20 10:33:00',
    1
  ),
  (
    3,
    'Titre article Tip&Atuce',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'tips',
    'https://picsum.photos/id/52/200/300',
    '2023-10-20 10:33:00',
    1
  ),
  (
    4,
    'Titree article JOB',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'job',
    'https://picsum.photos/id/50/200/300',
    '2023-10-20 10:33:00',
    1
  );
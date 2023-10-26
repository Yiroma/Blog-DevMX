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
    'Néo',
    'admin@example.com',
    '$argon2id$v=19$m=65536,t=5,p=1$HIBnfUUNT2e6WJAdrMAxZg$UmZ5Et4qTzOdkCraqiU9opvQN9TdQmjc+oIL9lFPIQU',
    '/uploads/images/admin.jpeg'
  ),
  (
    2,
    'Yiroma',
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
    'Titre Actu',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'actu',
    'https://picsum.photos/id/48/200/300',
    '2023-10-20 10:30:00',
    1
  ),
  (
    2,
    'Titre Actu 2',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'actu',
    'https://picsum.photos/id/49/200/300',
    '2023-10-21 10:31:00',
    2
  ),
  (
    3,
    'Titre Actu 3',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'actu',
    'https://picsum.photos/id/50/200/300',
    '2023-10-22 10:31:00',
    1
  ),
  (
    4,
    'Titre Event 1',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'event',
    'https://picsum.photos/id/51/200/300',
    '2023-10-20 10:33:00',
    1
  ),
  (
    5,
    'Titre Event 2',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'event',
    'https://picsum.photos/id/52/200/300',
    '2023-10-21 10:33:00',
    2
  ),
  (
    6,
    'Titre Event 3',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'event',
    'https://picsum.photos/id/53/200/300',
    '2023-10-22 10:33:00',
    1
  ),
  (
    7,
    'Titre Event 4',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'event',
    'https://picsum.photos/id/54/200/300',
    '2023-10-23 10:33:00',
    2
  ),
  (
    8,
    'Titre Tip&Atuce 1',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'tips',
    'https://picsum.photos/id/55/200/300',
    '2023-10-20 10:33:00',
    1
  ),
  (
    9,
    'Titre Tip&Atuce 2',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'tips',
    'https://picsum.photos/id/56/200/300',
    '2023-10-21 10:33:00',
    2
  ),
  (
    10,
    'Titre Tip&Atuce 3',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'tips',
    'https://picsum.photos/id/57/200/300',
    '2023-10-22 10:33:00',
    1
  ),
  (
    11,
    'Titree JOB 1',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'job',
    'https://picsum.photos/id/58/200/300',
    '2023-10-20 10:33:00',
    1
  ),
  (
    12,
    'Titree JOB 2',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'job',
    'https://picsum.photos/id/58/200/300',
    '2023-10-21 10:33:00',
    2
  ),
  (
    13,
    'Titree JOB 3',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam natus blanditiis, tempora distinctio suscipit temporibus perspiciatis ducimus doloribus sed officia qui a ullam sit nemo, illum reiciendis numquam quibusdam maiores eius? Neque eligendi laboriosam minus labore nihil odit repellendus. Architecto cupiditate qui minus nesciunt sapiente quam repudiandae asperiores beatae recusandae, aliquid dolor iste accusantium eveniet fuga laboriosam esse iusto quo deleniti! Iste quas alias ullam, accusamus commodi natus vel ad nihil amet quis voluptate est perferendis quos dolores nostrum explicabo quia ab neque rerum. Ullam aut alias impedit a, beatae excepturi! Nesciunt reprehenderit, dolores aut aspernatur illo quidem a.',
    'job',
    'https://picsum.photos/id/58/200/300',
    '2023-10-22 10:33:00',
    1
  );
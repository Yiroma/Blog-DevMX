SELECT
    post.id,
    `title`,
    `desc`,
    `cat`,
    post.img AS postImg,
    `date`,
    `user_id`,
    `username`,
    u.img AS userImg
FROM
    post
    INNER JOIN user AS u ON u.id = post.user_id;

SELECT
    *
FROM
    post
    INNER JOIN user AS u ON u.id = post.user_id;
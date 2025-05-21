"use strict";

const BlogPost = require("../models/blogPostModel");
const BlogCategory = require("../models/blogCategoryModel");
const User = require("../models/userModel");

const namesArray = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
  "Katie",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
];
const surnamesArray = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
];

const getRandomDate = () => {
  const today = new Date();
  const randomYear =
    Math.floor(Math.random() * (today.getFullYear() - 2010 + 1)) + 2010;
  const randomMonth =
    randomYear === today.getFullYear()
      ? Math.floor(Math.random() * (today.getMonth() + 1))
      : Math.floor(Math.random() * 12);
  const randomDay =
    randomYear === today.getFullYear() && randomMonth === today.getMonth()
      ? Math.floor(Math.random() * today.getDate()) + 1
      : Math.floor(Math.random() * 28) + 1;

  return new Date(randomYear, randomMonth, randomDay);
};

module.exports = async () => {
  await User.deleteMany().then(() => console.log(" - User Deleted All"));
  await BlogCategory.deleteMany().then(() =>
    console.log(" - BlogCategory Deleted All"),
  );
  await BlogPost.deleteMany().then(() =>
    console.log(" - BlogPost Deleted All"),
  );

  let users = [];

  for (let i = 1; i <= 500; i++) {
    let newUser = {};
    newUser = {
      username: namesArray[i % 15] + surnamesArray[i % 15] + i.toString(),
      email: namesArray[i % 15] + i.toString() + "@test.com",
      password: "aA*123456",
      firstName: namesArray[i % 15] + i.toString(),
      lastName: surnamesArray[i % 15] + i.toString(),
      isAdmin: false,
      isActive: Boolean(i % 10),
      createdAt: getRandomDate(),
    };

    users.push(newUser);
  }

  await User.create([
    {
      username: "admin",
      email: "admin@test.com",
      password: "aA*123456",
      firstName: "adminF",
      lastName: "adminL",
      isAdmin: true,
      isActive: true,
    },
    ...users,
  ]);
  users = await User.find({});

  function getRandomUniqueIds(key) {
    const uniqueIds = [];
    const filteredUsers = users.filter((user, index) => index !== key);

    while (uniqueIds.length < 25) {
      const randomIndex = Math.floor(Math.random() * 500);
      const randomUser = filteredUsers.at(randomIndex);

      if (!uniqueIds.includes(randomUser._id.toString()))
        uniqueIds.push(randomUser._id.toString());
    }
    return uniqueIds;
  }

  const categories = [
    "World",
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Politics",
    "Science",
    "Health",
    "Style",
    "Travel",
  ];

  const images = [
    "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/04/05/01/16/food-2203732_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/11/14/20/18/typewriter-210640_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/02/01/21/16/chalkboard-620316_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/10/09/14/00/vegetable-juices-1725835_1280.jpg",
    "https://geekflare.com/wp-content/uploads/2016/04/featured-image-generator.jpg",
  ];

  let n = 0;
  for (let category of categories) {
    const blogCategory = await BlogCategory.create({
      name: category,
    });

    for (let c = 1; c < 49; c++) {
      const abc = getRandomUniqueIds(n);

      const newBlog = {
        userId: users.at(n)._id,
        blogCategoryId: blogCategory._id,
        title: `Sample ${category} Post -${c}`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate quaerat harum quos quis atque tenetur voluptatem quod exercitationem, neque aliquam libero temporibus sint odio ratione sed, officia dolorum ad.
      Sit ab sint quae facere nam autem modi exercitationem, accusantium alias in inventore optio, ratione impedit earum culpa eveniet perferendis unde. Nihil atque, tempore ullam at soluta rerum natus voluptatibus?
      Error, labore aliquid delectus incidunt odio nostrum. Perferendis fuga ut animi corporis, beatae quibusdam porro vel iure exercitationem provident id deleniti nostrum eos unde possimus, quas ipsam non error voluptas.
      Explicabo cumque quaerat ad, placeat rem autem consequatur, voluptatum sit iste sapiente dolore natus est, unde sunt! Aperiam at hic nisi nihil deserunt et. Exercitationem aperiam dicta facilis obcaecati recusandae?
      Aliquid quam doloribus alias suscipit, atque nostrum magnam neque accusantium soluta eum iure distinctio fugiat inventore nam velit non sit maxime nulla minus at! Excepturi voluptas quae aliquam perferendis accusantium!
      Explicabo qui fugit inventore omnis veniam adipisci dolorum atque unde, reiciendis saepe odio sit perspiciatis voluptates dolores quis similique neque ratione obcaecati! Vero ipsa, delectus beatae reprehenderit eum inventore recusandae.
      Natus, vero itaque fugiat architecto officiis nisi ducimus cupiditate et placeat voluptas excepturi? Odio pariatur blanditiis velit maiores aliquam rem illo suscipit vel atque architecto. Voluptas eaque totam asperiores perspiciatis?
      Mollitia, incidunt. Molestiae delectus, distinctio officiis et sequi iusto ducimus. Sequi mollitia consequatur facilis enim sapiente minus possimus neque laborum, iure, sint dolore accusantium esse in aliquid. Dolorem, deserunt sint.
      Eos temporibus aliquam repudiandae ducimus nam asperiores explicabo accusamus in, recusandae doloremque illum voluptates atque, dolor numquam omnis iusto, esse praesentium odio ad fuga mollitia voluptate? Quis odio quasi cum!
      Odit blanditiis ducimus corrupti ullam eos impedit maxime laudantium beatae quibusdam! Sapiente quasi dicta fugiat est cumque harum voluptatibus quo alias laudantium, dolore nobis numquam. Voluptate eveniet vero sequi asperiores.`,
        isPublished: Boolean(c % 8),
        createdAt: getRandomDate(),
        imageUrl: images.at(c % 7),
        likedUsers: abc,
        visitedUsers: abc,
      };
      await BlogPost.create(newBlog);
      n = n + 1;
    }
  }

  console.log("* Synchronized *");
};

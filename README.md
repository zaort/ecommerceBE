# E-Commerce Back End

## Description

This is a back end for an e-commerce website that uses the latest technologies to enable businesses to compete with other e-commerce companies. The application is built using Express.js and Sequelize to interact with a MySQL database.

## Table of Contents

- [Installation](#installation)
- [Walkthrough Video](#walkthrough-video)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To get started with the application, follow: these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using npm install.
3. Create a .env file in the root directory of the project and add your MySQL username, password, and database name as environment variables.
4. Run the schema and seed commands to set up the database with test data.
5. Start the application using npm start.

## Walkthrough Video

[- Walkthrough video link](https://drive.google.com/file/d/1UaXayw3cIVRs9Qfr0Ng9q_DoCfxHDgaa/view)


---bash---
# Tests
To test the application, you can perform the following tests:

1. GET All Categories: Use Insomnia to send a GET request to /api/categories and verify that all categories are returned in JSON format.

2. GET Single Category: Use Insomnia to send a GET request to /api/categories/:id (replace :id with a valid category ID) and verify that the specific category is returned in JSON format.

3. POST New Category: Use Insomnia to send a POST request to /api/categories with the required data and verify that the new category is created in the database.

4. PUT Update Category: Use Insomnia to send a PUT request to /api/categories/:id (replace :id with a valid category ID) with the updated data and verify that the category is updated in the database.

5. DELETE Category: Use Insomnia to send a DELETE request to /api/categories/:id (replace :id with a valid category ID) and verify that the category is deleted from the database.

Repeat similar tests for products and tags routes.

## Usage

After starting the application, you can use tools like Insomnia or Postman to interact with the API routes. Here are the available routes:
- GET /api/categories: Get all categories.
- GET /api/categories/:id: Get a single category by ID.
- POST /api/categories: Create a new category.
- PUT /api/categories/:id: Update a category by ID.
- DELETE /api/categories/:id: Delete a category by ID.
Similar routes are available for products and tags.

## License
This project is licensed under the MIT License

## Contributing

Contributions are welcome! Here are some guidelines:

- Fork the repository.
- Create your feature branch: git checkout -b feature/my-feature.
- Commit your changes: git commit -am 'Add my feature'.
- Push to the branch: git push origin feature/my-feature.
- Submit a pull request.

## Questions 
If you have any questions or need further assistance, feel free to reach out.

GitHub: [zaort](https://github.com/zaort)
email: [czafra.ortega@gmail.com](mailto:czafra.ortega@gmail.com)

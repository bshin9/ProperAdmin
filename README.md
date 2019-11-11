# ProperAdmin
This is our fourth phase of the e-commerce project. We created an admin app using React to create what the administrator would see on their side rather than what the client would see. This is a simple application that connects to our MySQL database using the C# server. It will just retrieve basic product information and allow for us to add, edit, view, and delete products.

### Usage

Start by cloning the repo<br>
`git clone https://github.com/bshin9/ProperAdmin`

Install needed modules in the root admin-app<br>
`npm install`

Run the app<br>
`npm start`

Make sure to install the C# extension if you're using VSCode<br>

Next, go into the ProductsApi through another terminal and run the server<br>
`dotnet run`

### Functional Diagram
<img width="1440" alt="Screen Shot 2019-11-09 at 11 35 07 PM" src="https://user-images.githubusercontent.com/52217063/68538904-a3926e00-0349-11ea-81a4-9f2ab43cc58d.png">

### CRUD METHOD

#### ADD

![Create Giphy](./Design/ADD.gif)

#### UPDATE

![Update Giphy](./Design/UPDATED.gif)

#### DELETE
![Delete Giphy](./Design/DELETE.gif)

### Author
Brian Shin

### LICENSE
[MIT](https://github.com/bshin9/ProperAdmin/blob/master/LICENSE)

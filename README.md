<h2>Summary</h2>
This project is a clone of the NoBroker platform, designed to facilitate property transactions between buyers and sellers without the need for brokers. The system allows users to register, log in, and manage property listings with specific functionalities based on their role. It leverages a modern tech stack including React for the frontend, Node.js for the backend, and MongoDB for the database.

<h2>Functionality</h2>
<h3>User Registration and Login</h3> 
Registration: Users can sign up by providing their first name, last name, email, role (buyer or seller), mobile number, and password. The registration details are stored in a MongoDB database.
Login: Users can log in using their registered email and password.
<h3>Roles and Permissions</h3>
Sellers:
Can add property listings with detailed information including flat number, address, city, pincode, state, number of bedrooms, bathrooms, rent, and nearby amenities such as hospitals and schools.
Can view and filter property listings based on city or rent.
Buyers:
Cannot add property listings.
Can view and filter property listings based on city or rent.
<h3>Property Listings</h3>
View Properties: Both buyers and sellers can see all property posts.
Filter Properties: Users can filter property listings by city or rent to find properties that meet their criteria.

<h2>Technologies Used</h2>
Frontend: React
Backend: Node.js, Express.js
Database: MongoDB

<h2>How It Works</h2>
Registration:
Users register by entering their details including role (buyer or seller).
Login:
Users log in using their email and password.
Sellers Add Property:
Sellers can add new property listings by providing necessary details.
View and Filter Properties:
Both buyers and sellers can view all listed properties.
Users can filter properties by city and rent to narrow down their search.

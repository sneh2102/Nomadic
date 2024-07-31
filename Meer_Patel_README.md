# Assignment - 3

- _Date created_: 30 July 2024
- _Last modification date_: 30 July 2024
- _Group project URL_: https://git.cs.dal.ca/snehp/csci-5709-grp-10
- _Group project personal URL_: https://git.cs.dal.ca/snehp/csci-5709-grp-10/-/tree/meer?ref_type=heads

## Tutorial and Assignment Repositories

- _Tutorial Repository URL_: https://git.cs.dal.ca/meer/csci-5709-tutorials
- _Assignment Repository URL_: https://git.cs.dal.ca/meer/csci-5709-assignments

## Deployed frontend on Netlify

- _Assignment-3 frontend URL_ : https://csci-5709-g10.netlify.app/

## Deployed backend on Cloud run

- _Assignment-3 backend URL_ : https://backend-qhycy7kvoa-uc.a.run.app

## Authors

- [Meer Kamleshkumar Patel](mr418607@dal.ca)

## Setup and Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [NodeJS](https://nodejs.org/en) `v16.x`
- [npm](https://www.npmjs.com/) `v9.x`
  OR
- [yarn](https://www.npmjs.com/) `v1.x`

## Getting Started

### Languages and Frameworks Used

```
1. React
2. Node and npm
3. Typescript
```

```
Libraries Used
1) Material UI
2) Tailwind css
3) Chakra UI
4) Axios
5) react-hook-form
```

```
Database
1) Postgres
```

### Installation steps

Follow these steps to set up and run the project locally.

#### 1. Clone the Repository

Clone with HTTPS:

```bash
 git clone https://git.cs.dal.ca/snehp/csci-5709-grp-10.git
```

OR

Clone with SSH:

```bash
git clone git@git.cs.dal.ca:snehp/csci-5709-grp-10.git
```

### Installation for Frontend

#### 1. Navigate to the frontend directory

```bash
cd csci-5709-grp-10/frontend
```

#### 2. Install required dependencies

```bash
npm install
```

OR

```bash
yarn
```

#### 3. Run the project

```bash
npm run dev
```

Open your web browser and navigate to http://localhost:5173.

### Installation for Backend

#### 1. open another terminal

```bash
cd csci-5709-grp-10/backend
```

#### 2. Create .env file and add these fields with its value

```bash
DATABASE_URL=
JWT_SECRET =
MAIL_USERNAME =
MAIL_PASSWORD =
MAIL_HOST=
```

#### 3. Install dependencies

```bash
npm install
```

OR

```bash
yarn
```

#### 4. Start the backend development server

```bash
npm run dev
```

OR

```bash
yarn dev
```

- Server will start on [http://localhost:8000](http://localhost:8000).

## Built With

- [Node.js](https://nodejs.org/en) - Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

- [React.js](https://react.dev/) - React.js is a popular JavaScript library for building user interfaces.

## External Dependencies

- [express](https://www.npmjs.com/package/express) - npm package that provide small, robust tooling for HTTP servers, making it a great solution for single page applications, websites, hybrids, or public HTTP APIs.
- [Material UI](https://material-ui.com/) - Material UI is a popular React UI framework that provides pre-built components and styling for creating modern and responsive user interfaces.
- [Chakra UI](https://chakra-ui.com/) - Chakra UI is a simple and modular component library for building React applications.
- [Axios](https://www.npmjs.com/package/axios) Axios is JS library used for making HTTP requests from the browser or Node.js. It provides an easy-to-use API and supports features like request and response interception, automatic JSON parsing, and error handling.
- [React hook form](https://react-hook-form.com/) React Hook Form is a lightweight library for managing form state in React. It provides an intuitive API for handling form validation, error messages, and form submission.
- [Prisma ORM](https://www.prisma.io/) - Prisma is an open-source database toolkit that provides an Object-Relational Mapping (ORM) layer for Node.js and TypeScript.
- [Postgres](https://www.postgresql.org/) - Postgres is a powerful open-source relational database management system.

## Tools and Technology used

- Vite - Javascirpt bundler to build frontend artifacts [1].
- Netlify - Hosting frontend artifacts [2].
- Docker - Container technology to ship backend images [3].
- AWS RDS - Managed database service [4]
- GCP Cloud Run - Deploying backend docker containers [5].
- GCP Cloud Build - Running backed CI CD pipeline [6].
- GCP Artifact Registry - To store backend docker images [7].

## Individual Feature Details

### Feature Developed

Create booking, booking history and recommendations.

Directions:

1. At first you will see all the tour package added from the admin side.
2. Click on the individual tour package, there you can see the whole tour package in detail. Click on Book your adventure now.
3. Enter the number of peoples you want to book for and click on Submit booking, after successfull booking, it will redirect to history page.
4. Click on the show details button, it will show the complete description of the booking.
5. click on the notes icon to add memories of the trip.
6. click on the review button to add review of the trip

### Related Tasks

1. Display Booking History

   - Display the user's tour booking history card having location, add notes button and review button in carousel form

2. Create booking

   - Create the booking of the tour selected by the user

3. Display detailed booking information

   - Based on the booking done by the users, Modal shows the detailed information about the tour bookings like number of peoples, total cost, duration, accomodation details etc.

4. Add/Edit notes of the particular tour
   - User can add or edit the memories related to the specific tour

### Files Created

#### Backend

1. Controllers

- backend/src/controllers/bookings.ts
  - This file contains the logic of create booking, get all bookings, get bookings of a particular user and update booking

2. Prisma

- backend/prisma/schema.prisma

  - This file contains the schema of booking tour which includes all the details of booking like number of peoples, total cost, tour package detail, memeories of the trip

3. Routes

- backend/src/routes/bookingRoute.ts
  - The routes for booking tour contains the create booking, get all bookings, get particular tour booking of the user, update tour booking

#### Frontend

- frontend/src/components/history/UserHistory.tsx

  - This file contains the frontend code for the user tour booking history carousal.

- frontend/src/components/history/AddHistoryNotesModal.tsx

  - This file contains the frontend code for the model to add or edit the notes of the trip

- frontend/src/components/history/UserHistoryDetailsModal.tsx

  - This file contains the frontend code for the pop-up of the booked tour detail page that contains detailed information.

- frontend/src/components/history/Recommendations.tsx

  - This file contains the frontend code for the recommended tours based on their previous choice

- frontend/src/components/history/BookingForm.tsx

  - This file contains the frontend code for the booking of the tour,

- frontend/src/App.css

  - This file contains the styling related to booking history and recommendation card.

### Integration Instructions

- A .env file is created which has the path VITE_BASE_API_URL/api/v1/booking (GET,POST, PATCH). This url is used in the frontend file to create booking, retrive bookings, retrive the bookings of loged in user, update booking to add memories of the trip.
- The backend(server.ts) receives this request and according to the mentioned route, sends a request to the database.

## Sources used

```
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]
  profile Profile?
}
```

- This code is taken from [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql) official docs. From this code snippet, I got the idea of how to define the schema of the table .

```
async function main() {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(allUsers, { depth: null })
}
```

- This code is taken from [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql) official docs. From this code snippet, I got the idea of how to query the data from the table .

## References

[1] “Vite,” vitejs. [Online]. Available: https://vitejs.dev/. [Accessed: 30-Jul-2024]
[2] “Scale & Ship Faster with a composable web architecture,” Netlify. [Online]. Available: https://www.netlify.com/. [Accessed: 30-Jul-2024]
[3] “Accelerated Container Application Development,” Docker, 08-Jul-2024. [Online]. Available: https://www.docker.com/. [Accessed: 30-Jul-2024]
[4] Managed SQL database - amazon relational database service (RDS) - AWS. [Online]. Available: https://aws.amazon.com/rds/. [Accessed: 30-Jul-2024]
[5] “Cloud run,” Google. [Online]. Available: https://cloud.google.com/run. [Accessed: 30-Jul-2024]
[6] “Cloud Build Serverless CI/CD Platform.” Google Cloud, [Online]. Available: https://cloud.google.com/build?hl=en. [Accessed: 30 July 2024]
[7] “Artifact Registry.” Google Cloud, [Online]. Available: https://cloud.google.com/artifact-registry [Accessed: 30 July 2024]

## Acknowledgements

- The official express (backend framework) Docs provided me with valuable guidance and resources for the nodejs backend.
- The official Docs of nodemon helps me to configure the nodejs app in such a way that after every changes in the code doesn't needs the server to restart.
- The official Docs of Material-UI and Chakra-UI helps me to use the ready made component and Tailwind for applying CSS.
- The official Docs of prisma ORM helps me to connect to the Postgres database, define schema and query from the database.

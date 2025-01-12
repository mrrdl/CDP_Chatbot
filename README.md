# **CDP Support Chatbot**

A full-stack chatbot application designed to assist with "how-to" questions and other queries related to Customer Data Platforms (CDPs) such as **Segment**, **mParticle**, **Lytics**, and **Zeotap**. The chatbot can dynamically scrape documentation, process user queries, and provide relevant responses in real-time.

---

## **Features**
- **Dynamic Query Handling**:
  - Processes "how-to" questions, comparisons, and generic queries.
- **Documentation Scraping**:
  - Fetches real-time data from CDP documentation websites using web scraping.
- **Natural Language Understanding (NLU)**:
  - Uses OpenAI's GPT for advanced question classification and response generation.
- **Cross-CDP Comparison**:
  - Handles comparative queries between different CDPs.
- **Frontend**:
  - A user-friendly React/Next.js-based chatbot interface.

---

## **Project Structure**

### **Backend**
- Built with **Node.js**, **Express**, and **Cheerio**.
- Scrapes and processes data from CDP documentation.
- API routes for query handling and data retrieval.

### **Frontend**
- Developed using **React** and **Next.js**.
- Provides an interactive chatbot interface for user interactions.

### **Technologies Used**
- **Frontend**:
  - React
  - Next.js
  - TailwindCSS
- **Backend**:
  - Node.js
  - Express
  - Cheerio
  - Axios
- **AI/NLP**:
  - OpenAI's GPT API
- **Deployment**:
  - Docker
  - Docker Compose

---

## **Setup Instructions**

### **Prerequisites**
1. **Node.js**: Install the latest LTS version from [Node.js official site](https://nodejs.org/).
2. **Python**: Required for backend data preprocessing and Elasticsearch integration.
3. **Docker**: Install Docker for containerization and deployment.

---

### **Steps to Run the Project**

#### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/cdp-support-chatbot.git
cd cdp-support-chatbot
```

#### 2. **Setup the Backend**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run start
   ```
   The backend will run on `http://localhost:3001`.

#### 3. **Setup the Frontend**
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`.

---

### **Environment Variables**

#### Backend:
Create a `.env` file in the `backend` directory with the following variables:
```
OPENAI_API_KEY=your-openai-api-key
```

#### Frontend:
No special variables are required for the frontend.

---

## **Available Scripts**

### **Backend Scripts**
- `npm start`: Start the backend server.

### **Frontend Scripts**
- `npm run dev`: Start the frontend development server.
- `npm run build`: Build the app for production.
- `npm run start`: Start the production server.

---

## **API Endpoints**

### `/api/scrape`
- **Method**: `GET`
- **Description**: Scrapes documentation for relevant content.
- **Query Parameters**:
  - `cdp`: Name of the CDP (`segment`, `mparticle`, `lytics`, `zeotap`).
  - `query`: The user's search query.

---

## **Features in Progress**
- **Improved Query Relevance**: Advanced NLP for better query matching.
- **User Authentication**: Secure user access and personalized history.
- **Deployment**: Full Docker and cloud hosting support.

---

## **License**
This project is licensed under the MIT License.

---

## **Contributing**
We welcome contributions! Please fork the repo, create a new branch for your feature, and submit a pull request.

---

Let me know if you need any edits or customizations! 😊

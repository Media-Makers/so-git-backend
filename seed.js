const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const signUpModel = require("./models/signup");


async function seedDatabase() {
     
     try {
          for (const userData of seedData) {
            const newSignUp = new signUpModel(userData);
            await newSignUp.save();
          }
          console.log("Database seeded successfully.");
        } catch (error) {
          console.error("Error seeding database:", error);
        } finally {
          mongoose.connection.close();
        }
      }
      
      mongoose.connection.on("error", (err) => {
        console.error("MongoDB connection error:", err);
      });
      
    
     
      
      
      
      
      

seed()
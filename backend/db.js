// const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://huzaifazafar750:food123@cluster0.tsktv8v.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0";

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI);
//         console.log("Connected to MongoDB!");
//         const fetchedData = await mongoose.connection.db.collection("food_items");
//         const data = await fetchedData.find({}).toArray(async function (err, data) {
//             const foodCategory = await mongoose.connection.db.collection("food_category");
//             foodCategory.find({}).toArray(function(err, category){
//                 if (err) console.log(err);
//                 else {
//                     global.food_items = data;
//                     global.foodCategory = category;
//                 };
//                 // console.log(category);
//             })
//         });
//         // console.log(data);
//         global.food_items = data;
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// };

// module.exports = mongoDB;


const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://huzaifazafar750:food123@cluster0.tsktv8v.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB!");

        const fetchedData = await mongoose.connection.db.collection("food_items");
        const foodItemsData = await fetchedData.find({}).toArray();

        const foodCategoryData = await mongoose.connection.db.collection("food_category").find({}).toArray();

        return { foodItems: foodItemsData, foodCategory: foodCategoryData };
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

module.exports = mongoDB;

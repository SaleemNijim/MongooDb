import mongoose from "mongoose";

// Define Schema

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: { type: mongoose.Decimal128, required: true, validate: v => v >= 10 },
    genra: { type: Array },
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, published: { type: Date, default: Date.now } }]
})

// Create a model for the movies collection using the schema

const MovieModel = mongoose.model("Movie", movieSchema)


const updateMany = async () => {
    try {
        // const result = await MovieModel.find({ $or: [{ money: 750000 }] })


        // updateOne(filter , whatTochange?) 
        const result = await MovieModel.deleteMany({ ratings: { $gt: 4 } })

        // iterating Over
        console.log(result);



    } catch (error) {
        console.log(error);

    }
}

export { updateMany }




/*
const m1 = new MovieModel({
            name: "The Vow",
            ratings: 4,
            money: 60000,
            genra: ['action', 'love', 'Romantic'],
            isActive: true,
            comments: [{ value: 'The Best Romantic Movie i have ever seen !!.' }]
        })
        const m2 = new MovieModel({
            name: "Iron Man",
            ratings: 4.5,
            money: 750000,
            genra: ['action', 'Hero', 'Scientific'],
            isActive: true,
            comments: [{ value: 'The Best Romantic Movie i have ever seen !!.' }]
        })
        const m3 = new MovieModel({
            name: "Thor",
            ratings: 4.3,
            money: 860000,
            genra: ['action', 'Hero', 'advanture'],
            isActive: true,
            comments: [{ value: 'The Best Romantic Movie i have ever seen !!.' }]
        })
        const m4 = new MovieModel({
            name: "Zoo",
            ratings: 3.8,
            money: 54000,
            genra: ['action', 'animal'],
            isActive: true,
            comments: [{ value: 'The Best Romantic Movie i have ever seen !!.' }]
        })
        const m5 = new MovieModel({
            name: "Fight Club",
            ratings: 4.9,
            money: 760000,
            genra: ['action', 'fighting', 'crezy'],
            isActive: true,
            comments: [{ value: 'The Best Romantic Movie i have ever seen !!.' }]
        })
        const result = await MovieModel.insertMany([m1, m2, m3, m4, m5])
        console.log(result); */
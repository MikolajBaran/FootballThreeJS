module.exports = function (mongoose) {

    var Schema = mongoose.Schema;

    var userSchema = new Schema(
        {
            login: { type: String, required: true },
            password: { type: String, required: true },
            socketID: { type: String, required: false },
            status: { type: String, default: "logout" },
            building: { type: String, required: false },
            tmp: { type: String, required: false },

        });

    var models = {
        User: mongoose.model("User", userSchema),
        // Kierowca: mongoose.model("Kierowca", kierowcaSchema) , 
        // Inny: mongoose.model("Inny", innySchema) ,   
    }

    return models;

}
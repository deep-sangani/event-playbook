const db = require("./models");

// db.Media.belongsToMany(db.User, {
//   through: "MediaUser",
// });
// db.User.belongsToMany(db.Media, {
//   through: "MediaUser",
// });
// db.Preference.hasOne(db.User, {
//   foreignKey: "userId",
// });
// db.User.belongsTo(db.Preference, {
//   foreignKey: "userId",
// });

// db.Registration.hasOne(db.User);
// db.User.belongsTo(db.Registration, {
//   foreignKey: "registrationId",
// });

// db.User.hasMany(db.ContectList, {
//   foreignKey: "userId",
// });
// db.ContectList.belongsTo(db.User, {
//   foreignKey: "userId",
//   sourceId: "userId",
// });

// db.ContectList.hasMany(db.Contect);
// db.Contect.belongsTo(db.ContectList, {
//   foreignKey: "contectId",
//   sourceId: "contectId",
// });

module.exports = db;

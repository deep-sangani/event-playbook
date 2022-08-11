const db = require("./models");
// # relations

// events
db.Event.hasMany(db.CreditUse, {
  foreignKey: "eventId",
});
db.Event.hasOne(db.VirtualAddress, {
  foreignKey: "eventId",
});
db.Event.hasOne(db.Location, {
  foreignKey: "eventId",
});
db.Event.hasOne(db.EventStats, {
  foreignKey: "eventId",
});
db.Event.hasMany(db.Track, {
  foreignKey: "eventId",
});
db.Event.hasMany(db.EventInvitation, {
  foreignKey: "eventId",
});
db.Event.hasMany(db.Attendee, {
  foreignKey: "eventId",
});
db.Event.hasMany(db.Notification, {
  foreignKey: "eventId",
});
db.Event.hasMany(db.Rsvp, {
  foreignKey: "eventId",
});

// tracks
db.Track.hasMany(db.Activity, {
  foreignKey: "trackId",
});
db.Track.hasMany(db.ActivityTrack, {
  foreignKey: "trackId",
});
db.Track.hasOne(db.EventInvitation, {
  foreignKey: "trackId",
});
db.Track.hasMany(db.Attendee, {
  foreignKey: "trackId",
});

// activities
db.Activity.hasMany(db.ActivityTrack, {
  foreignKey: "activityId",
});
db.Activity.hasMany(db.Notification, {
  foreignKey: "activityId",
});

// promo codes
db.PromoCode.hasOne(db.CreditUse, {
  foreignKey: "promoCode",
});

// contenct
db.Contact.hasOne(db.Invitation, {
  foreignKey: "contactId",
});

// attendees

//invitations
db.EventInvitation.hasMany(db.Invitation, {
  foreignKey: "eventInvitationId",
});
db.EventInvitation.hasOne(db.Attendee, {
  foreignKey: "eventInvitationId",
});

// users
db.User.hasMany(db.Attendee, {
  foreignKey: "userId",
});
db.User.hasOne(db.Preference, {
  foreignKey: "userId",
});
db.User.belongsToMany(db.Media, {
  through: "UserMedia",
});
db.User.hasOne(db.Registration, {
  foreignKey: "userId",
});
db.User.hasOne(db.Contact, {
  foreignKey: "userId",
});
db.User.belongsToMany(db.Contact, {
  through: "UserContact",
  foreignKey: "userId",
  otherKey: "contactId",
});
db.User.hasMany(db.UserNotification, {
  foreignKey: "userId",
});
db.User.hasMany(db.NotificationReply, {
  foreignKey: "userId",
});
db.User.hasMany(db.ContactList, {
  foreignKey: "userId",
});
db.User.hasOne(db.UserCreditsSummary, {
  foreignKey: "userId",
});
db.User.hasMany(db.CreditPurchase, {
  foreignKey: "userId",
});
db.User.hasMany(db.CreditUse, {
  foreignKey: "userId",
});

// # notification
db.Notification.hasMany(db.UserNotification, {
  foreignKey: "notificationId",
});
db.Notification.hasOne(db.NotificationReply, {
  foreignKey: "notificationId",
});

// # media
db.Media.hasMany(db.Notification, {
  foreignKey: "mediaId",
});

// # notification reply

// # rsvp
db.Rsvp.hasMany(db.RsvpQuestion, {
  foreignKey: "rsvpId",
});

// # rsvp question
db.RsvpQuestion.hasMany(db.RsvpResponse, {
  foreignKey: "rsvpQuestionId",
});

// # contact
db.Contact.hasMany(db.ContactList, {
  foreignKey: "contactId",
});

// # credit purchase
db.CreditPurchase.hasOne(db.UserCreditsSummary, {
  foreignKey: "lastCreditPurchaseId",
  sourceKey: "creditPurchaseId",
});

// # credit use
db.CreditUse.hasOne(db.UserCreditsSummary, {
  foreignKey: "lastCreditUseId",
  sourceKey: "creditUseId",
});

// # back relations

//events
db.VirtualAddress.belongsTo(db.Event, {
  foreignKey: "eventId",
});
db.CreditUse.belongsTo(db.Event, {
  foreignKey: "eventId",
});
db.Location.belongsTo(db.Event, {
  foreignKey: "eventId",
});
db.EventStats.belongsTo(db.Event, {
  foreignKey: "eventId",
});
db.Track.belongsTo(db.Event, {
  foreignKey: "eventId",
});
db.EventInvitation.belongsTo(db.Event, {
  foreignKey: "eventId",
});
db.Attendee.belongsTo(db.Event, {
  foreignKey: "eventId",
});
db.Notification.belongsTo(db.Event, {
  foreignKey: "eventId",
});
db.Rsvp.belongsTo(db.Event, {
  foreignKey: "eventId",
});

// tracks
db.Activity.belongsTo(db.Track, {
  foreignKey: "trackId",
});
db.ActivityTrack.belongsTo(db.Track, {
  foreignKey: "trackId",
});
db.EventInvitation.belongsTo(db.Track, {
  foreignKey: "trackId",
});
db.Attendee.belongsTo(db.Track, {
  foreignKey: "trackId",
});

// activities
db.ActivityTrack.belongsTo(db.Activity, {
  foreignKey: "activityId",
});
db.Notification.belongsTo(db.Activity, {
  foreignKey: "activityId",
});

// promocode
db.CreditUse.belongsTo(db.PromoCode, {
  foreignKey: "promoCode",
});

// eventInvitation
db.Invitation.belongsTo(db.EventInvitation, {
  foreignKey: "eventInvitationId",
});

// users
db.Attendee.belongsTo(db.User, {
  foreignKey: "userId",
});
db.Preference.belongsTo(db.User, {
  foreignKey: "userId",
});
db.Media.belongsToMany(db.User, {
  through: "UserMedia",
});
db.Registration.belongsTo(db.User, {
  foreignKey: "userId",
});
db.Contact.belongsTo(db.User, {
  foreignKey: "userId",
});
db.UserNotification.belongsTo(db.User, {
  foreignKey: "userId",
});
db.NotificationReply.belongsTo(db.User, {
  foreignKey: "userId",
});
db.ContactList.belongsTo(db.User, {
  foreignKey: "userId",
});
db.UserCreditsSummary.belongsTo(db.User, {
  foreignKey: "userId",
});
db.CreditPurchase.belongsTo(db.User, {
  foreignKey: "userId",
});
db.CreditUse.belongsTo(db.User, {
  foreignKey: "userId",
});

// invitations
db.Attendee.belongsTo(db.Invitation, {
  foreignKey: "invitationId",
});

//notifications
db.UserNotification.belongsTo(db.Notification, {
  foreignKey: "notificationId",
});
db.NotificationReply.belongsTo(db.Notification, {
  foreignKey: "notificationId",
});

// # rsvp
db.RsvpQuestion.belongsTo(db.Rsvp, {
  foreignKey: "rsvpId",
});

// # rsvp question
db.RsvpResponse.belongsTo(db.RsvpQuestion, {
  foreignKey: "rsvpQuestionId",
});

// # contact
db.ContactList.belongsTo(db.Contact, {
  foreignKey: "contactId",
});

// # credit purchase
db.UserCreditsSummary.belongsTo(db.CreditPurchase, {
  foreignKey: "lastCreditPurchaseId",
});

// # credit use
db.UserCreditsSummary.belongsTo(db.CreditUse, {
  foreignKey: "lastCreditUseId",
});

// # media
// db.Media.belongsTo(db.Notification, {
//   foreignKey: "mediaId",
// });
module.exports = db;

const { Contact } = require('../db/relations')

exports.preRegistrationCheck = async ({ email }) => {
    const contacts = await Contact.findAll({ where: { email: email } })

    return !contacts.length
}

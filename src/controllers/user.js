const {
    User,
    Registration,
    Contact,
    Preference,
    Media,
} = require('../db/relations')

const bcrypt = require('bcrypt')
const { preRegistrationCheck } = require('../services/user')

const registrationType = {
    MANUAL: 'MANUAL',
    GOOGLE: 'GOOGLE',
    APPLE: 'APPLE',
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Registration,
                    attributes: ['registrationType'],
                },
                {
                    model: Contact,
                },
                {
                    model: Preference,
                },
                {
                    model: Media,
                },
            ],
        })

        return res.json({
            success: true,
            result: { users },
        })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByPk(userId, { raw: true })

        return res.json({
            success: true,
            result: { user },
        })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
}

exports.registerUser = async (req, res) => {
    try {
        // TODO : Joi validation
        const { firstName, lastName, email, password } = req.body
        // email should be uniqe

        const isOkay = await preRegistrationCheck({ email })

        if (isOkay) {
            const displayName = firstName + ' ' + lastName

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const registration = await Registration.create({
                registrationType: registrationType.MANUAL,
                password: hashedPassword,
            })

            const contact = await Contact.create({
                email,
                firstName,
                lastName,
            })

            const preference = await Preference.create({
                allowNotifications: true,
                allowPrivateMessage: true,
                allowGlobalSearch: true,
            })

            const userDetails = {
                displayName,
                preferredLanguage: 'EN',
                preferenceId: preference.preferenceId,
                registrationId: registration.registrationId,
                contactId: contact.contactId,
            }

            const user = await User.create(userDetails)

            return res.json({
                success: true,
                result: { user },
            })
        } else {
            throw new Error('Invalid or Already registered user details')
        }
    } catch (error) {
        console.error(error)
        return res.status(400).json({ success: false, message: error.message })
    }
}

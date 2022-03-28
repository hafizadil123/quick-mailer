const nodemailer = require('nodemailer');

const getConfig = (config) => {
    const createConfig = {
		service: config.service || 'Gmail',
		auth: {
			user: config.user,
			pass: config.pass
		}
	}
    return createConfig;
}
const getOptions = (options) => {
   const mailOption = {
		from: options.from, // sender address
		to: [options.to || user.email], // list of receivers
		subject: options.subject, // Subject line
		//text: 'Hello world?', // plain text body
		html: options.html // html body
	};

    return mailOption;
}
exports.quickMailer = (config, options) => {
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport(getConfig(config));

	// setup email data with unicode symbols
	let mailOptions = getOptions(options)

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	});
};
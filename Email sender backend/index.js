import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'support@alanescarcha.com',
	password: '_.3Hn-jxC6^u',
	host: 'premium190.web-hosting.com',
	ssl: true,
});

// send the message and get a callback with an error or details of the message that was sent
client.send(
	{
		text: 'i hope this works',
		from: 'Alan <support@alanescarcha.com>',
		to: 'Lauty <lautygonzalez626@gmail.com>',
		subject: 'testing emailjs',
	},
	(err, message) => {
		console.log(err || message);
	}
);
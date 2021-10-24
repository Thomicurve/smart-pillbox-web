import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'xxxxxx',
	password: 'xxxxxxx',
	host: 'xxxxxxx',
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

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, mobile, message } = req.body;

    // Validate input fields
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!/^[a-zA-Z]+$/.test(name)) {
      return res.status(400).json({ message: 'Name should contain only alphabets' });
    }

    if (!/^\d{10}$/.test(mobile)) {
      return res.status(400).json({ message: 'Mobile number should be 10 digits long' });
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Using Gmail's SMTP server
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your app password (not your Gmail password)
      },
    });

    // Email options
    const mailOptions = {
      from: email, // sender email
      to: 'thechessclasses@gmail.com', // receiver email
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Message: ${message}
      `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email. Please try again later' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

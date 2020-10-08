// const nodemailer = require('nodemailer');
// module.exports = nodemailer.createTransport({ })

import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail';
export default nodemailer.createTransport(mailConfig);
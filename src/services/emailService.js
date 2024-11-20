require('dotenv').config();
import nodemailer from 'nodemailer';

let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

    let info = await transporter.sendMail({
        from: '"Xác nhận lịch khám bệnh" <duyduy20303@gmail.com>',
        to: dataSend.receiverEmail,
        subject: "Thông tin đặt lịch khám bệnh",
        html: getBodyHTMLEmail(dataSend),
    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result = `
        <h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này vì đã đặt lịch khám bệnh trên trang web của chúng tôi</p>
        <p>Thông tin lịch khám bệnh:</p>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

        <p>Nếu các thông tin đã chính xác vui lòng click vào link dưới đây để xác nhận lịch khám:</p>
        <div>
        <a href= ${dataSend.redirectLink} target= "_blank">Click here</a>
        </div>
        
        <div>Xin trân trọng cảm ơn!</div>
        `
    }
    return result;
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail
}
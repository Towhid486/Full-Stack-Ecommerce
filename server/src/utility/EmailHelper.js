const nodemailer=require('nodemailer');

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

    let  transport= nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:25,
        secure:false,
        auth:{user:"developertowhid@gmail.com",pass:"zgieegvuihtdkjwo"},
        tls:{rejectUnauthorized:false}

        // host:"mail.teamrabbil.com",
        // port:25,
        // secure:false,
        // auth:{user:"info@teamrabbil.com",pass:"~sR4[bhaC[Qs"},
        // tls:{rejectUnauthorized:false}
    })

    

    let mailOption={
        from:'Infinity E-commerce Solution <developertowhid@gmail.com>',
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }

    return await transport.sendMail(mailOption)
}

module.exports=EmailSend;
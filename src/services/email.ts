const ElasticEmail = require('@elasticemail/elasticemail-client');

const defaultClient = ElasticEmail.ApiClient.instance;
const apiKey = defaultClient.authentications['apikey'];
apiKey.apiKey = process.env.ELASTICEMAIL_API_KEY;

const sendEmail = async (
  recipients: string[],
  subject: string,
  content: string
) => {
  const api = new ElasticEmail.EmailsApi();

  const email = ElasticEmail.EmailMessageData.constructFromObject({
    Recipients: recipients.map(
      (recipient: string) => new ElasticEmail.EmailRecipient(recipient)
    ),
    Content: {
      Body: [
        ElasticEmail.BodyPart.constructFromObject({
          ContentType: 'HTML',
          Content: content,
        }),
      ],
      Subject: subject,
      From: `Jesús Gutierrez - Portfolio <${process.env.EMAIL_FROM}>`,
    },
  });

  const callback = function (error: Error, data: any, response: Response) {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully.');
    }
  };
  await api.emailsPost(email, callback);
};

export { sendEmail };

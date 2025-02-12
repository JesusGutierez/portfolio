import { BREVO_API } from "@/constants/constants";

const raw = {
  "sender": process.env.EMAIL_SENDER,
  "to": [process.env.EMAIL_RECIPIENT],
  "htmlContent": null,
  "subject": null,
  "tags": null
};

const getHeaders = (): Headers => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("api-key", process.env.BREVO_API_KEY || '');
  return myHeaders;
}

export const sendTransactionalEmail = (subject: string, message: string, tags: string[]) => {
  const headers = getHeaders();
  const newRaw = {
    ...raw,
    "htmlContent": `<!DOCTYPE html>
    <html>
      <body>
        <h3>${subject}</h3>
        <p>${message}</p>
      </body>
    </html>`,
    "subject": subject,
    "tags": tags
  };
  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    body: JSON.stringify(newRaw),
    redirect: "follow",
  };

  return fetch(`${BREVO_API.URI}${BREVO_API.TRANSACTIONAL_EMAIL}`, requestOptions);
}

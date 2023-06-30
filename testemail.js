const postmark = require("postmark");

const client = new postmark.ServerClient("3837a7cd-0035-4546-9157-6e19bf1dd873");

const sendEmail = async () => {
  try {
    const result = await client.sendEmail({
      From: "info@vitract.com",
      To: "joel@vitract.com",
      Subject: "Hello from Postmark",
      HtmlBody: "<strong>Hello</strong> dear Postmark user.",
      TextBody: "Hello from Postmark!",
      MessageStream: "outbound"
    });

    console.log("Email sent successfully:", result.MessageID);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

sendEmail();

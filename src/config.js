export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-fochoa"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://l4zcvnhzz2.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_3n94sxspq",
      APP_CLIENT_ID: "5mpl0bh78r1bd1o0a8abl2ce4m",
      IDENTITY_POOL_ID: "us-east-1:9caa7ac2-cfa7-46ca-b8ea-9a528a3f38c6"
    },
    MAX_ATTACHMENT_SIZE: 5000000
  };
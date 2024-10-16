import app from "./app";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: "http://plant-peace-app.s3-website.us-east-2.amazonaws.com",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

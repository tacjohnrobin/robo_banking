// Simple Express server for demo purposes
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Dummy users for demo
const users = [{ email: "johndoe@mail.com", password: "demodemo" }];

app.post(
  "/api/auth/signin",
  (
    req: { body: { email: any; password: any } },
    res: {
      json: (arg0: { token: string }) => void;
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { error: string }): void; new (): any };
      };
    }
  ) => {
    const { email, password } = req.body;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      res.json({ token: "demo-token" }); // Mock token for demo
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  }
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
    'https://api.chatengine.io/users/'
    {username: username, secret: username, first_name: username},
    {headers: {"private-key": "689edb14-1128-43dc-b901-46b07dc796ac"}}
    )
    return res.status(r.status)
  } catch (e){
    axios
  }
  


  return res.json({ username: username, secret: "sha256..." });
});


app.listen(3001);
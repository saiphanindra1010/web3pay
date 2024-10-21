import express from "express";

const router = express.Router();
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]; // Extract API key

  if (apiKey !="safetoken") { //replace with real db check
    return res.status(401).json({ message: 'API Key wrong or required' });
  }



  next(); // Proceed to the next middleware/route handler
};
router.post("/sendtransactions",authenticateApiKey, (req, res) => {

  try {

    let {OwnersPublicId, senderPrivateKey, senderPublicKey, cryptoCurrencyType } = req.body;
    if ((cryptoCurrencyType == "solana")) {
        cryptoCurrencyType="s"
        
    }
    else if ((cryptoCurrencyType == "etherium")) {
        cryptoCurrencyType="e"
    }
    else
    {
        return res.send({"error":"enter valid crypto"})
    }
    return res.json({
      OwnersPublicId: OwnersPublicId,
      senderPublicKey: senderPrivateKey,
      senderPrivateKey: senderPublicKey,
      cryptoCurrencyType: cryptoCurrencyType,
    });
  } catch (err) {
    return res.status(500).json("server Error " + err);
  }
});

export default router;

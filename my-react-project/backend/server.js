const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;  

app.use(express.static('frontend/dist'));  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

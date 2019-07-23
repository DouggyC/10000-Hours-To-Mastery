bcrypt.hash("secret!", 13, (err, hash) => {
  console.log(hash); //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare("secret!", hash, (err, res) => {
    console.log(res); //true
  });
});

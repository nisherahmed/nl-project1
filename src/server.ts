import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

// ei part mongoose theke copy kore ansi then mongoAtlase chole jabo

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    // ei part app.ts theke cut kore ansi
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

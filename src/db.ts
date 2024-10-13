import mongoose from 'mongoose'

mongoose.connect(process.env.URI as string, { dbName: process.env.DB, })
    .then(() => {
        console.log('🎉 LIVE')
    })
    .catch((error) => {
        console.log(`❌ ${error}`)
    });

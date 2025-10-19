const express = require('express');
const router = express.Router();
const { getCatFact } = require('../services/catfact'); 

router.get('/', async (req, res, next) => {
  try {
    const fact = await getCatFact(); 

    const user = {
      email: 'sochimahenri@gmail.com',           
      name: 'Sochima Henri',                   
      stack: ['Node.js', 'Express', 'MongoDB'] 
    };

    return res.status(200).json({
      status: 'success',
      user,
      timestamp: new Date().toISOString(), 
      fact
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;









// const express = require('express')

// const router = express.Router()
// const catFactService = require('../services/catfact')

// const EMAIL = process.env.USER_EMAIL || 'sochimahenri@gmail.com'
// const NAME = process.env.USER_NAME || 'Sochima Henri'
// const STACK = process.env.USER_STACK || ['Node.js']

// router.get('/', async (req, res)=>{
//     try {
//         const fact = await catFactService.getCatFact();

//         const response = {
//             status: 'success',
//             user: {
//                 email: EMAIL,
//                 name: NAME,
//                 stack: STACK
//             },
//             timestamp: new Date().toISOString(),
//             fact
//         };
//         res.setHeader('Content-Type', 'application/json');
//         return res.status(200).json(response)
//     } catch (error) {
//         const fallbackResponse = {
//             status: 'success',
//             user: {
//                 email: EMAIL,
//                 name: NAME,
//                 stack: STACK
//             },
//             timestamp: new Date().toISOString(),
//             fact: 'Cat fact unavailable at the moment. Please try again later.'
//         };

//         res.setHeader('Content-Type', 'application/json');
//         return res.status(200).json(fallbackResponse);
//     }
// });

// module.exports = router;
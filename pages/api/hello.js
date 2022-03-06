// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({
      code:0,
      message: 'Hello World!' ,
      author:'renserve',
      home:'https://renserve.com',
      github:'https://github.com/renserve',

  })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'John Doe',
    metodo: req.method,
    // http://localhost:3000/api/hello?idade=30&nome=maria
    nome: req.query.nome,
    idade: req.query.idade,
    idadeNumber: +req.query.idade
  })
}

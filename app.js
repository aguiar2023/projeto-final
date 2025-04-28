const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const users = [];
//AONDE VAI SER ARMAZENADOS OS PRODUTOS, (reiniciar talvez perde os dados)

let products = [
    { id: 1, name: 'macarrão', Image:'https://bretas.vtexassets.com/arquivos/ids/186247-1600-auto?v=638375505910500000&width=1600&height=auto&aspect=true'  , price: 9.39 },
    { id: 2, name: 'Arroz',Image:'https://bretas.vtexassets.com/arquivos/ids/185877-300-300?v=638375505099500000&width=300&height=300&aspect=true' , price: 31.90 },
    { id: 3, name: 'Feijão',Image:'https://bretas.vtexassets.com/arquivos/ids/191093-300-300?v=638375516381930000&width=300&height=300&aspect=true' , price: 5.99 },
    { id: 4, name: 'Óleo',Image:'https://bretas.vtexassets.com/arquivos/ids/183040-300-300?v=638375499137700000&width=300&height=300&aspect=true', price: 6.99 }, 
    { id: 5, name: 'Detergente',Image:'https://bretas.vtexassets.com/arquivos/ids/196602-300-300?v=638375528485830000&width=300&height=300&aspect=true' , price: 2.49 },
    { id: 7, name: 'Biscoito',Image:'https://bretas.vtexassets.com/arquivos/ids/197667-300-300?v=638375530938530000&width=300&height=300&aspect=true' , price: 3.39 },
    { id: 8, name: 'Shampoo',Image:'https://bretas.vtexassets.com/arquivos/ids/219490-300-300?v=638684818382000000&width=300&height=300&aspect=true' , price: 10.90 },
    { id: 9, name: 'Manteiga',Image:'https://bretas.vtexassets.com/arquivos/ids/214676-300-300?v=638412021943130000&width=300&height=300&aspect=true' , price: 25.80 },
    { id: 10, name: 'Leite',Image:'https://bretas.vtexassets.com/arquivos/ids/183538-300-300?v=638375500158400000&width=300&height=300&aspect=true' , price: 6.49 },
    { id: 11, name: 'Linguiça', Image:'https://bretas.vtexassets.com/arquivos/ids/215301-300-300?v=638437057234700000&width=300&height=300&aspect=true' , price: 14.95 }
];
//Para controlar o ID
let nextProductId = products.length + 1;

// Dados de localização dos supermercados (armazenados em memória)
const supermercados = [
    {
      id: 1,
      name: 'Supermercado Popular',
      address: 'Rua Exemplo, 123 - Bairro Popular',
      openingHours: 'Seg-Sab: 07:00-21:00, Dom: 08:00-12:00'
    },
    {
      id: 2,
      name: 'Supermercado Novo Horizonte - Centro',
      address: 'Avenida Principal, 456 - Centro',
      openingHours: 'Seg-Sab: 08:00-20:00, Dom: 08:00-13:00'
    },
    {
      id: 3,
      name: 'Supermercados BH - Rosana',
      address: 'Rua das Rosas, 789 - Bairro Rosana',
      openingHours: 'Seg-Sab: 07:30-21:00, Dom: 07:30-14:00'
    },
     /// //// /// ADD MAIS SUPERMECADOS
  ];
  
  app.get('/api/supermercados', (req, res) => {
    res.json(supermercados);
  });
  app.get('/api/supermercados/:id', (req, res) => {
    const supermercadoId = parseInt(req.params.id);
    const supermercado = supermercados.find(s => s.id === supermercadoId);
  
    if (supermercado) {
      res.json(supermercado);
    } else {
      res.status(404).json({ message: 'Supermercado não encontrado' });
    }
  });

app.use(cors());
/////////////////////////////////////////
app.use ('/api/auth', authRoutes);
/////////////////////////////////////////
app.use('/api/users', userRoutes);
/////////////////////////////////////////
app.use(bodyParser.json());
/////////////////////////////////////////
app.use('/api/products', productRoutes);
/////////////////////////////////////////
app.get('/', (req, res => {
    res.setEncoding('API do ECONOMIZAPP');
}));
//// 
module.exports ={app, products, nextProductId };
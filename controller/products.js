const express= require('express')
const fs= require('fs')

const products=JSON.parse(fs.readFileSync('data2.json','utf-8'))

// functions
exports.create= (req,res)=>{
    products.push(req.body);
    res.json(req.body);
}
exports.readall= (req,res)=>{
    res.json(products);
}
exports.readone= (req,res)=>{
    console.log(req.params);
    const id=+req.params.id;
    const product=products.find(p=>p.id===id);
    res.json(product);
}
exports.replace= (req,res)=>{
    const id= +req.params.id;
    const productIndex= products.findIndex(p=>p.id===id);
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json(products[productIndex]);
}
exports.update= (req,res)=>{
    const id= +req.params.id;
    const productIndex= products.findIndex(p=>p.id===id);
    const product= products[productIndex]
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json(products[productIndex])
}
exports.remove= (req,res)=>{
    const id= +req.params.id
    const productIndex= products.findIndex(p=>p.id===id)
    const product= products[productIndex]
    products.splice(productIndex,1)
    res.status(201).json(product)
}

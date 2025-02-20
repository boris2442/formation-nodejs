//utilisez un module events de nodejs pour creer et gerer les evenements 
const EventEmitter=require('events');
class MyEmitter extends EventEmitter {};
const mmyEmitter=new MyEmitter();

MyEmitter.on('data', (mesage)=>{
    console.log('Evenement reçu:', message);
});

setTimeout(()=>{
MyEmitter.emit('data', 'voici un message asynchrone');
},4000);
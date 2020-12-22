
import { keys, getItem, setItem } from 'localforage'
import * as localforage from 'localforage'


/* Código para comunicación entre pestañas o ventanas */

let bc
let id = Math.floor(Math.random() * 1000000000)
export function listenChanges(callback) {
  // dos argumentos, nombre método (add/remove) y el item
  if (bc) bc.close()
  bc = new BroadcastChannel('storage')
  bc.onmessage = function ({origin, data}) {
    console.log('message from: ' + origin + " id:" + data.id + ' method:' + data.method)
    if (data && data.id !== id)
      //distinta pestaña
      callback(data.method, data.item)
  }
}

function sendChange(method, item) {
  if (bc) bc.postMessage({ id, method, item })
}

/* Fin comunicación entre pestañas */

export async function saveItem(item) {
  //sendChange('add', item)
  await localforage.setItem(item.key.toString(), item)
}

export async function removeItem(item) {
  //sendChange('remove', item)
  await localforage.removeItem(item.key.toString())
}

export async function loadData() {
  const keys = await localforage.keys()
  const promises = keys.map((k) => localforage.getItem(k))
  return Promise.all(promises)
}

/*const categories = ['Peras', 'Manzanas', 'Limones']

function getRandom(limit){ // return an integer number between 0 and limit - 1
  return Math.floor(Math.random()*limit);
}

function date2iso(date){
  return date.getFullYear() + '-' +
  ('0' + (date.getMonth()+1)).slice(-2) + '-' +
  ('0' + (date.getDate()+1)).slice(-2);
}

export async function loadData(){
  // Returns random data for testing
  const result = []
  const today = new Date()
  for(let i=0; i<100; i++){
    const date = new Date(Date.now())
    date.setDate(today.getDate()-getRandom(365))
    result.push({
      category: categories[getRandom(categories.length)],
      amount: Math.floor(Math.random()*100000)/100,
      date: date2iso(date)
    })
  }
  return result
}*/
const fetch=require('node-fetch')
const apikey={
  key:'3959e25a-8184-47c2-8fa6-6094ced95458'
}
let url="https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
qString="?CMC_PRO_API_KEY="+apikey.key+"&start=1&limit=1000&convert=USD";
fetch(url+qString)
.then((res)=>{
  return res.json();
})
.then((data)=>{
console.log(data.data)
})
const installUrl = 'https://warpcast.com/~/add-cast-action?actionType=post&name=Higher+pilled&icon=search&postUrl=https%3A%2F%2F5504-97-126-133-99.ngrok-free.app%2Fapi%2Fpost'
const BASE_URL = process.env.BASE_URL

export default async function handler (req,res){
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method Not Allowed' })
      return
    }

    let name = 'Higher pilled'
    let postUrl = BASE_URL+'/api/post'
    let icon='search';
    let installUrl= `https://warpcast.com/~/add-cast-action?actionType=post&name=${name}&icon=${icon}&postUrl=${postUrl}`
  
    return res.status(302).setHeader('Location', `${installUrl}`).send('Redirecting');
}
import { init, fetchQuery } from "@airstack/node";
const AIRSTACK_KEY = process.env.AIRSTACK_KEY;
init(AIRSTACK_KEY);

export default async function handler (req,res){
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }
  let fid = req.body.untrustedData.castId.fid;
  let balance = await getHigherBalance(fid)
  let balanceView = (balance/1000000000000000000).toString()
  let response = {message:balanceView}

  return res.status(200).setHeader('Content-Type', 'text/html').send(response)
}

async function getHigherBalance(fid){
  const query = `{
    Base: TokenBalances(
      input: {filter: {owner: {_eq: "fc_fid:${fid}"}, tokenAddress: {_eq: "0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe"}}, blockchain: base, limit: 50}
    ) {
      TokenBalance {
        owner {
          identity
        }
        tokenAddress
        tokenId
        tokenType
        amount
      }
    }
  }`

  const { data, error } = await fetchQuery(query);
  return data.Base.TokenBalance ? data.Base.TokenBalance[0].amount : 0;
}


import axios from 'axios'

const HEADER = `https://api.binstd.com/fontconvert/convert`
const APP_KEY = `a70e4ada895ebe01`
const TYPE = `2h`

export const transformWords = (text) => axios({
  method: 'get',
  url: `${HEADER}?appkey=${APP_KEY}&content=${text}&type=${TYPE}`
})
  .then((res) => { return res.data.result })
  .catch((err) => { return err })
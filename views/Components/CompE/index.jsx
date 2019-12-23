import React, { useState, useEffect, useCallback } from 'react'
import cx from 'classnames'
import styles from './style.module.scss'
import objToString from './objToString'

function useFetch (fetch, params, visible = true) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [newParams, setNewParams] = useState(params)

  const fetchApi = useCallback(async () => {
    if (visible) {
      setLoading(true);
      const res = await fetch(newParams)
      if (res.code === 1) {
        setData(res.data)
        console.log('data', res.data)
      }
      setLoading(false)
    }
  }, [fetch, newParams, visible])

  useEffect(() => {
    console.log("useEffect")
    fetchApi()
  }, [fetchApi])

  const reFetch = () => {
    setNewParams(Object.assign({}, newParams));
  }

  return {
    loading,
    data,
    reFetch
  }
}

export default function CompE() {
  const { data, reFetch } = useFetch(getSsq, { code: "ssq" })

  return (<div className={cx(styles.container, 'card')}>
    <h3 className='title' >CompE</h3>
    {data ? <div>双色球开奖号码：{data.openCode}</div> : null}
    <div onClick={reFetch} >refresh</div>
  </div>)
}

const getSsq = params => {
  const url =
    "https://www.mxnzp.com/api/lottery/common/latest?" + objToString(params)
  return fetch(url).then(res => res.json())
}
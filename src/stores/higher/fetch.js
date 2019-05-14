import React, {
  Fragment,
  useState,
  useEffect,
  useReducer,
} from 'react'
import axios from 'axios'
import { get } from 'lodash'

const dataFetchReducer = (state, action) => {

}

export const useFetch = ({ initUrl, initBody, initOpts, initData }) => {
  const [url, setUrl] = useState(initUrl)
  const [body, setBody] = useState(initBody)
  const [opts, setOpts] = useState(initOpts)
  const [data, setData] = useState(initData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetch = ({ url, body, opts }) => {
    const { method, ...reqOpts } = opts
    return axios[method](url, body, reqOpts)
      .then(e => get(e, 'data'))
      .catch(e => e)
  }

  useEffect(() => {


  }, [url, body, opts])


  return { data, loading, error, fetch }
}
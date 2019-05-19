// https://www.robinwieruch.de/react-hooks-fetch-data/
// todo refer to https://github.com/slorber/react-async-hook/blob/master/src/index.js
import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import { get } from 'lodash'

const fetch = ({ url, body, opts }) => {
  let method = 'get'
  const { method: httpMethod, ...reqOpts } = opts
  return axios[httpMethod || method](url, body, reqOpts)
    .then(e => get(e, 'data'))
    .catch(e => {
      throw new Error('fetch error')
    })
}

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...state, loading: true, error: false }
    case 'DONE':
      return { ...state, loading: false, error: false, data: action.payload }
    case 'FAIL':
      return { ...state, loading: false, error: true }
    default:
      throw new Error('[useFetch] unknow action type')
  }
}

export const useFetch = (displayName, initProps = {}, initData = null) => {
  if (!displayName) throw new Error('[useFetch] displayName is undefined')

  const [props, setProps] = useState(initProps)

  const refetch = ({ url, body, opts }) => {
    const tmpProps = {}
    if (url) tmpProps.url = url
    if (body) tmpProps.body = body
    if (opts) tmpProps.opts = opts

    setProps(prevProps => ({
      ...prevProps,
      ...tmpProps,
    }))
  }

  const [state, dispatch] = useReducer(fetchReducer, {
    loading: false,
    error: false,
    data: initData,
  })

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!props.url) { throw new Error(`[useFetch] ${displayName}'s url is undefined`) }
      dispatch({ type: 'INIT' })
      try {
        const res = await fetch({
          url: props.url,
          body: props.body,
          opts: props.opts,
        })
        // todo whether to abort request
        if (!cancelled) dispatch({ type: 'DONE', payload: res })
      } catch (err) {
        if (!cancelled) dispatch({ type: 'FAIL' })
      }
    })()

    return () => {
      cancelled = true
    }
  }, [props, displayName])

  return { ...state, refetch }
}

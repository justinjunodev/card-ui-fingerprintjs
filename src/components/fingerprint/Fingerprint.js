/* eslint-disable no-console */
import React, { useState, useEffect } from "react"
import Fingerprint2 from "fingerprintjs2"

const Fingerprint = () => {
  const [userFingerprint, setUserFingerprint] = useState(null)
  const [userIpData, setUserIpData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const getFingerprint = () =>
    new Promise((resolve) => {
      Fingerprint2.get((components) => {
        resolve(components)
      })
    })

  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json")
      .then((res) => res.json())
      .then((ip) => Promise.all([ip, getFingerprint()]))
      .then(([ip, fp]) => {
        setUserFingerprint(fp)
        setUserIpData(ip)
        setIsLoading(false)
      })
  }, [])

  console.log(userFingerprint)
  console.log(userIpData)

  return (
    <>
      <h4>Environment Details</h4>
      {!isLoading && <p>See console for env details (temporary)</p>}
    </>
  )
}

export default Fingerprint

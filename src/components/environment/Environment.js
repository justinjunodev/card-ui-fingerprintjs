import React, { useState, useEffect } from "react"
import Fingerprint2 from "fingerprintjs2"
import {
  EnvironmentWrapper,
  EnvironmentHeading,
  EnvironmentList,
} from "./styles"

const Environment = () => {
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

  return (
    <EnvironmentWrapper>
      <EnvironmentHeading>Environment</EnvironmentHeading>
      {!isLoading && (
        <EnvironmentList>
          <li>Platform: {userFingerprint[16].value}</li>
          <li>
            Location: {userIpData.city}, {userIpData.region}
          </li>
          <li>IP: {userIpData.query}</li>
        </EnvironmentList>
      )}
    </EnvironmentWrapper>
  )
}

export default Environment

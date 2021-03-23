import React from "react"
import {AuthCluster} from "./auth-cluster"
import {InitCluster} from "./init-cluster"
import {ProfileCluster} from "./profile-cluster"
import {useCurrentUser} from "./hooks/current-user"

function App() {
  const cu = useCurrentUser()
  return (
    <div className="App">
      <AuthCluster />
      <InitCluster address={cu.addr} />
      <ProfileCluster address="0xba1132bc08f82fe2" />
      <ProfileCluster address="0x2cb0604322fe5aa4" />
    </div>
  );
}

export default App;

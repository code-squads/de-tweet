import React, { useEffect } from 'react'
import { useMetamask } from 'use-metamask'

import DeTweetContract from '../apis/DeTweetContract'
import { getFollowers, getFollowersCount, getFollowing, getFollowingCount, getUserInfo } from '../apis/users';
import { useAuth } from '../context/customAuth';

const Web3Tester = () => {
  
  function user(address){
    if(!address)
      address = '';

    console.log("Contract: ", DeTweetContract);

    getUserInfo(address)
      .then(userInfo => {
        console.log("User:", userInfo);
      });
    
     getFollowersCount(address)
      .then(followersCount => {
        console.log("Followers: ", followersCount);
      });

    getFollowingCount(address)
      .then(followingCount => {
        console.log("Following: ", followingCount);
      });
    
    getFollowers(address)
      .then(followers => {
        console.log("Followers:", followers);
      });

    getFollowing(address)
      .then(following => {
        console.log("following:", following);
      });


    setTimeout(() => console.log("----------------------------"), 1000)
  }

  const { loggedIn, login, entityInfo, logout, isProcessingLogin } = useAuth();
  const { metaState, connect, getAccounts, getChain } = useMetamask();

  useEffect(() => {
    getAccounts()
      .then(accounts => {
        console.log("Accounts", accounts);
      })
  }, []);

  useEffect(() => {
    console.log("Metamask state", metaState);
  }, [metaState])

  return (
    <div>
      <h3>
        &nbsp;&nbsp;&nbsp;&nbsp;
        Web3Tester
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => user('0xD766DF5CcD4F7C73e0d2dc4d9f9a32616fdD7400')}>
          Ashneer -- 0xD766DF5CcD4F7C73e0d2dc4d9f9a32616fdD7400
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => user('0x7E4c95682682e2eCE0e795e205dA3F02E5766158')}>
          Piyush -- 0x7E4c95682682e2eCE0e795e205dA3F02E5766158
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <br/><br/>
        {
          isProcessingLogin ?
          <>
            Processing ....
          </>
          : loggedIn ?
          <>
            Address: { entityInfo.address }
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={logout}>
              Logout
            </button>
          </>
          :
          <>
            <button onClick={login}>
              Login
            </button>
          </>
        }
      </h3>
    </div>
  )
}

export default Web3Tester
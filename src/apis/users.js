import DeTweetContract, { web3, linkFromTxHash } from "./DeTweetContract";

export const userRegistration = (address, userInfo) => new Promise(async (resolve, reject) => {
  if(!address)
    return reject("Invalid address");

    const tx = DeTweetContract.methods.userRegistration(
      userInfo.lname,
      userInfo.fname,
      userInfo.bio,
      userInfo.avatar,
      userInfo.city,
      userInfo.country,
      userInfo.birthdate,
      userInfo.gender,
    );
    console.log("New record transaction: ", tx);
  
    const gasPrice = await web3.eth.getGasPrice();
    const gas = (await tx.estimateGas({ from: address })) + 20000;
    console.log(gas, gasPrice);
    

    try {
      const receipt = await tx.send({
        from: address,
        gas,
        gasPrice,
      });
      console.log(receipt);
      console.log(`Transaction hash: ${receipt.transactionHash}`);
      console.log(
        `View the transaction here: `,
        linkFromTxHash(receipt.transactionHash)
      );
      return receipt;
    } catch (err) {
      console.log(
        "Some error sending record approval transaction from account:",
        address
      );
      console.log(err);
    }
})

export const getUserInfo = address => new Promise((resolve, reject) => {
  if(!address)
      return reject("Invalid address");

  // Otherwise fetch details from blockchain
  DeTweetContract.methods
      .getUserInfo(address)
      .call()
      .then(userInfo => {
        // Format
        // {
        //   avatar: "man"
        //   bio: "Shark"
        //   birthdate: "718223400"
        //   city: "Mumbai"
        //   country: "India"
        //   fname: "Ashneer"
        //   gender: "0"
        //   lname: "Grover"
        // }
        resolve(userInfo);
      }).catch(err => {
          console.log(`Some error fetching info for address ${address} \n`, err);
          reject(new Error(`Couldn't fetch info for address ${address}`));
      });
});


export const getFollowersCount = address => new Promise((resolve, reject) => {
  if(!address)
    return reject("Invalid address");

  // Otherwise fetch details from blockchain
  DeTweetContract.methods
      .getFollowersCount(address)
      .call()
      .then(followersCount => {
        resolve(followersCount);
      }).catch(err => {
          console.log(`Some error fetching info for address ${address} \n`, err);
          reject(new Error(`Couldn't fetch info for address ${address}`));
      });
});

export const getFollowingCount = address => new Promise((resolve, reject) => {
  if(!address)
    return reject("Invalid address");

  // Otherwise fetch details from blockchain
  DeTweetContract.methods
    .getFollowingCount(address)
    .call()
    .then(followingCount => {
      resolve(followingCount);
    }).catch(err => {
      console.log(`Some error fetching info for address ${address} \n`, err);
      reject(new Error(`Couldn't fetch info for address ${address}`));
    });
});

export const getFollowing = address => new Promise((resolve, reject) => {
  if(!address)
    return reject("Invalid address");

  // Otherwise fetch details from blockchain
  DeTweetContract.methods
    .getFollowing(address)
    .call()
    .then(following => {
      resolve(following);
    }).catch(err => {
      console.log(`Some error fetching info for address ${address} \n`, err);
      reject(new Error(`Couldn't fetch info for address ${address}`));
    });
});

export const getFollowers = address => new Promise((resolve, reject) => {
  if(!address)
    return reject("Invalid address");

  // Otherwise fetch details from blockchain
  DeTweetContract.methods
    .getFollowers(address)
    .call()
    .then(following => {
      resolve(following);
    }).catch(err => {
      console.log(`Some error fetching info for address ${address} \n`, err);
      reject(new Error(`Couldn't fetch info for address ${address}`));
    });
});

// export const getInfo = address => new Promise((resolve, reject) => {
//   if(!address)
//       return reject("Invalid address");


//   // Otherwise fetch details from blockchain
//   DeTweetContract.methods
//       .getUserInfo(address)
//       .call()
//       .then(userInfo => {
//         resolve(userInfo);
//       }).catch(err => {
//           console.log(`Some error fetching info for address ${address} \n`, err);
//           reject(new Error(`Couldn't fetch info for address ${address}`));
//       });
// })
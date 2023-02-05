import DeTweetContract, { web3, linkFromTxHash } from "./DeTweetContract";

export const userRegistration = (address, userInfo) => new Promise(async (resolve, reject) => {
  if(!address || !userInfo)
    return reject("Invalid inputs");

  const tx = DeTweetContract.methods.userRegistration(
    userInfo.fName,
    userInfo.lName,
    userInfo.bio,
    userInfo.avatar,
    userInfo.city,
    userInfo.country,
    userInfo.birthdate,
    userInfo.gender,
  );
  console.log("New record transaction: ", tx);
  tx
    .send({
      from: address
    })
    .then(receipt => {
      console.log("Tx Receipt", receipt);
      console.log(`Transaction hash: ${receipt?.transactionHash}`);
      console.log(
        `View the transaction here: `,
        linkFromTxHash(receipt?.transactionHash)
      );
      return resolve(receipt);
    })
    .catch(err => {
      console.log("Tx err", err);
    });
  
  // const gasPrice = await web3.eth.getGasPrice();
  // const gas = (await tx.estimateGas({ from: address })) + 20000;
  // console.log(gas, gasPrice);
})


export const follow = (self, target) => new Promise(async (resolve, reject) => {
  if(!self || !target)
    return reject("Invalid address");

  const tx = DeTweetContract.methods.follow(target);
  console.log("Follow transaction: ", tx);
  tx
    .send({
      from: self
    })
    .then(receipt => {
      console.log("Tx Receipt", receipt);
      console.log(`Transaction hash: ${receipt?.transactionHash}`);
      console.log(
        `View the transaction here: `,
        linkFromTxHash(receipt?.transactionHash)
      );
      return resolve(receipt);
    })
    .catch(err => {
      console.log("Tx err", err);
    });
});

export const unFollow = (self, target) => new Promise(async (resolve, reject) => {
  if(!self || !target)
    return reject("Invalid address");

  const tx = DeTweetContract.methods.unFollow(target);
  console.log("UnFollow transaction: ", tx);
  tx
    .send({
      from: self
    })
    .then(receipt => {
      console.log("Tx Receipt", receipt);
      console.log(`Transaction hash: ${receipt?.transactionHash}`);
      console.log(
        `View the transaction here: `,
        linkFromTxHash(receipt?.transactionHash)
      );
      return resolve(receipt);
    })
    .catch(err => {
      console.log("Tx err", err);
    });
});

export const isFollowing = (self, target) => new Promise(async (resolve, reject) => {
  if(!self || !target)
    return reject("Invalid address");

  // Otherwise fetch details from blockchain
  DeTweetContract.methods
    .isFollowing(self, target)
    .call()
    .then(following => {
      resolve(following);
    }).catch(err => {
      console.log(`Some error fetching isFollowing for self(${self} => target(${target})) \n`, err);
      reject(new Error(`Couldn't fetch info for self(${self} => target(${target}))`));
    });
});

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

export const getUserPosts = address => new Promise((resolve, reject) => {
  if(!address)
    return reject("Invalid address");

  // Otherwise fetch details from blockchain
  DeTweetContract.methods
    .getUserPosts(address)
    .call()
    .then(posts => {
      resolve(posts);
    }).catch(err => {
      console.log(`Some error fetching posts for address ${address} \n`, err);
      reject(new Error(`Couldn't fetch post for address ${address}`));
    });
});


export const getAllUsers = () => new Promise((resolve, reject) => {
  DeTweetContract.methods
    .getAllUsers()
    .call()
    .then(allUsers => {
      resolve(allUsers);
    }).catch(err => {
      console.log(`Some error fetching all users \n`, err);
      reject(new Error(`Couldn't fetch info for all users`));
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

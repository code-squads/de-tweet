import DeTweetContract, { web3, linkFromTxHash } from "./DeTweetContract";

export const getPost = (postWriterAddress, postIndex) => new Promise((resolve, reject) => {
  if(!postWriterAddress || (!postIndex && postIndex !== 0))
    return reject("Invalid request");

  // Otherwise fetch details from blockchain
  DeTweetContract.methods
    .getPost(postWriterAddress)
    .call()
    .then(post => {
      // Format
      // {
      // }
      resolve(post);
    }).catch(err => {
        console.log(`Some error fetching post for ${postWriterAddress} [${postIndex}] \n`, err);
        reject(new Error(`Couldn't fetch info for address ${postWriterAddress} [${postIndex}]`));
    });
});

export const getUserPosts = (postWriterAddress) => new Promise((resolve, reject) => {
  if(!postWriterAddress)
    return reject("Invalid request");

  // Otherwise fetch details from blockchain
  DeTweetContract.methods
    .getUserPosts(postWriterAddress)
    .call()
    .then(posts => {
      // Format
      // {
      // }
      resolve(posts);
    }).catch(err => {
        console.log(`Some error fetching posts for ${postWriterAddress} \n`, err);
        reject(new Error(`Couldn't fetch info for address ${postWriterAddress}`));
    });
});

export const addPost = (address, postDetails) =>  new Promise(async (resolve, reject) => {
  if(!address || !postDetails)
    return reject("Invalid inputs");

  const tx = DeTweetContract.methods.addPost(
    postDetails.text,
    postDetails.postDate,
    postDetails.reportMsg,
    postDetails.cids,
    postDetails.titles
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
})
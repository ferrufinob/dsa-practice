class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //   private property
  // this hash function generates an index between 0 to whatever number the array size is from a key
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // gives us an interger between 0 and 65535
      //   modulo operator to make sure this stays within the size of our data
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      //   console.log(hash);
    }
    return hash;
  }

  // create array inside each bucket
  // push the key-value pair into the array in the bucket.
  set(key, value) {
    //   where we are storing our information
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  // lookup
  // takes only O(1) time for finding bucket, plus looping though the array inside the bucket/
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
myHashTable.get("grapes");
myHashTable.keys();

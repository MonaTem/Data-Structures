/* Cannot use arrow functions for constructors, must
   use function expressions */

function HashTable(size)  {
  this.buckets = Array(size);
  this.numbuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  var total = 0;
  for (i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numbuckets;
  return bucket;
};

HashTable.prototype.insert = function (key, value) {
  var index = this.hash(key);
  console.log('INDEX: ', index);
  if (!this.buckets[index])
      this.buckets[index] = new HashNode(key, value);
  else {
    var currentNode = this.buckets[index];
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }


}

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      console.log('currentNode is ', currentNode);
      if (currentNode.key === key)
        return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};

var MyHT = new HashTable(30);
console.log(MyHT);

// console.log(MyHT.hash('Megan'));
MyHT.insert('Dean', 'dean@gmail.com');
MyHT.insert('Megan','megan@gmail.com');
MyHT.insert('Dane', 'dane@yahoo.com');
// console.log(MyHT.buckets);
console.log(MyHT.get('Megan'));

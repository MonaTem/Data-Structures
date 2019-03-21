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

var MyHT = new HashTable(30);
console.log(MyHT);

console.log(MyHT.hash('Becca'));

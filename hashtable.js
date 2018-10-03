// 1. What is a hash table? 

// Hash table is a type of data structure where key and value are stored as a pair 
// so that you can look up a perticular value based on the unique key. 

// 2. What is hashing? 

// Hashing is a process of converting a string into numerical index. 


// 3. How does a hash table store data? 

// 1. Take a key which can be any data type.  
// 2. The key is converted to a integer(hash code) operated by a hash function 
// 3. Calculate a true index by modding the key to its capacity
// 4. Store the value in the calculated array bin 


// 4. How are hash tables and objects different?

// Both hash tables and objects are collection of data stored as a key-value pairs. 
// The difference is that each data in hash table contains a unique identifier and 
// can be accessed to each data through the identifier whereas data stored in object 
// is a collection of different data types.  

// 5. Determine whether you would use a hash table or an object to store each of the following pieces of data:
// A list of pets and their unique names. 
// Hash table 

// The name, age, and the birthday of your best friend. 
// Object 

// The name and location of every company in a given city. 
// Hash table 

// All of the books checked out from a library by a particular individual. 
// Hash table 

// The primary and secondary phone numbers for a contact. 
// Hash table  


var hash = (string, max) => {
    var hash = 0;
    for (var i =0; string.length > i; i++){
        hash += string.charCodeAt(i);
    }
    return hash % max;
    };

let HashTable = function(){
    let storage = [];
    const storageLimit = 10; 

    this.print = function(){
        console.log(storage);
    };

    this.add = function(key, value){
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for(var i =0; i < storage[index].length; i++){
                if (storage[index][i][0] === key){
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted == false) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function(key){
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] == key ){
            delete storage[index];
        } else {
            for(var i=0; i < storage[index].length; i++){
                if (storage[index][i][0] === key){
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function(key){
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for(var i = 0; i < storage[index].length; i++){
                if (storage[index][i][0] === key){
                    return storage[index][i][1];
                }
            }
        }
    };
} 
  
6) 
var phone = new HashTable();
phone.add('8184147804', {Name: 'Arata Kagan', Address: '4309 Noble Avenue'}); 
phone.add('8189230111', {Name: 'Sean Kagan', Address: '4309 Noble Avenue'}); 
phone.lookup('8184147804') 


7) 
var storage = new HashTable(); 
storage.add('1011', {Name: 'Puffins Corn Frake', Price:'3.00'});
storage.add('1012', {Name: 'Puffins Chocolate Corn Frake', Price:'3.00'});
storage.lookup('1011')
  

8) 
  let news = new HashTable();
  
  news.add('Los Angeles Daily News 10/03/18', {Title: 'Residents of San Fernando, Simi valleys want Gavin Newsom to commit to cleaning up Santa Susana Field Lab, if he wins', Published: 'October 2, 2018 at 6:27 pm', Link: 'https://www.dailynews.com/2018/10/02/san-fernando-simi-valley-residents-want-gavin-newsom-to-commit-to-cleaning-up-santa-susana-field-lab-if-he-wins'});
  
  news.add('KTLA 10/03/18', {Title: 'California License Plates Go Digital', Published: '7:14 AM, OCTOBER 1, 2018', Link: 'https://ktla.com/2018/10/01/california-digital-license-plate'});
  
  console.log(news.lookup("Los Angeles Daily News 10/03/18"));
  console.log(news.lookup("KTLA 10/03/18"));


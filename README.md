## ez-dom

This is just for my personal use. Please look away. I am shame. (－‸ლ)

### examples
    
     // find in DOM
     let a = ß('p');
     let b = ß('#myDiv');
     let c = ß('p.myClass');
     
     // create new node
     let d = ß('<span>');
     
     // create new node with id
     let d = ß('<span>#newId');
     
     // chainable
     ß('#myDiv').append(ß('<span>#newId'));

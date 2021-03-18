const mysql = require('mysql');
const inquirer = require('inquirer')
// Sets up the SQl connection
const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: '',
    database: 'great_bayDB',
  });

  //This function will ask the initial question to the user
 const greatBayQuestion = () => {
   inquirer.prompt([
    {
      type: 'list',
      message: 'Would you like to post an item or bid on an item?',
      name: 'action',
      choices: ['Post','Bid','Exit']
    },
   ])
   .then((data)=>{
    if(data.action === 'Post'){
      productQuestions()
    }
    if (data.action === 'Bid'){
      bidQuestions()
    }
    else{
      return
    }
   })
 }

// This function will ask the product question
 const productQuestions = () => {
     inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the product?',
            name: 'item',
          },

          {
            type: 'input',
            message: 'What is the minimum bid you would like to start with?',
            name: 'current_bid',
          },
     ])
     .then((data) => {
       createProduct(data)
     })
 }

// This is going to create the product based on the users specifications in create product function
  const createProduct = (data) => {
    console.log('Inserting a new product...\n');
    const query = connection.query(
      'INSERT INTO products SET ?',
      {
        item: data.item,
        current_bid: data.current_bid,
      },
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} product inserted!\n`);
        // Call updateProduct AFTER the INSERT completes
        console.log("Congrats, your item is posted!")
        greatBayQuestion();
      }
    );
    }
    greatBayQuestion();
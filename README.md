# NFTSalesDashboard

## Power BI dashboard


 🤩 Hi... everyone 

### Branch Name - NFTSales-Backend

This Repository have NodeJS Source code for getting data from API 📈

#### Definition

This Project code have only one Route that return 1000s of data 

When you send request to the API  , the route Calls
 
    NFTport.xyz to get data in real time 😎
    
    After getting all iteration of more than 5000 data the API return data in JSON format 🤑

#### Workflow

 **1** Firstly you need to download and run the NodeJS code
 
 **2** Then Call the API like "http://localhost:3000/getsales/getContractSales/<contract_address>/ethereum"
 
 **note** If you have to mention which data you are going to get Either Mint or Sales
          In NFTsales.js Page
           var options = {
            method: 'GET',
            url: "https://api.nftport.xyz/v0/transactions/nfts/" + contract_address,
            qs: { chain: chain, type: 'mint' },  // 👾 ['sale' , 'mint']  You can choose any one
            headers: {
                'Content-Type': 'application/json',
                Authorization: '6ab257ab-356e-4cea-b726-25********'
            }
        };
 
 **3** Enjoy with the data 🥵





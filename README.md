# NFTSalesDashboard

## Power BI dashboard


 🤩 Hi... everyone 
 
 Dashboard Link - https://app.powerbi.com/groups/me/reports/10037147-0797-49a2-97a4-710f35453b7c/ReportSection?ctid=197384f7-2b72-4f9a-9349-3ceeef912c13
 
### Branch Name - **NFTDashboard**

 This dashboard have all sales stats in one page 📈 📉 📊
 
 There are 2 categories of data
      
      -👩‍🏫 NFT Sales 
      -⛏  NFT Mint
      
 It has 4 Top Collections of NFT for better analysis 😎
 
 ## Datasets
 
 There are 2 main datasets :-
 
      - Sales 💹
      - Mint 🌿
      
      Each datasets having more than 5000 datas in it ... 🙄
      
 ## Work Flow
 
  **Step 1 :** Download Power BI desktop on your pc
  
  **Step 2 :** Download our PowerBI file 
  
  **Step 3 :** Run on your Power BI desktop
  
  **Step 4 :** View Our Beautiful Dashboard 😍
  

### Branch Name - NFTSales-Report

This repository have the project report of our NFT sales analytics dashboard 🎉

This repository contains :-                  

                📟 PPT file that contains project report which explains our project briefly...:)
                
                📺 Video file that shows how the dashboard works...///
               
                📷 Picture file that shows the beautiful view of our dashboard 😍
                

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






var express = require('express');
var salesRouter = express.Router();
var bodyParser = require('body-parser');
var http = require('https');
var request = require('request');

salesRouter.use(bodyParser.json());

salesRouter.route('/getContractSales/:contract/:chain')
    .get((req, res, next) => {
        console.log('data');
        var contract_address = req.params.contract;
        var chain = req.params.chain;
        var continuation = "";
        var ss = "{\"nfts\":[{}";
        var nftsalesdata = ss;
        var i = 0;
        var options = {
            method: 'GET',
            url: "https://api.nftport.xyz/v0/transactions/nfts/" + contract_address,
            qs: { chain: chain, type: 'mint' },
            headers: {
                'Content-Type': 'application/json',
                Authorization: '6ab257ab-356e-4cea-b726-25af4c9d1f95'
            }
        };
        console.log(options);
        try {
            getdata();
            // var responseData = http.request(options, async (res) => {
            //     console.log(res);
            //     continuation = await res.continuation;
            //     if (res.response == "OK") {
            //         nftsalesdata.push(res.transactions);
            //         for (var i = 0; i <= 10; i++) {
            //             // while (continuation != "") {
            //             console.log(nftsalesdata);
            //         }
            //         res.json({ result: nftsalesdata });
            //     }
            // });
            // console.log(responseData);
            function getdata() {
                if (continuation != "") {
                    options.qs['continuation'] = continuation;
                }
                else {
                    if (options.qs.continuation != null)
                        options.qs.continuation.remove();
                }
                console.log(options);
                request(options, function (error, response, body) {
                    if (error) throw new Error(error);
                    var data = JSON.parse(body)
                    console.log(data);
                    nftsalesdata += ",";
                    nftsalesdata += JSON.stringify(data.transactions).slice(1, -1);
                    if (data.response == "OK") {
                        i++;
                        if (i < 80) {
                            if (data.continuation != null) {
                                continuation = data.continuation;
                                getdata();
                            }
                        }
                        else {
                            nftsalesdata += "]}";
                            var str = JSON.parse(nftsalesdata);
                            // console.log(str);
                            var nfts = str;
                            // console.log(nfts);
                            res.json(nfts);
                        }
                    }
                });
            }

        } catch (e) {
            console.log(e);
        }

    });

module.exports = salesRouter;
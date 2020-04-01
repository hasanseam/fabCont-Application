/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCont extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const conts = [
            {
                cnr: '567',
		vgm: '420',
		type: 'FT20',
		status: 'freigegeben',
		target: 'Duisburg',
            }     
        ];

        for (let i = 0; i < conts.length; i++) {
            conts[i].docType = 'cont';
            await ctx.stub.putState('CONT' + i, Buffer.from(JSON.stringify(conts[i])));
            console.info('Added <--> ', conts[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryCont(ctx, contNumber) {
        const contAsBytes = await ctx.stub.getState(contNumber); // get the cont from chaincode state
        if (!contAsBytes || contAsBytes.length === 0) {
            throw new Error(`${contNumber} does not exist`);
        }
        console.log(contAsBytes.toString());
        return contAsBytes.toString();
    }

    async createCont(ctx, contNumber, cnr, vgm, type, status, target) {
        console.info('============= START : Create Cont ===========');

        const cont = {
            cnr,
            docType: 'cont',
            vgm,
            type,
            status,
	    target,
        };

        await ctx.stub.putState(contNumber, Buffer.from(JSON.stringify(cont)));
        console.info('============= END : Create Cont ===========');
    }

    async queryAllConts(ctx) {
        const startKey = 'CONT0';
        const endKey = 'CONT999';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

	/*
    async changeCarOwner(ctx, carNumber, newOwner) {
        console.info('============= START : changeCarOwner ===========');

        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        const car = JSON.parse(carAsBytes.toString());
        car.owner = newOwner;

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : changeCarOwner ===========');
    }
*/
}

module.exports = FabCar;

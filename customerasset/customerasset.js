import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import PRODUCT_OBJECT from '@salesforce/schema/Product2';
import PRODUCT_NAME_FIELD from '@salesforce/schema/Product2.Name';
import PRODUCT_CODE_FIELD from '@salesforce/schema/Product2.ProductCode';
import PRODUCT_COST_FIELD from '@salesforce/schema/Product2.Product_cost__c';
import DELIVERY_ADDRESS_FIELD from '@salesforce/schema/Product2.Delivery_address__c';
import DRIVER_NUMBER_FIELD from '@salesforce/schema/Product2.Driver_Number__c';
import DRIVER_NAME_FIELD from '@salesforce/schema/Product2.Driver_Name__c';

export default class Customerasset extends LightningElement {
    objectApiName = PRODUCT_OBJECT;
    fields = [PRODUCT_NAME_FIELD,PRODUCT_CODE_FIELD,PRODUCT_COST_FIELD,DELIVERY_ADDRESS_FIELD,DRIVER_NUMBER_FIELD,DRIVER_NAME_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}
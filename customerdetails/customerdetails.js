import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CUSTOMER_OBJECT from '@salesforce/schema/Customer__c';
import NAME_FIELD from '@salesforce/schema/Customer__c.Name';
import PHONE_FIELD from '@salesforce/schema/Customer__c.Phone__c';
import EMAIL_FIELD from '@salesforce/schema/Customer__c.Email__c';
import STATUS_FIELD from '@salesforce/schema/Customer__c.status__c';
import PICKUP_ADDRESS_FIELD from '@salesforce/schema/Customer__c.Pickup_Address__c';
import DELIVERY_ADDRESS_FIELD from '@salesforce/schema/Customer__c.Delivery_Address__c'


export default class Customerdetails extends LightningElement {
    objectApiName = CUSTOMER_OBJECT;
    fields = [NAME_FIELD,PHONE_FIELD,EMAIL_FIELD,STATUS_FIELD,PICKUP_ADDRESS_FIELD,DELIVERY_ADDRESS_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}
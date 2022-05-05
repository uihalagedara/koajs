import {randomBytes} from 'crypto';

import items from '../data/items.js';
import customers from '../data/customer.js';
import promotions from '../data/promotions.js';
import inventry from '../data/inventry.js';

export const addItem = ({name, price}) => {
    const newItem = {id:randomBytes(16).toString('hex'), name, price};
    items.set(newItem.id, newItem);
    return newItem;
}

export const update = (id, {name, price}) => {
    if(!items.has(id)){
        throw new Error('Not found for the ID ${id}');
    }
    const updatedItem = {id, name, price};
    items.set(updatedItem.id, updatedItem);
    return updatedItem;
}

export const getAllCustomers = () => {
    return [...customers.values()];
  }

export const getAllPromotions = () => {
    return [...promotions.values()];
  }

export const addPromotions = ({ItemName, ItemCatogory, description}) => {
    const newPromotion = {id:randomBytes(16).toString('hex'), ItemName, ItemCatogory, description};
    promotions.set(newPromotion.id, newPromotion);
    return newPromotion;
}

export const getAllIventry = () => {
    return [...inventry.values()];
  }
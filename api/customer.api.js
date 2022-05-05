import {randomBytes} from 'crypto';
import items from '../data/items.js';
import cart from '../data/cart.js';
import wishlist from '../data/wishlist.js';
import purchase from '../data/purchase.js';

export const getAll = () => {
  return [...items.values()];
}

export const createProfile = ({name, age, mobile}) => {
  const newProfile = {id:randomBytes(16).toString('hex'), name, age, mobile};
  items.set(newProfile.id, newProfile);
  return newProfile;
}

export const addToCart = ({ItemName, quntity, price}) => {
  const newCartItem = {id:randomBytes(16).toString('hex'), ItemName, quntity, price};
  cart.set(newCartItem.id, newCartItem);
  return newCartItem;
}

export const getAllCartItems = () => {
  return [...cart.values()];
}

export const addToWhishlist = ({ItemName, ItemCatogory, description, addedDate}) => {
  const newWishlistItem = {id:randomBytes(16).toString('hex'), ItemName, ItemCatogory, description, addedDate:new Date()};
  wishlist.set(newWishlistItem.id, newWishlistItem);
  return newWishlistItem;
}

export const getAllWishlist = () => {
  return [...wishlist.values()];
}

export const addPurchase = ({ItemName, ItemCatogory, quantity, price}) => {
  const newWishlistItem = {id:randomBytes(16).toString('hex'), ItemName, ItemCatogory, quantity, price, amount:quantity*price};
  purchase.set(newWishlistItem.id, newWishlistItem);
  return newWishlistItem;
}

export const getAllPurchase = () => {
  return [...purchase.values()];
}
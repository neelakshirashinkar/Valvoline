import {ObjectId} from 'mongodb';

const exportedMethods = {
    idcheck(id,Varname){
    if (!id) throw `Please provide an ${Varname}`;
    if (typeof id !== 'string') throw `${Varname} must be a string`;
    if (id.trim().length === 0)
      throw `${Varname} cannot be an empty string or just spaces`;
    id = id.trim();
    if (!ObjectId.isValid(id)) throw `${Varname} is an invalid object ID`;
    return id.toString();
    },

    stringcheck(str,Varname){
      if (!str) throw 'You must provide a str for your movie';
      if (typeof str !== 'string') throw `${Varname} must be a string`;
      if (str.trim().length === 0)
        throw `${Varname} cannot be an empty string or just spaces`;
      if (!isNaN(str))
        throw `${str} is not a valid value for ${Varname} as it only contains digits`;
      if (/^[^a-zA-Z0-9\s]+$/.test(str)) {
          throw `${str} is not a valid value for ${Varname} as it only contains special characters or punctuation marks`;
      }
      
      return str;
    },
  
    passwordcheck(password){
    if (typeof password != "string") 
      throw `Password needs to be a string`;
    let myPassword = password.split(" ")
    if (myPassword.length > 1) 
      throw  `Password cannot have spaces`;
    if (!(/^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/).test(password))
      throw `Password must contain at least 8 characters, One uppercase letter, One special charcter and One number`;
    return password;
    }
};
export default exportedMethods;
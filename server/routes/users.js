import {Router} from 'express';
const router = Router();
import {userData} from '../data/index.js';
import validation from '../helper.js';

router
.route('/form')
.post(async(req,res) => {
    let {
        name,
        address,
        city,
        state,
        zip,
        phone,
        cell,
        email,
        serviceRequested,
        driveability,
        otherConcern,
        agreedToTerms,
      } = req.body;
      
    try {
        if (!name || !address || !city || !state || !zip || !phone || !cell || !email || !agreedToTerms) 
        throw 'Please provide all required fields';


    } catch (e) {
        return res.status(400).json({error: e})
    }
    try {
        const newuser = await userData.createUser({
            name,
            address,
            city,
            state,
            zip,
            phone,
            cell,
            email,
            serviceRequested: serviceRequested || [], 
            driveability: driveability || [], 
            otherConcern,
            agreedToTerms,
          });
        return res.status(200).json(newuser);
    } catch (e) {
        return res.status(500).json({error: e});
    }
});

router
.route('/search')
.get(async(req,res) =>{
    const { type, value } = req.query;

    try {
        let searchQuery = {};
        if (type === 'name') {
            searchQuery = { name: { $regex: new RegExp(value, 'i') } };
        } else if (type === 'phone') {
            searchQuery = { $or: [{ phone: value }, { cell: value }] };
        } else if (type === 'email') {
            searchQuery = { email: { $regex: new RegExp(value, 'i') } };
        } else {
            throw 'Invalid search type';
        }

        const searchResults = await userData.searchUsers(searchQuery);
        res.status(200).json(searchResults);
    } catch (error) {
        res.status(400).json({ error: error.message });
    } 
});

router
.route('/user/:id')
.get( async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await userData.getUserById(id); 
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).send({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

export default router;
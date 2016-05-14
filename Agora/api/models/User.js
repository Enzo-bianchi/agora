/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        autoPK: true,
        autoCreatedAt: true,
        autoUpdatedAt: false,
        nom: {
            type: 'string',
            required: true
        },
        mail:{
        	type: 'email',
        	required: true,
        	unique: true
        },
        mdp:{
        	type: 'string'
        },
        reputation:{
        	type: 'integer',
        	defaultsTo: 0
        },
        ville:{
        	type:'string',
        	required: true
        },
        commentaires:{
        	model: 'commentaire'
        }
    }
};

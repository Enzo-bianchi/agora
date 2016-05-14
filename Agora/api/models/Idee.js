/**
 * Idee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	autoPK: true,
  	autoCreatedAt: true,
  	autoUpdatedAt: false,
  	nom:{
  		type: 'string',
  		required: true
  	},
  	description:{
  		type: 'string',
  		required: true
  	},
  	progression:{
  		type: 'integer',
  		defaultsTo: 0
  	},
  	nbVote:{
  		type: 'integer',
  		defaultsTo: 0
  	},
  	coutEstimer:{
  		type: 'integer',
  		defaultsTo: 0
  	},
  	idUser:{
  		model: 'user'
  	},
  	commentaires:{
  		model: 'commentaire'
  	}

  }
};


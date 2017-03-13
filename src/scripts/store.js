import _ from 'underscore'
import Backbone from 'backbone'
import {GroupCollection, GroupModel, MessageCollection, MessageModel} from './models/models'

const STORE = _.extend( Backbone.Events, {

    data: {
        groupCollection: new GroupCollection(),
        groupModel: new GroupModel(),
        messageModel: new MessageModel(),
        messageCollection: new MessageCollection()
    },

    _getData: function() {
        // console.log(this.data)
        return _.clone(this.data)
    },

    _broadcastChange: function() {
        this.trigger('updateContent')
    },

    _initialize: function() {
        this.data.groupCollection.on('sync update', this._broadcastChange.bind(this)),
        this.data.groupModel.on('sync update', this._broadcastChange.bind(this)),
        this.data.messageModel.on('sync update', this._broadcastChange.bind(this)),
        this.data.messageCollection.on('sync update', this._broadcastChange.bind(this))
    },

    _addGroup: function(groupModel) {
        this.data.groupCollection.add(groupModel)
    },

    _addMessage: function(messageModel) {
        this.data.messageCollection.add(messageModel)
    }

    //I don't know what this does???
    _set: function(prop, value) {
        // console.log(prop, value)
        if(this.data[prop] === undefined) {
            console.log('does not exist')
        }
        this.data[prop] = value
        this._broadcastChange()
    }
})

STORE._initialize()

export default STORE
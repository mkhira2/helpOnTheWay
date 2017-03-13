import _ from 'underscore'
import Backbone from 'backbone'
import {GroupCollection, GroupModel, MessageCollection, MessageModel} from './models/models'

const STORE = _.extend( Backbone.Events, {

    _data: {
        groupCollection: new GroupCollection(),
        groupModel: new GroupModel(),
        messageModel: new MessageModel(),
        messageCollection: new MessageCollection()
    },

    _getData: function() {
        return this._data
    },

    _get: function(key){
        return this._data[key]
    },

    _emitChange: function() {
        this.trigger('STOREChange')
    },

    _initialize: function() {
        this.data.groupCollection.on('sync update', this._broadcastChange.bind(this)),
        this.data.groupModel.on('sync update', this._broadcastChange.bind(this)),
        this.data.messageModel.on('sync update', this._broadcastChange.bind(this)),
        this.data.messageCollection.on('sync update', this._broadcastChange.bind(this))
    },

    _set: function(attrs) {
        this.data = _.extend({},this.data,attrs)
        this._broadcastChange()
    }
})

STORE._initialize()

export default STORE
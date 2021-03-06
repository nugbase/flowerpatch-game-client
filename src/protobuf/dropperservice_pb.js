/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var protobuf_servicecommon_pb = require('../protobuf/servicecommon_pb.js');
goog.exportSymbol('proto.protobuf.DropRequest', null, global);
goog.exportSymbol('proto.protobuf.DropRequest.Type', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protobuf.DropRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf.DropRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protobuf.DropRequest.displayName = 'proto.protobuf.DropRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protobuf.DropRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf.DropRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf.DropRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.DropRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueID: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceAccount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destAccount: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    storeDBID: jspb.Message.getFieldWithDefault(msg, 5, 0),
    wei: jspb.Message.getFieldWithDefault(msg, 6, ""),
    fulfilmentTx: jspb.Message.getFieldWithDefault(msg, 7, ""),
    nFTContract: jspb.Message.getFieldWithDefault(msg, 8, ""),
    nFTTokenID: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protobuf.DropRequest}
 */
proto.protobuf.DropRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf.DropRequest;
  return proto.protobuf.DropRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf.DropRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf.DropRequest}
 */
proto.protobuf.DropRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueID(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestAccount(value);
      break;
    case 4:
      var value = /** @type {!proto.protobuf.DropRequest.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStoreDBID(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWei(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFulfilmentTx(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNFTContract(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNFTTokenID(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf.DropRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf.DropRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf.DropRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.DropRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueID();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestAccount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStoreDBID();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getWei();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFulfilmentTx();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getNFTContract();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getNFTTokenID();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protobuf.DropRequest.Type = {
  MARKET_FLOWER: 0,
  ETHEREUM: 1,
  RANDOM_NFT: 2
};

/**
 * optional string unique_i_d = 1;
 * @return {string}
 */
proto.protobuf.DropRequest.prototype.getUniqueID = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.protobuf.DropRequest.prototype.setUniqueID = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_account = 2;
 * @return {string}
 */
proto.protobuf.DropRequest.prototype.getSourceAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.protobuf.DropRequest.prototype.setSourceAccount = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dest_account = 3;
 * @return {string}
 */
proto.protobuf.DropRequest.prototype.getDestAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.protobuf.DropRequest.prototype.setDestAccount = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Type type = 4;
 * @return {!proto.protobuf.DropRequest.Type}
 */
proto.protobuf.DropRequest.prototype.getType = function() {
  return /** @type {!proto.protobuf.DropRequest.Type} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.protobuf.DropRequest.Type} value */
proto.protobuf.DropRequest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 store_d_b_i_d = 5;
 * @return {number}
 */
proto.protobuf.DropRequest.prototype.getStoreDBID = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.protobuf.DropRequest.prototype.setStoreDBID = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string wei = 6;
 * @return {string}
 */
proto.protobuf.DropRequest.prototype.getWei = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.protobuf.DropRequest.prototype.setWei = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string fulfilment_tx = 7;
 * @return {string}
 */
proto.protobuf.DropRequest.prototype.getFulfilmentTx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.protobuf.DropRequest.prototype.setFulfilmentTx = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string n_f_t_contract = 8;
 * @return {string}
 */
proto.protobuf.DropRequest.prototype.getNFTContract = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.protobuf.DropRequest.prototype.setNFTContract = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 n_f_t_token_i_d = 9;
 * @return {number}
 */
proto.protobuf.DropRequest.prototype.getNFTTokenID = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.protobuf.DropRequest.prototype.setNFTTokenID = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


goog.object.extend(exports, proto.protobuf);
